import React, {FC} from 'react';
import {
  Image,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
  TouchableOpacity,
} from 'react-native';
import {MovieI} from '../interfaces/movies.interface';
import {useNavigation} from '@react-navigation/native';
import {DetailsScreenNavigationProp} from '../navigation/Navigation';

interface MoviePosterProps {
  movie: MovieI;
  stylesCard?: StyleProp<ViewStyle>;
}

const MoviePoster: FC<MoviePosterProps> = ({movie, stylesCard}) => {
  const uri = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
  const navigation = useNavigation<DetailsScreenNavigationProp>();

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => navigation.navigate('DetailsScreen', movie)}>
      <View
        style={[
          stylesCard
            ? stylesCard
            : {
                width: 300,
                height: 420,
              },
        ]}>
        <View style={styles.imageContainer}>
          <Image source={{uri}} style={styles.image} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
  },
  imageContainer: {
    flex: 1,
    borderRadius: 10,
    overflow: 'hidden',
    shadowColor: 'black',
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowOpacity: 0.54,
    shadowRadius: 10,
    elevation: 10,
  },
});

export default MoviePoster;
