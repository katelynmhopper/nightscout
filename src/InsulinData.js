import React from 'react';

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
	console.log('???', allInsulinData[(0, 15)]);

	return (
		<>
			<div className='insulinData'>
				<p>Time: {time}</p>
				<p>Carbs: {carbs}</p>
				<p>Duration: {duration}</p>
				<p>Bolus: {insulin}</p>
				<p>Basal Rate: {currentBasal}</p>
				<p>Event Type: {eventType}</p>
				<p>Carbs on Board{carbsOnBoard}</p>
			</div>
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
		</>
	);
}
