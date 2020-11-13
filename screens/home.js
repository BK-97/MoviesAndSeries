import React from "react";
import { StyleSheet, View, Text, Button, TouchableOpacity, Image } from "react-native";
import {globalStyles} from '../styles/global';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Navigation from '../navigation/homestack';


export default function  Home ({navigation}) {

    const pressHandler =()=> {
        navigation.navigate('Movies');
    }
    const pressHandler2 =()=> {
        navigation.navigate('Series');
    }
    return(
        <View style={globalStyles.container}>
            <Text style={globalStyles.mainTitleText}>BulutMD</Text>
            <Text style={globalStyles.titleText}>Popüler Başlıklar</Text>
            <TouchableOpacity  onPress={pressHandler} >
                < Image source={require('../assets/deneme1.jpg')}
                    style={globalStyles.image}
                />
            </TouchableOpacity>
            <Text style={globalStyles.normalText}>Filmler</Text>
            <TouchableOpacity  onPress={pressHandler2} >
                < Image source={require('../assets/deneme1.jpg')}
                    style={globalStyles.image}
                />
            </TouchableOpacity>
            <Text style={globalStyles.normalText}>Diziler</Text>
        </View>
    )
} 