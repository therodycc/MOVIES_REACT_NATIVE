/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import type {PropsWithChildren} from 'react';
import {default as React} from 'react';
import {GradientProvider} from './src/context/GradientContext';
import {Navigation} from './src/navigation/Navigation';
import {Header} from './src/components/header';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StyleSheet} from 'react-native';

type AppStateProps = PropsWithChildren<{}>;

const AppState = ({children}: AppStateProps): React.JSX.Element => {
  return <GradientProvider>{children}</GradientProvider>;
};

const App = () => {
  return (
    <SafeAreaView style={styles.container} >
      <NavigationContainer>
        <AppState>
          <Navigation />
        </AppState>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    marginTop: 10,
    zIndex: 10,
  },
});
