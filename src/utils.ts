export const dateConverter = (date: string): Date | void => {
	if (date != undefined) {
		let newDate = date.split("/").map((item: string): number => {
			return parseInt(item);
		});
		let res = new Date(newDate[2], newDate[1] + 1, newDate[0]);
		res.setFullYear(res.getFullYear() + 100);
		const year = res.getUTCFullYear();
		const month = res.getUTCMonth() + 1; // add 1 because getUTCMonth() returns zero-indexed month
		const day = res.getUTCDate();

		return new Date(Date.UTC(year, month - 1, day));
	}
};
