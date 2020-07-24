import React from 'react';
import { View,  TextInput, StyleSheet } from 'react-native';

import FormRow from '../components/FormRow';

export default class LoginPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            mail: '',
            password: ''
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

    render() {
        return (
            <View>
                <FormRow>
                    <TextInput 
                        placeholder="exemplo@email.com"
                        style={styles.input}
                        value={this.state.mail}
                        onChangeText={value => this.onChangeHandler('mail', value)}
                    />
                </FormRow>
                <FormRow>
                    <TextInput 
                        placeholder="******"
                        style={styles.input}
                        secureTextEntry
                        value={this.state.password}
                        onChangeText={value => this.onChangeHandler('password', value)}
                    />
                </FormRow>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    input: {
        paddingLeft: 5,
        paddingRight: 5,
        paddingBottom: 5
    }
});