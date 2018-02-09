import uuid from 'uuid';

export const addDiem = ({
	date = 0,
	activities = [],
	remainder = 0
} = {}) => ({
	type: 'ADD_DIEM',
	diem: {
		id: uuid(),
		date,
		activities,
		remainder
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