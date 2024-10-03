export const formatDate = (date: Date): string => {
	const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', 'day': '2-digit', timeZone: 'UTC' };
	return date.toLocaleDateString(undefined, options);
}

