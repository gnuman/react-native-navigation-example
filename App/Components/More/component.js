import React, { PureComponent } from 'react';
import { View, Text, Button } from 'react-native';

export default class More extends PureComponent {
  render() {
    return (
        <View>
            <Text> More  </Text>
            <Button
                title="Open Chat Navigator Drawer"
                onPress={() => this.props.navigation.navigate('Chats')}
            />
        </View>
    );
  }
};
