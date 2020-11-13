import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/home';
import Movies from '../screens/movies';
import Series from '../screens/series';

const {Navigator, Screen} = createStackNavigator();
const BulutStack =()=>{
    return (
        <Navigator headerMode="None">
            <Screen name="Home" component={Home} />
            <Screen name="Movies" component={Movies} />
            <Screen name="Series" component={Series} />
        </Navigator>
     );
}

export const AppNavigator =()=>(
    <NavigationContainer>
        <BulutStack />
    </NavigationContainer>
);
