import React from "react";
import { StyleSheet, View, Text } from "react-native";
import {globalStyles} from '../styles/global';

export default function Movies(){
    return(
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>Movies Screen</Text>
        </View>
    )
}
