import firebase from 'firebase';

export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
const userLoginSuccess = user => ({
    type: USER_LOGIN_SUCCESS,
    user
});

export const USER_LOGOUT = 'USER_LOGOUT';
const userLogout = () => ({
    type: USER_LOGOUT
});

export const tryLogin = ({ email, password }) => dispatch => {
    firebase
        .auth()
        .signInWithEmailAndPassword(
            email, 
            password
        )
        .then(user => {
            const action = userLoginSuccess(user);
            dispatch(action);

            console.log(user);
        })
        /*.catch(error => {

            if (error.code === 'auth/user-not-found') {
                /* Alert.alert(Title, Message, Button[{text, onPress}])
                Alert.alert(
                    'Usuário não encontrado',
                    'Deseja criar um cadastro com as informações inseridas?',
                    [
                        { 
                            text: 'Não',
                            onPress: () => console.log('Usuário não quer criar conta :('),
                            style: 'cancel' // Only IOS =(
                        },
                        {
                            text: 'Sim',
                            onPress: () => {
                                firebase
                                    .auth()
                                    .createUserWithEmailAndPassword(
                                        mail, password
                                    )
                                    .then(loginUserSuccess)
                                    .catch(loginUserFailed)
                            }
                        }
                    ],
                    { cancelable: false }
                );
                return;
            }
            loginUserFailed
        })
        .then(() => this.setState({
            isLoading: false
        })); */
}