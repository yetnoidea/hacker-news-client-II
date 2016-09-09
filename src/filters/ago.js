export default (time) => {
	const then = new Date(time);
	const now = new Date();

	if (!isSameDay(then, now)) return then.toLocaleDateString();

	const diff = now.getTime() - then.getTime();

	const diffByHours = diff / (60 * 60 * 1000) | 0;
	if (diffByHours > 0) return `${diffByHours}hrs`;

	const diffByMinutes = diff / (60 * 1000) | 0;
	if (diffByMinutes > 0) return `${diffByMinutes}mins`;

	return 'just now';
};

function isSameDay(date1, date2) {
	return (
		date1.getDate() === date2.getDate() &&
		date1.getMonth() === date2.getMonth() &&
		date1.getFullYear() === date2.getFullYear()
	);
}
