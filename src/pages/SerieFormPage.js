import React from 'react';
import { 
    StyleSheet, 
    View, 
    Text, 
    TextInput,
    Picker,
    Slider,
    Button,
    ScrollView,
    KeyboardAvoidingView
} from 'react-native';
import { connect } from 'react-redux';

import { setField, saveSerie } from '../actions';

import FormRow from '../components/FormRow';

const SerieFormPage = ({ 
    serieForm, 
    setField, 
    saveSerie,
    navigation 
}) => (
    <KeyboardAvoidingView 
        behavior="padding" 
        enabled
        keyboardVerticalOffset={10}
    >
        <ScrollView>
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
                    <Picker.Item label="Gênero" color="#c5c5c5"/>
                    <Picker.Item label="Policial" value="police" />
                    <Picker.Item label="Comédia" value="comedy" />
                    <Picker.Item label="Terror" value="horror" />
                </Picker>
            </FormRow>
            <FormRow>
                <View style={styles.sameRow}>
                    <Text>Nota: </Text>
                    <Text>{serieForm.rate}</Text>
                </View>
                <Slider
                    value={serieForm.rate}
                    onValueChange={value => setField('rate', value)}
                    maximumValue={100}
                    step={5}
                />
            </FormRow>
            <FormRow>
                <TextInput 
                    style={styles.input}
                    placeholder="Descrição"
                    value={serieForm.description}
                    onChangeText={value => setField('description', value)}
                    underlineColorAndroid='#000'
                    numberOfLines={4}
                    multiline={true}
                />
            </FormRow>

            <Button 
                title="Salvar"
                onPress={async () => {
                    await saveSerie(serieForm);
                    navigation.goBack();
                }}
            />
        </ScrollView>
    </KeyboardAvoidingView>
);

const styles = StyleSheet.create({
	input: {
        paddingLeft: 5,
        paddingRight: 5,
        paddingBottom: 5
    },
    sameRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 15,
        paddingRight: 15,
        paddingBottom: 10
    }
});

function mapStateToProps(state) {
    return {
        serieForm: state.serieForm
    }
}

const mapDispatchToProps = {
    setField,
    saveSerie
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SerieFormPage);