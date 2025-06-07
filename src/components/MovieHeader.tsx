import React, {ReactNode} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Icon from '@react-native-vector-icons/ionicons';
import {MovieI} from '../interfaces/movies.interface';
import {Companies} from './Companies';

interface Props {
  movie: MovieI;
  screenHeight: number;
  onBack: () => void;
  children: ReactNode;
}

const MovieHeader = ({movie, screenHeight, onBack, children}: Props) => {
  const uri = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;

  return (
    <View style={{position: 'relative'}}>
      <Icon
        name="arrow-back-outline"
        style={styles.backIcon}
        onPress={onBack}
      />
      <View style={[styles.imageContainer, {height: screenHeight * 0.7}]}>
        <View style={styles.imageBorder}>
          <Image style={styles.posterImage} source={{uri}} />
        </View>
        <View
          style={{
            flex: 1,
            position: 'absolute',
            bottom: 10,
            width: '100%',
            paddingHorizontal: 20,
          }}>
          {children}
        </View>
      </View>
      <View style={styles.marginContainer}>
        <Text style={styles.subTitle}>{movie.original_title}</Text>
        <Text style={styles.title}>{movie.title}</Text>
        <Text style={styles.description}>{movie.overview}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  backIcon: {
    position: 'absolute',
    top: 20,
    left: 20,
    backgroundColor: 'white',
    color: 'black',
    width: 50,
    height: 50,
    lineHeight: 50,
    textAlign: 'center',
    borderRadius: 25,
    fontSize: 30,
    zIndex: 1,
    shadowColor: 'gray',
    shadowOffset: {width: 20, height: 20},
    shadowOpacity: 0.86,
    shadowRadius: 10,
  },
  imageContainer: {
    width: '100%',
    position: 'relative',
  },
  imageBorder: {
    flex: 1,
    overflow: 'hidden',
    borderBottomEndRadius: 35,
    borderBottomStartRadius: 35,
    shadowColor: '#000',
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10,
    elevation: 10,
  },
  posterImage: {
    flex: 1,
  },
  marginContainer: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  subTitle: {
    fontSize: 16,
    opacity: 0.8,
  },
  title: {
    fontSize: 20,
    color: '#000',
    fontWeight: 'bold',
  },
  description: {
    fontSize: 16,
    color: '#808080',
    marginTop: 10,
  },
});

export default MovieHeader;
