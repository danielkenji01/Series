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
    KeyboardAvoidingView,
    ActivityIndicator,
    Alert
} from 'react-native';
import { connect } from 'react-redux';

import { 
    setField, 
    saveSerie, 
    setWholeSerie, 
    resetForm 
} from '../actions';

import FormRow from '../components/FormRow';

class SerieFormPage extends React.Component { 

    constructor(props) {
        super(props);

        this.state = {
            isLoading: false
        }
    }

    componentDidMount() {
        const { setWholeSerie, navigation, resetForm } = this.props;

        const { params } = navigation.state;

        if (params && params.serieToEdit) {
            return setWholeSerie(params.serieToEdit);
        }
            
        return resetForm();
    }

    reverseLoading() {
        const { isLoading } = this.state;

        this.setState({
            isLoading: !isLoading
        });
    }

    render() {
        const {
            serieForm, 
            setField, 
            saveSerie,
            navigation 
        } = this.props;

        return (
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
                            <Picker.Item label="Policial" value="Policial" />
                            <Picker.Item label="Comédia" value="Comédia" />
                            <Picker.Item label="Terror" value="Terror" />
                            <Picker.Item label="Ficção Científica" value="Ficção Científica" />
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
        
                    {
                        this.state.isLoading ? 
                            <ActivityIndicator /> :
                            <Button 
                                title="Salvar"
                                onPress={async () => {
                                    this.reverseLoading();
                                    try {
                                        await saveSerie(serieForm);
                                        navigation.goBack();
                                    } catch(error) {
                                        Alert.alert('Erro', 'Um erro ocorreu');
                                    } finally {
                                        this.reverseLoading();
                                    }
                                }}
                            />
                    }
                </ScrollView>
            </KeyboardAvoidingView>
        );
    } 
}

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
    saveSerie,
    setWholeSerie,
    resetForm
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SerieFormPage);