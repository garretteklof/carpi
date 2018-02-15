import moment from 'moment';

export default (diems, { startDate, endDate, activityText }) => {
	return diems.filter((diem) => {
		const diemDate = moment(diem.date);
		const startDateMatch = startDate ? startDate.isSameOrBefore(diemDate, 'day') : true;
		const endDateMatch = endDate ? endDate.isSameOrAfter(diemDate, 'day') : true;
		const activityTextMatch = diem.activities.map(({ name }) => (
			name.toLowerCase().includes(activityText.toLowerCase()))).includes(true);
		const remainderMatch = diem.remainder ? 'unrecorded'.includes(activityText.toLowerCase()) : false;
		return startDateMatch && endDateMatch && (activityTextMatch || remainderMatch);
	}).sort((a,b) => a.date < b.date ? 1 : -1);
};