import React from "react";
import { StyleSheet,Linking, View, Text, TouchableOpacity, Image} from "react-native";
import {globalStyles} from '../styles/global';
import { FontAwesome5, FontAwesome, AntDesign} from '@expo/vector-icons';



export default function  Home ({navigation}) {

    const pressHandler =()=> {

        navigation.navigate('Movies');
    }
    const pressHandler2 =()=> {
        navigation.navigate('Series');
    }
    const pressHandler3 =()=> {
        
    }
    return(
        <View style={globalStyles.container}>
            <Text style={globalStyles.mainHeader}>BulutMD<AntDesign style={globalStyles.cloud} name='cloud' size={30} color={'white'} /></Text>
            <Text style={globalStyles.header}>Popüler Başlıklar</Text>
            <TouchableOpacity  onPress={pressHandler}  >
                < Image source={{uri: "https://streamcoimg-a.akamaihd.net/000/376/201/376201-PosterArt-4f91ac739ae5147a51ae3abc78d55f2d.jpg"}}
                    style={globalStyles.image}
                />
            </TouchableOpacity>
            <Text style={globalStyles.optionText}>Filmler</Text>
            <TouchableOpacity  onPress={pressHandler2} >
                < Image source={{uri:
                "https://streamcoimg-a.akamaihd.net/000/115/93/11593-PosterArt-33274b61ab0cb0e19cb7bff35824efb9.jpg"}}
                    style={globalStyles.image}
                />
            </TouchableOpacity>
            <Text style={globalStyles.optionText}>Diziler</Text>
        

            <View style={globalStyles.down}>
                <TouchableOpacity onPress={pressHandler3}>
                    <Text style={globalStyles.sozlesme}>Ana Sayfa</Text> 
                </TouchableOpacity>   
                <Text style={globalStyles.sozlesme}>|</Text>
                <TouchableOpacity onPress={alert}>
                    <Text style={globalStyles.sozlesme}>Kullanıcı Sözleşmesi</Text> 
                </TouchableOpacity >   
                <Text style={globalStyles.sozlesme}>|</Text>
                <TouchableOpacity onPress={alert}>
                    <Text style={globalStyles.sozlesme}>Gizlik Sözleşmesi</Text> 
                </TouchableOpacity>   
                <TouchableOpacity onPress={alert}>
                    <FontAwesome5 style={globalStyles.icons} name='twitter' size={30} color={'white'}/> 
                </TouchableOpacity>
                <TouchableOpacity onPress={alert}>
                    <FontAwesome style={globalStyles.icons} name='facebook' size={30} color={'white'}/>
                </TouchableOpacity>
                
                
            </View>
        </View>
    )
} 