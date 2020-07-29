// import firebase from 'firebase';
import firebase from "@firebase/app";
import "@firebase/database";

export const SET_FIELD = 'SET_FIELD';
export const setField = (field, value) => {
    return {
        type: SET_FIELD,
        field,
        value
    }
}

export const SERIE_SAVED_SUCCESS = 'SERIE_SAVED_SUCCESS';
const serieSavedSuccess = () => ({
    type: SERIE_SAVED_SUCCESS
})

export const saveSerie = serie => {
    const { currentUser } = firebase.auth();
    const { uid } = currentUser;

    return async dispatch => {
        try {
            await firebase
                .database()
                .ref(`/users/${uid}/series`)
                .push(serie);
            dispatch(serieSavedSuccess());
        } catch(e) {
            console.log('Deu algum erro:', e);
        }
    }
}