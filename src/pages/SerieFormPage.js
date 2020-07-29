import React from 'react';
import { 
    StyleSheet, 
    View, 
    Text, 
    TextInput,
    Picker
} from 'react-native';
import { connect } from 'react-redux';

import { setField } from '../actions';

import FormRow from '../components/FormRow';

const SerieFormPage = ({ serieForm, setField }) => (
	<View>
		<FormRow first>
            <TextInput 
                style={styles.input}
                placeholder="Título"
                value={serieForm.title}
                onChangeText={value => setField('title', value)}
                underlineColorAndroid='#000'
            />
        </FormRow>
        <FormRow>
            <TextInput 
                style={styles.input}
                placeholder="Url da imagem"
                value={serieForm.img}
                onChangeText={value => setField('img', value)}
                underlineColorAndroid='#000'
            />
        </FormRow>
        <FormRow>
            <Picker
                style={styles.picker}
                selectedValue={serieForm.gender}
                onValueChange={(itemValue, itemIndex) => setField('gender', itemValue)}
            >
                <Picker.Item label="Policial" value="police" />
                <Picker.Item label="Comédia" value="comedy" />
                <Picker.Item label="Terror" value="horror" />
            </Picker>
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

function mapStateToProps(state) {
    return {
        serieForm: state.serieForm
    }
}

const mapDispatchToProps = {
    setField
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SerieFormPage);