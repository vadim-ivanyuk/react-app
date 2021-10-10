export const convertDuration = (duration) =>
	`${new Date(duration * 1000).toISOString().substr(14, 5)} hours`;
