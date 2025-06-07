import React, {useCallback, useContext, useEffect, useRef} from 'react';
import {ActivityIndicator, Animated, ScrollView, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Carousel} from '../components/Carrusel';
import {GradientBackground} from '../components/GradientBackground';
import HorizontalSlider from '../components/HorizontalSlider';
import {GradientContext} from '../context/GradientContext';
import {getImageColors} from '../helpers/getColores';
import useMovies from '../hooks/useMovies';
import {Header} from '../components/header';

const HomeScreen = () => {
  const {nowPlaying, popularMovies, topRatedMovies, upcomingMovies, loading} =
    useMovies();
  const {setMainColors} = useContext(GradientContext);

  const getPosterColors = useCallback(
    async (index: number) => {
      const movie = nowPlaying[index];
      const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

      const [primary, secondary] = await getImageColors(uri);
      primary && secondary && setMainColors({primary, secondary});
    },
    [nowPlaying, setMainColors],
  );

  useEffect(() => {
    if (nowPlaying?.length > 0) {
      getPosterColors(0);
    }
  }, [nowPlaying]);

  if (loading)
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator color="red" size={100} />
      </View>
    );

  return (
    <GradientBackground>
      <Header
        title="Inicio"
        showBack={false}
        onProfilePress={() => console.log('Perfil')}
      />
      <ScrollView
        style={{
          marginTop: 10,
        }}>
        <Carousel data={nowPlaying} setActive={getPosterColors} />
        <HorizontalSlider title={'Popular'} movies={popularMovies} />
        <HorizontalSlider title={'Top Rates'} movies={topRatedMovies} />
        <HorizontalSlider title={'Upcoming'} movies={upcomingMovies} />
      </ScrollView>
    </GradientBackground>
  );
};

export default HomeScreen;
