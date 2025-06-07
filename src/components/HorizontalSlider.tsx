import React from 'react';
import {FlatList, Text, View, StyleSheet} from 'react-native';
import {MovieI} from '../interfaces/movies.interface';
import MoviePoster from './MoviePoster';

interface HorizontalSliderProps {
  title?: string;
  movies: MovieI[];
}

const HorizontalSlider = ({title, movies}: HorizontalSliderProps) => {
  return (
    <View style={{marginVertical: 10}}>
      {title && <Text style={styles.title}>{title}</Text>}
      <FlatList
        data={movies}
        renderItem={({item}) => (
          <MoviePoster
            movie={item}
            stylesCard={{width: 140, height: 200, marginHorizontal: 8}}
          />
        )}
        keyExtractor={item => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.flatListContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
    marginBottom: 5,
  },
  flatListContainer: {
    paddingHorizontal: 2,
  },
});

export default HorizontalSlider;
