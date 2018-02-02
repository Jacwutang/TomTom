import React from 'react';
import {Provider} from 'react-redux';
import { AppRegistry, Text, View } from 'react-native';
// import {createStore} from 'redux';
import configureStore from './store';


const App = () => {
  const store = configureStore();

  return(
    <Provider store={store}>
      <View>
        <Text> Hello World </Text>
      </View>
    </Provider>
  );
};


AppRegistry.registerComponent('TomTom', () => App);
