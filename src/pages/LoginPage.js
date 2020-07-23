import React from 'react';
import { View,  TextInput, StyleSheet } from 'react-native';

import FormRow from '../components/FormRow';

export default class LoginPage extends React.Component {
    render() {
        return (
            <View>
                <FormRow>
                    <TextInput 
                        placeholder="exemplo@email.com"
                        style={styles.input} 
                    />
                </FormRow>
                <FormRow>
                    <TextInput 
                        placeholder="******"
                        style={styles.input}
                        secureTextEntry
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