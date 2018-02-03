import React from 'react';
import {Provider} from 'react-redux';
import { AppRegistry, Text, View } from 'react-native';
// import {createStore} from 'redux';
import configureStore from './store';
import Team from './src/components/Team';
import Header from './src/components/Header';
import Footer from './src/components/Footer';
import RootTabs from './src/components/RootTabs';

// const App = () => {
//   const store = configureStore();
//
//   return(
//     <Provider store={store}>
//       <View style={ {flex: 1 } }>
//         <Header headerText="Meet the Team"/>
//         <Team />
//         <Footer
//         footerTextLeft= "Map"
//         footerTextRight = "About Us"
//         />
//       </View>
//     </Provider>
//   );
// };


AppRegistry.registerComponent('TomTom', () => RootTabs);
