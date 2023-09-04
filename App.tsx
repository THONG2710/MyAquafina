/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {StyleSheet} from 'react-native';
import RootNavigation from './src/presentation/navigation/RootNavigation';


function App(): JSX.Element {
  return <RootNavigation />;
}

const styles = StyleSheet.create({});

export default App;
