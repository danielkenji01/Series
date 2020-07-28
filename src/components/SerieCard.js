import React from 'react';
import { 
    View, 
    Text, 
    StyleSheet, 
    Dimensions 
} from 'react-native';

const SerieCard = ({ serie }) => (
    <View style={styles.container}>
        <View style={styles.card}>
            <Text>{`${serie.id} - ${serie.title}`}</Text>
        </View>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        height: 150
    },
    card: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#c5c5c5'
    }
});

export default SerieCard;