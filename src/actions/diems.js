import database from '../firebase/firebase';

export const addDiem = (diem) => ({
	type: 'ADD_DIEM',
	diem
});


export const startAddDiem = (diemData = {}) => {
	return (dispatch, getState) => {
		const uid = getState().auth.uid;
		const {
			date = 0,
			activities = [],
			remainder = 0
		} = diemData;
		const diem = { date, activities, remainder };
		return database.ref(`users/${uid}/diems`).push(diem).then((ref) => {
			dispatch(addDiem({
				id: ref.key,
				...diem
			}));
		});
	};
};

export const removeDiem = ({ id } = {}) => ({
	type: 'REMOVE_DIEM',
	id
});

export const startRemoveDiem = ({ id } = {}) => {
	return (dispatch, getState) => {
		const uid = getState().auth.uid;
		return database.ref(`users/${uid}/diems/${id}`).remove().then(() => {
			dispatch(removeDiem({id}));
		});
	};
};

export const editDiem = (id, updates) => ({
	type: 'EDIT_DIEM',
	id,
	updates
});