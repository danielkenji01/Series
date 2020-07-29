import React from 'react';
import { StyleSheet, View, FlatList, Text } from 'react-native';

import SerieCard from '../components/SerieCard';
import AddSerieCard from '../components/AddSerieCard';

import { connect } from 'react-redux';

const isEven = number => number % 2 === 0;

const SeriesPage = ({ series, navigation }) => (
	<View>
		<FlatList 
			data={[
				...series,
				{ isLast: true }
			]}
			renderItem={({ item, index }) => (
				item.isLast ? 
				<AddSerieCard 
					isFirstColumn={isEven(index)}
					onPress={() => navigation.navigate('SerieForm')}
				/> :
				<SerieCard 
					serie={item}
					isFirstColumn={isEven(index)}
					onNavigate={() => navigation.navigate('SerieDetail', { serie: item })}
				/>
			)}
			keyExtractor={item => item.id}
			numColumns={2}
			ListHeaderComponent={props => (
				<View style={styles.marginTop} />
			)}
			ListFooterComponent={props => (
				<View style={styles.marginBottom} />
			)}
		/>
	</View>
);

const styles = StyleSheet.create({
	marginTop: {
		marginTop: 5
	},
	marginBottom: {
		marginBottom: 5
	}
})

const mapStateToProps = state => {
	const { series } = state;
	
	return { series };
}

export default connect(
	mapStateToProps
)(SeriesPage);