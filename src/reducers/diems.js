const diemsReducerDefaultState = [];

export default (state = diemsReducerDefaultState, action ) => {
	switch (action.type) {
		case 'ADD_DIEM':
			return [
				...state,
				action.diem
			];
		case 'REMOVE_DIEM':
			return state.filter(({ id }) => id !== action.id );
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