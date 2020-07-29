import React from 'react';
import { 
    StyleSheet, 
    View, 
    Text, 
    TextInput 
} from 'react-native';

import FormRow from '../components/FormRow';

const SerieFormPage = props => (
	<View>
		<FormRow first>
            <TextInput 
                style={styles.input}
                placeholder="Título"
                value=""
                onChangeText={value => console.log(value)}
            />
        </FormRow>
	</View>
);

const styles = StyleSheet.create({
	input: {
        paddingLeft: 5,
        paddingRight: 5,
        paddingBottom: 5
    }
});

export default SerieFormPage;