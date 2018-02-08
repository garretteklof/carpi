const diemsReducerDefaultState = [];

export default (state = diemsReducerDefaultState, action ) => {
	switch (action.type) {
		case 'ADD_DIEM':
			return [
				...state,
				action.diem
			];
		case 'EDIT_DIEM':
			return state.map((diem) => {
				if (diem.id === action.id) {
					return {
						...diem,
						...action.updates
					};
				} else {
					return diem;
				}
			});
		default:
			return state;
	}
};