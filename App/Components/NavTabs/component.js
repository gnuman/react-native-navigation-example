import React from 'react';
import { TabNavigator } from 'react-navigation';
import Messages from '../Messages/component';
import More from '../More/component';

export default Home = TabNavigator({
    Messages: {
      screen: Messages,
    },
    More: {
      screen: More,
    },  
});

