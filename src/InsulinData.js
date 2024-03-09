import React from 'react';
import Accordion from 'react-bootstrap/Accordion'; 

export default function InsulinData({
	carbs,
	duration,
	insulin,
	currentBasal,
	eventType,
	carbsOnBoard,
	time,
	allInsulinData,
}) {
	console.log('allInsulinData', allInsulinData);
	const date = new Date(time);

	const lastCarbEntry = allInsulinData.reduce((mostRecent, entry) => {
		//check if current entry is not null
		if (entry.carbs !== null) {
			//parse timestamp
			const entryTimestamp = new Date(entry.timestamp);
			
			// check if this is the most recent entry
			if (!mostRecent || entryTimestamp > mostRecent.timestamp) {
				return { timestamp: entryTimestamp, carbs: entry.carbs };
			}
		}
		// otherwise return current entry
		return mostRecent;
	}, null);

	// filter allInsulinData for entries from today
	const todayEntries = allInsulinData.filter((entry) => {
		const entryDate = new Date(entry.timestamp);
		return (
			entryDate.getFullYear() === date.getFullYear() &&
			entryDate.getMonth() === date.getMonth() &&
			entryDate.getDate() === date.getDate()
		);
	});
	console.log('>>', todayEntries)

	const totalDailyCarbs = todayEntries.reduce((sum, entry) => {
		return sum + (entry.carbs || 0);
	}, 0); 

	console.log('totalcarbs', totalDailyCarbs); 

	return (
		<>
			<div className='insulinData'>
				<p>Time: {date.toLocaleString()}</p>
				<p>Carbs: {carbs}</p>
				<p>Duration: {duration}</p>
				<p>Bolus: {insulin}</p>
				<p>Basal Rate: {currentBasal}</p>
				<p>Event Type: {eventType}</p>
				<p>Carbs on Board:{carbsOnBoard}</p>
			</div>
			<div>
				<h3>Most Recent Carb Entry</h3>
				<p>{lastCarbEntry.carbs}</p>
				<p>{lastCarbEntry.timestamp.toLocaleString()}</p>
			</div>
			<Accordion>
			<Accordion.Item eventKey="0">
				<Accordion.Header>All Logs</Accordion.Header>
				<Accordion.Body>
			<ul>
				{allInsulinData.map((item) => (
					<li key={item._id}>
						<p>
							<strong>Timestamp:</strong> {item.timestamp}
						</p>
						<p>
							<strong>Entered By:</strong> {item.enteredBy}
						</p>
						<p>
							<strong>Insulin Type:</strong> {item.insulinType}
						</p>
						<p>
							<strong>Event Type:</strong> {item.eventType}
						</p>
						<p>
							<strong>Temp:</strong> {item.temp}
						</p>
						<p>
							<strong>Automatic:</strong> {item.automatic ? 'Yes' : 'No'}
						</p>
						<p>
							<strong>Rate:</strong> {item.rate}
						</p>
						<p>
							<strong>Absolute:</strong> {item.absolute}
						</p>
						<p>
							<strong>Duration:</strong> {item.duration}
						</p>
						<p>
							<strong>UTC Offset:</strong> {item.utcOffset}
						</p>
						<p>
							<strong>Mills:</strong> {item.mills}
						</p>
						<p>
							<strong>Carbs:</strong> {item.carbs}
						</p>
						<p>
							<strong>Insulin:</strong> {item.insulin}
						</p>
					</li>
				))}
			</ul>
			</Accordion.Body>
			</Accordion.Item>
			</Accordion>

		</>
	);
}
