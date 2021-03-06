import database from '../firebase/firebase';

export const addDiem = (diem) => ({
  type: 'ADD_DIEM',
  diem
});

export const startAddDiem = (diemData = {}) => {
  return (dispatch, getState) => {
    const { uid } = getState().auth;
    const { date = 0, activities = [], remainder = 0 } = diemData;
    const diem = { date, activities, remainder };
    return database
      .ref(`users/${uid}/diems`)
      .push(diem)
      .then((ref) => {
        dispatch(
          addDiem({
            id: ref.key,
            ...diem
          })
        );
      });
  };
};

export const removeDiem = ({ id } = {}) => ({
  type: 'REMOVE_DIEM',
  id
});

export const startRemoveDiem = ({ id } = {}) => {
  return (dispatch, getState) => {
    const { uid } = getState().auth;
    return database
      .ref(`users/${uid}/diems/${id}`)
      .remove()
      .then(() => {
        dispatch(removeDiem({ id }));
      });
  };
};

export const editDiem = (id, updates) => ({
  type: 'EDIT_DIEM',
  id,
  updates
});

export const startEditDiem = (id, updates) => {
  return (dispatch, getState) => {
    const { uid } = getState().auth;
    return database
      .ref(`users/${uid}/diems/${id}`)
      .update(updates)
      .then(() => {
        dispatch(editDiem(id, updates));
      });
  };
};

export const setDiems = (diems) => ({
  type: 'SET_DIEMS',
  diems
});

export const startSetDiems = () => {
  return (dispatch, getState) => {
    const { uid } = getState().auth;
    return database
      .ref(`users/${uid}/diems`)
      .once('value')
      .then((snapshot) => {
        const diems = [];
        snapshot.forEach((childSnapshot) => {
          diems.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
          });
        });
        dispatch(setDiems(diems));
      });
  };
};
