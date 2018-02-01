const diemsReducerDefaultState = [];

export default (state = diemsReducerDefaultState, action ) => {
	switch (action.type) {
		case 'ADD_DIEM':
			return [
				...state,
				action.diem
			];
		default:
			return state;
	}
};