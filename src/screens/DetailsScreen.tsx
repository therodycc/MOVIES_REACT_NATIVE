import {useNavigation} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {ActivityIndicator, Dimensions, FlatList, View} from 'react-native';
import CastItem from '../components/CastItem';
import useMoviesDetails from '../hooks/useMoviesDetails';
import {RootStackParams} from '../navigation/Navigation';

import MovieDetails from '../components/MovieDetails';
import MovieHeader from '../components/MovieHeader';
import {Companies} from '../components/Companies';

const screenHeight = Dimensions.get('screen').height;

interface DetailsScreenProps
  extends NativeStackScreenProps<RootStackParams, 'DetailsScreen'> {}

const DetailsScreen = ({route}: DetailsScreenProps) => {
  const movie = route.params;
  const {cast, isLoading, movieFull} = useMoviesDetails(movie.id);
  const navigation = useNavigation();

  const renderHeader = () => (
    <View>
      <MovieHeader
        movie={movie}
        screenHeight={screenHeight}
        onBack={() => navigation.goBack()}>
        {movieFull?.production_companies.length && (
          <Companies companies={movieFull!.production_companies} />
        )}
      </MovieHeader>
      {isLoading ? (
        <ActivityIndicator size={35} color="gray" style={{marginTop: 20}} />
      ) : (
        <MovieDetails movieFull={movieFull} />
      )}
    </View>
  );

  return (
    <FlatList
      data={cast}
      renderItem={({item}) => (
        <View style={{paddingHorizontal: 20}}>
          <CastItem actor={item} />
        </View>
      )}
      keyExtractor={item => item.id.toString()}
      ListHeaderComponent={renderHeader}
      contentContainerStyle={{paddingBottom: 30}}
    />
  );
};

export default DetailsScreen;
