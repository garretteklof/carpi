import moment from 'moment';

const filtersReducerDefaultState = {
	startDate: moment().startOf('month'),
	endDate: moment().endOf('month'),
	activityText: ''
};

export default (state = filtersReducerDefaultState, action) => {
	switch(action.type) {
		case 'SET_START_DATE':
			return {
				...state,
				startDate: action.startDate
			};
		case 'SET_END_DATE':
			return {
				...state,
				endDate: action.endDate
			};
		case 'SET_ACTIVITY_TEXT':
			return {
				...state,
				activityText: action.activityText
			};
		default:
			return state;
	}
};