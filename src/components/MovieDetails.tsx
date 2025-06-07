import Icon from '@react-native-vector-icons/ionicons';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MovieFullI } from '../interfaces/movies.interface';
import { Companies } from './Companies';

interface Props {
  movieFull?: MovieFullI;
}

const MovieDetails = ({movieFull}: Props) => {

  return (
    <View style={styles.container}>
      <View style={styles.ratingRow}>
        <Icon
          name="star-outline"
          size={20}
          style={styles.starIcon}
          color="gray"
        />
        <Text style={styles.ratingText}>{movieFull?.vote_average}</Text>
        <Text style={styles.genres}>
          - {movieFull?.genres.map(g => g.name).join(', ')}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginTop: 10,
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  starIcon: {
    marginRight: 5,
    color: '#e1b12c',
  },
  genres: {
    marginLeft: 10,
    fontWeight: 'bold',
    fontSize: 16,
  },
  ratingText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default MovieDetails;
