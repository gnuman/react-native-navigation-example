import React from 'react';
import { DrawerNavigator } from 'react-navigation';
import Home from '../Home/component';
import ProfilPage from '../ProfilePage/component';

export default MyApp = DrawerNavigator({
    Home: {
      screen: Home,
    },
    ProfilPage: {
      screen: ProfilPage,
    },  
});

