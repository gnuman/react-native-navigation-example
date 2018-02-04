import React, {PureComponent} from 'react';
import { View, Text } from 'react-native';
import MyApp from '../MyApp/component';

export default class RootComponent extends PureComponent {
  render() {
    return (
      <MyApp />
    );
  }
};
