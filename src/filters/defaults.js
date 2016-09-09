export default (input, defaultValue) => {
	if (input === undefined || input === null || input === false) return defaultValue;
	return input;
};
