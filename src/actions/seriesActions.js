import firebase from "@firebase/app";
import "@firebase/database";

import { Alert } from 'react-native';

export const SET_SERIES = 'SET_SERIES';
const setSeries = series => ({
    type: SET_SERIES,
    series
});

export const watchSeries = () => {
    const { currentUser } = firebase.auth();

    return dispatch => {
        firebase
            .database()
            .ref(`/users/${currentUser.uid}/series`)
            .on('value', snapshot => {
                const series = snapshot.val();
                const action = setSeries(series);
                dispatch(action);
            });
    }
}

export const deleteSerie = serie => {
    return dispatch => {
        return new Promise((resolve, reject) => {
            Alert.alert(
                'Deletar',
                `Deseja deletar a série ${serie.title}?`,
                [
                    {
                        text: 'Não',
                        onPress: () => {
                            resolve(false); // Para saber se a série foi deletada
                        },
                        style: 'cancel' // IOS
                    },
                    {
                        text: 'Sim',
                        onPress: async () => {
                            const { currentUser } = firebase.auth();

                            await firebase
                                .database()
                                .ref(`/users/${currentUser.uid}/series/${serie.id}`)
                                .remove();

                            resolve(true);
                        }
                    }
                ],
                { cancelable: false }
            )
        });
    }
}