import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNavigationHelpers } from 'react-navigation';
import { AppNavigator } from './AppNavigator';

const AppNavigatorWithNavigationState = ({ dispatch, navigator }) => (
  <AppNavigator
    navigation={addNavigationHelpers({
      dispatch,
      state: navigator,
    })}
  />
);

const mapStateToProps = ({ navigator }) => ({ navigator });

const NavigatorRoot = connect(mapStateToProps)(AppNavigatorWithNavigationState);

export { NavigatorRoot };
