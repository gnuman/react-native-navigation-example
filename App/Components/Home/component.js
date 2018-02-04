import React from 'react';
import { StackNavigator } from 'react-navigation';
import NavTabs from '../NavTabs/component';
import Chats from '../Chats/componet';

export default Home = StackNavigator({
    NavTabs: {
      screen: NavTabs,
    },
    Chats: {
      screen: Chats,
    },  
});
