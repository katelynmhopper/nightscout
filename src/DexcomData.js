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
	return (
		<div className='GlucoseValueBox'>
			<h1>{number}</h1>
			<div style={{ margin: '10px' }}>{change}</div>
			<div>{arrow}</div>
		</div>
	);
}
