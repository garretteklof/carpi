import uuid from 'uuid';

export const addDiem = ({
	reading = 0,
	writing = 0,
	exercising = 0,
	detracting = 0,
	createdAt = 0
} = {}) => ({
	type: 'ADD_DIEM',
	diem: {
		id: uuid(),
		reading,
		writing,
		exercising,
		detracting,
		createdAt
	}
	});