export const setStartDate = (startDate) => ({
	type: 'SET_START_DATE',
	startDate
});

export const setEndDate = (endDate) => ({
	type: 'SET_END_DATE',
	endDate
});

export const setActivityText = (activityText = '') => ({
	type: 'SET_ACTIVITY_TEXT',
	activityText
});

export const setActivityLine = (activity) => ({
	type: 'SET_ACTIVITY_LINE',
	activity
});