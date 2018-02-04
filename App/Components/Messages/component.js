import React, { PureComponent } from 'react';
import { View, Text, Button } from 'react-native';

export default class Messages extends PureComponent {
  render() {
    return (
        <View>
            <Text> Messages </Text>
            <Button
                title="Open ProfilPage Drawer"
                onPress={() => this.props.navigation.navigate('ProfilPage')}
            />
        </View>
    );
  }
};
