import React, {useCallback, useRef} from 'react';
import {
  Animated,
  Dimensions,
  NativeScrollEvent,
  NativeSyntheticEvent,
  View,
} from 'react-native';

import {MovieI} from '../interfaces/movies.interface';
import MoviePoster from './MoviePoster';

const {width: screenWidth} = Dimensions.get('window');

const ITEM_WIDTH = screenWidth * 0.767;
const SPACER_WIDTH = (screenWidth - 70 - ITEM_WIDTH) / 2;

export const Carousel = ({
  data,
  setActive,
}: {
  data: MovieI[];
  setActive: Function;
}) => {
  const scrollX = useRef(new Animated.Value(0)).current;

  const dataWithSpacers = [{id: 'left-spacer'},...data, {id: 'right-spacer'}];

  const renderItem = ({
    item,
    index,
  }: {
    item: MovieI | {id: string};
    index: number;
  }) => {
    if (item.id === 'left-spacer' || item.id === 'right-spacer') {
      return <View style={{width: SPACER_WIDTH}} />;
    }

    const inputRange = [
      (index - 2) * ITEM_WIDTH,
      (index - 1) * ITEM_WIDTH,
      index * ITEM_WIDTH,
    ];

    const scale = scrollX.interpolate({
      inputRange,
      outputRange: [0.85, 1.05, 0.8],
      extrapolate: 'clamp',
    });

    return (
      <Animated.View
        style={{
          width: ITEM_WIDTH,
          transform: [{scale}],
        }}>
        <MoviePoster movie={item as MovieI} />
      </Animated.View>
    );
  };

  const scrollEventThrottle = useCallback(
    (event: NativeSyntheticEvent<NativeScrollEvent>) => {
      const offsetX = event.nativeEvent.contentOffset.x;
      const index = Math.round(offsetX / ITEM_WIDTH);
      setActive(index);
    },
    [setActive],
  );

  return (
    <View style={{height: 460}}>
      <Animated.FlatList
        data={dataWithSpacers}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        snapToAlignment="center"
        decelerationRate="fast"
        bounces={false}
        contentContainerStyle={{alignItems: 'center'}}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {useNativeDriver: true},
        )}
        // scrollEventThrottle={16}
        snapToInterval={ITEM_WIDTH}
        onMomentumScrollEnd={scrollEventThrottle}
      />
    </View>
  );
};
