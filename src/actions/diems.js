import uuid from 'uuid';

export const addDiem = ({
	date = 0,
	activities = []
} = {}) => ({
	type: 'ADD_DIEM',
	diem: {
		id: uuid(),
		date,
		activities
	}
	});

export const removeDiem = ({ id } = {}) => ({
	type: 'REMOVE_DIEM',
	id
});

export const editDiem = (id, updates) => ({
	type: 'EDIT_DIEM',
	id,
	updates
});