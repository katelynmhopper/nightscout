export default function DexcomData({ direction, number, change }) {
	let arrow;
	switch (direction) {
		case 'Flat':
			arrow = '➡️';
			break;
		case 'FortyFiveUp':
			arrow = '↗️';
			break;
		case 'FortyFiveDown':
			arrow = '↘️';
			break;
		case 'SingleDown':
			arrow = '⬇️';
			break;
		case 'SingleUp':
			arrow = '⬆️';
			break;
		default:
			arrow = 'No Data';
	}
	let numberClassName = 'steady'; 

	if (number > 150) { 
		numberClassName = 'high-glucose'; 
		alert('Glucose is High'); 
	} else if (number < 70) {
		numberClassName = 'low-glucose'; 
		alert('Glucose is Low');
	} else {
		numberClassName = 'steady'; 
	}
	return (
		<div className={`GlucoseValueBox ${numberClassName}`}>
			<h1>{number}</h1>
			<div style={{ margin: '10px' }}>{change}</div>
			<div>{arrow}</div>
		</div>
	);
}
