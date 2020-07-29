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

export const saveSerie = serie => {
    const { currentUser } = firebase.auth();
    const { uid } = currentUser;

    firebase
        .database()
        .ref(`/users/${uid}/series`)
        .push(serie)
        .then(() => {
            console.log('Salvo no firebase')
        });
        
    console.log('Salvando a série', serie);
}