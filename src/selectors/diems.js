import moment from 'moment';

export default (diems, {startDate, endDate }) => {
	return diems.filter((diem) => {
		const diemDate = moment(diem.date);
		const startDateMatch = startDate ? startDate.isSameOrBefore(diemDate, 'day') : true;
		const endDateMatch = endDate ? endDate.isSameOrAfter(diemDate, 'day') : true;
		return startDateMatch && endDateMatch;
	}).sort((a,b) => a.date < b.date ? 1 : -1);
};