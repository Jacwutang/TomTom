import { TabNavigator } from 'react-navigation';
import React from 'react';
import { View, Text } from 'react-native';
import TeamScreen from './Team';
import HelpScreen from './Help';
import MapScreen from './Map';

const RootTabs = TabNavigator({



  Map: {
    screen: MapScreen,
    navigationOptions:{
      tabBarLabel: 'Map',
    }
  },

  Help: {
    screen: HelpScreen,
    navigationOptions:{
      tabBarLabel: 'Help',
    }

  },

  About: {
    screen: TeamScreen,
    navigationOptions:{
      tabBarLabel: 'About Us',
    },
  }

}, {
    tabBarPosition: 'top',
    animationEnabled: true,
    tabBarOptions: {
      activeTintColor: '#e91e63',
      labelStyle: {
        fontSize: 20,
      },
    },


});


export default RootTabs;
