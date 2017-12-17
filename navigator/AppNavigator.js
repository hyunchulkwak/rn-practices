import React from 'react';
import { Platform } from 'react-native';
import { TabNavigator } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';
import { Home, About, Help } from '../screens';

const AppNavigator = TabNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor, focused }) => (
        <Ionicons
          name={focused ? 'ios-home' : 'ios-home-outline'}
          size={26}
          color={tintColor}
        />
      ),
    },
  },
  About: {
    screen: About,
    navigationOptions: {
      tabBarLabel: 'About',
      tabBarIcon: ({ tintColor, focused }) => (
        <Ionicons
          name={focused ? 'ios-information-circle' : 'ios-information-circle-outline'}
          size={26}
          color={tintColor}
        />
      ),
    },
  },
  Help: {
    screen: Help,
    navigationOptions: {
      tabBarLabel: 'Help',
      tabBarIcon: ({ tintColor, focused }) => (
        <Ionicons
          name={focused ? 'ios-help-circle' : 'ios-help-circle-outline'}
          size={26}
          color={tintColor}
        />
      ),
    },
  },
},
{
  tabBarPosition: 'bottom',
  animationEnabled: true,
  tabBarOptions: {
    inactiveTintColor: '#333',
    activeTintColor: '#400011',
    style: {
      backgroundColor: '#fff',
    },
    labelStyle: {
      fontSize: 10,
    },
    indicatorStyle: {
      backgroundColor: '#400011',
    },
    showIcon: true,
    showLabel: true,
  },
});

export { AppNavigator };
