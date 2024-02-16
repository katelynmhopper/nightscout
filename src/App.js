import './App.css';
import { useState, useEffect } from 'react';
import DexcomData from './DexcomData';
import InsulinData from './InsulinData';

function App() {
	const [glucoseData, setGlucoseData] = useState(null);
	const [insulinData, setInsulinData] = useState(null);
	useEffect(() => {
		fetch(
			`https://night1--wealthy-money--gd6q9x227znq.code.run/api/v1/entries.json`
		)
			.then((response) => response.json())
			.then(setGlucoseData);
	}, []); //the empty array at the end make sure it only requests the api once

	useEffect(() => {
		fetch(
			`https://night1--wealthy-money--gd6q9x227znq.code.run/api/v1/treatments`
		)
			.then((response) => response.json())
			.then(setInsulinData);
	}, []);

	console.log('>>>', glucoseData);
	if (glucoseData)
		return (
			<div className='App'>
				<h1 style={{ margin: '10px' }}>NightScout Copy Cat </h1>
				<DexcomData
					direction={glucoseData[0].direction}
					number={glucoseData[0].sgv}
					change={glucoseData[0].trend}
				/>
				<InsulinData
					allInsulinData={insulinData}
					carbs={insulinData[0].carbs}
					duration={insulinData[0].duration}
					insulin={insulinData[0].insulin}
					currentBasal={insulinData[0].rate}
					eventType={insulinData[0].eventType}
					carbsOnBoard={insulinData[0].unabsorbed}
					time={insulinData[0].created_at}
				/>
			</div>
		);
	return <h1>Data</h1>;
}

export default App;
