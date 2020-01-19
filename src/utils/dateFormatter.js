export default function dateFormatter(ISODate) {
	const months = [
		'Jan',
		'Feb',
		'Mar',
		'Apr',
		'May',
		'Jun',
		'Jul',
		'Aug',
		'Sep',
		'Oct',
		'Nov',
		'Dec',
	];
	var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

	const d = new Date(ISODate);
	const year = d.getFullYear();
	const month = months[d.getMonth()];
	const date = d.getDate();
	const day = days[d.getDay()];
	return `${day} ${month} ${date} ${year}`;
}
