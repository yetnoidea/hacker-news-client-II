export default (expr, msg) => {
	const test = expr ? 'true' : 'false';
	if (msg) return `${msg}: ${test}`;
	return test;
}
