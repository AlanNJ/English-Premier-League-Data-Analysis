export const dateConverter = (date: string): Date => {
	if (date) {
		//for neglecting missing datapoints

		let newDate = date.split("/").map((item: string): number => {
			return parseInt(item);
		});
		let res = new Date(newDate[2], newDate[1] + 1, newDate[0]);
		res.setFullYear(res.getFullYear() + 100);
		const year = res.getUTCFullYear();
		const month = res.getUTCMonth() + 1; // add 1 because getUTCMonth() returns zero-indexed month
		const day = res.getUTCDate();

		return new Date(Date.UTC(year, month, day));
	}
	return new Date(Date.UTC(2018, 11 - 1, 3));
};
