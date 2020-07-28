import React from 'react';
import { 
    View,  
    TextInput,
    StyleSheet, 
    Button, 
    Text,
    ActivityIndicator,
    Alert
} from 'react-native';
import firebase from 'firebase';
import { connect } from 'react-redux';

import { tryLogin } from '../actions';

import FormRow from '../components/FormRow';
import SeriesPage from './SeriesPage';

class LoginPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            mail: '',
            password: '',
            isLoading: false,
            message: ''
        }
    }

    componentDidMount() {
        const firebaseConfig = {
            apiKey: "*************",
            authDomain: "*************",
            databaseURL: "*************",
            projectId: "*************",
            storageBucket: "*************",
            messagingSenderId: "*************",
            appId: "*************"
        };

        // Initialize Firebase
        if (!firebase.apps.length) {
            firebase.initializeApp(firebaseConfig);
        }
    }

    /* onChangeMail(mail) {
        this.setState({ mail });
    } 

    onChangePassword(password) {
        this.setState({ password });
    } */

    onChangeHandler(field, value) {
        /* ES5 - Atribuição de valores quando não se sabe o field no tempo de codificação, apenas no tempo de execução
        const newState = {};
        newState[field] = value; */ 

        /* ES6 */
        this.setState({
            [field]: value
        });
    }

    tryLogin() {
        this.setState({
            isLoading: true,
            message: ''
        });

        const { mail: email, password } = this.state;

        this.props.tryLogin({ 
            email, 
            password 
        }).then(user => {
            // this.setState({ message: 'Sucesso!' });
            if (user) {
                return this.props.navigation.replace('Main');
            } 

            this.setState({
                isLoading: false,
                message: ''
            });
        }).catch(error => {
            this.setState({
                isLoading: false,
                message: this.getMessageByErrorCode(error.code)
            });
        });
    }

    getMessageByErrorCode(errorCode) {
        switch (errorCode) {
            case 'auth/wrong-password': 
                return 'Senha incorreta';
            case 'auth/user-not-found':
                return 'Usuário não encontrado';
            case 'auth/invalid-email':
                return 'E-mail inválido';
            default: 
                return 'Erro ao tentar fazer o login';
        }
    }

    renderMessage() {
        const { message } = this.state;

        if (!message) {
            return null;
        }

        return (
            <View>
                <Text>{ message }</Text>
            </View>
        );
    }

    renderButton() {
        if (this.state.isLoading) {
            return <ActivityIndicator />;
        }

        return (
            <Button 
                title="Entrar"
                onPress={() => this.tryLogin()}
            />
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <FormRow first>
                    <TextInput 
                        placeholder="exemplo@email.com"
                        style={styles.input}
                        value={this.state.mail}
                        onChangeText={value => this.onChangeHandler('mail', value)}
                    />
                </FormRow>
                <FormRow last>
                    <TextInput 
                        placeholder="******"
                        style={styles.input}
                        secureTextEntry
                        value={this.state.password}
                        onChangeText={value => this.onChangeHandler('password', value)}
                    />
                </FormRow>

                { this.renderButton() }
                { this.renderMessage() }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingLeft: 10,
        paddingRight: 10
    },
    input: {
        paddingLeft: 5,
        paddingRight: 5,
        paddingBottom: 5
    }
});

export default connect(
    null,
    { tryLogin }
)(LoginPage);