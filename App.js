import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, } from 'react-native';
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import {Provider} from 'react-redux'
import reducer from './reducers'
import AppNavigator from './navigation/AppNavigator'
import Constants from 'expo-constants';


function FlashcardStatusBar({ backgroundColor, ...props }) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  );
}

export default function App() {
  return (
      <Provider store={createStore(reducer, applyMiddleware(thunk,logger))}>
          <View style={styles.container}>
              <FlashcardStatusBar 
              backgroundColor='green'
              barStyle='light-content'
              />
              <AppNavigator />
          </View>
      </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dde'
  }
});
