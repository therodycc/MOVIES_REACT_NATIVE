import React, {useContext} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {GradientContext} from '../context/GradientContext';

interface Props {
  title?: string;
  onProfilePress?: () => void;
  showBack?: boolean;
  onBackPress?: () => void;
}
export const Header = ({
  title = 'Inicio',
  onProfilePress,
  showBack,
  onBackPress,
}: Props) => {
  const {colors} = useContext(GradientContext);

  return (
    <View style={styles.inner}>
      {/* {showBack ? (
        <TouchableOpacity onPress={onBackPress}>
          <Icon name="chevron-back" size={24} color="white" />
        </TouchableOpacity>
      ) : (
        <View style={{width: 24}} />
      )} */}

      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
      </View>

      <TouchableOpacity onPress={onProfilePress}>
        <Image
          source={{
            uri: 'https://plus.unsplash.com/premium_photo-1683121366070-5ceb7e007a97?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D',
          }}
          style={[styles.profileImg, {borderColor: colors.primary}]}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  inner: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    justifyContent: 'space-between',
    marginVertical: 25,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: 'black',
  },
  titleContainer: {
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 20,
    paddingHorizontal: 50,
    shadowColor: 'black',
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowOpacity: 0.06,
    shadowRadius: 10,
  },
  profileImg: {
    width: 70,
    height: 70,
    borderRadius: 50,
    marginRight: 10,
    borderWidth: 4,
    borderColor: 'white',
  },
});
