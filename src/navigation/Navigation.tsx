import {
  NativeStackNavigationOptions,
  NativeStackNavigationProp,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import React from 'react';
import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen';
import {MovieI} from '../interfaces/movies.interface';
import Icon from '@react-native-vector-icons/ionicons';
import {StyleSheet, TouchableOpacity} from 'react-native';

export type RootStackParams = {
  HomeScreen: undefined;
  DetailsScreen: MovieI;
};

export type DetailsScreenNavigationProp = NativeStackNavigationProp<
  RootStackParams,
  'DetailsScreen'
>;

const Stack = createNativeStackNavigator<RootStackParams>();

export const Navigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{title: 'Inicio'}}
      />
      <Stack.Screen
        name="DetailsScreen"
        component={DetailsScreen}
        options={{title: 'Detalles'}}
      />
    </Stack.Navigator>
  );
};


