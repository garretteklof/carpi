import moment from 'moment';


export const diemDateMatch = (diems, {startDate, endDate }) => {
	return diems.filter((diem) => {
		const diemDate = moment(diem.date);
		const startDateMatch = startDate ? startDate.isSameOrBefore(diemDate, 'day') : true;
		const endDateMatch = endDate ? endDate.isSameOrAfter(diemDate, 'day') : true;
		return startDateMatch && endDateMatch;
	})};

export const diemSortByDate = (...args) => {
	return diemDateMatch(...args).sort((a,b) => a.date < b.date ? 1 : -1);
};

/*export const diemGraphIt = (...args) => {
	const nameArray = diemDateMatch(...args).map((diem) => diem.activities.name);
	const timeSpentArray = diemDateMatch(...args).map((diem) => diem.activities.timeSpent);
	console.log(nameArray);
	return nameArray;

}; */
