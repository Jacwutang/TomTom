import React from 'react';
import {Provider} from 'react-redux';
import { AppRegistry, Text, View } from 'react-native';
// import {createStore} from 'redux';
import configureStore from './store';
import Team from './src/components/Team';


const App = () => {
  const store = configureStore();

  return(
    <Provider store={store}>
      <View>
        <Team />
      </View>
    </Provider>
  );
};


AppRegistry.registerComponent('TomTom', () => App);
