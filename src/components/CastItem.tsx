import React from 'react';
import {Image, Text, View, StyleSheet} from 'react-native';
import Icon from '@react-native-vector-icons/ionicons';
import {Cast} from '../interfaces/credits.interface';
interface CastItemPropsI {
  actor: Cast;
}
const CastItem = ({actor}: CastItemPropsI) => {
  const uri = `https://image.tmdb.org/t/p/w500${actor?.profile_path}`;
  return (
    <View style={styles.card}>
      <Image source={{uri}} style={styles.image} />
      <View>
        <Text>{actor?.name}</Text>
        <Text>{actor?.popularity}</Text>
        <Icon
          name="analytics-outline"
          style={{
            fontSize: 25,
            color: 'gray',
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width:'100%',
    flexDirection: 'row',
    marginVertical: 5,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 50,
    marginRight: 10,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

export default CastItem;
