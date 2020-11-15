import React,{Component} from "react";
import { StyleSheet, View, Text, FlatList, Image, TouchableOpacity, TextInput } from "react-native";
import {globalStyles} from '../styles/global';
import data from '../datas/movies.json';
import { FontAwesome5, FontAwesome} from '@expo/vector-icons';
import { pressHandler3 } from "./home";

class DemoApp extends Component {
    
    render() {
      return (
          
          <View style={{flex: 1, flexDirection: 'column'}}>
            <Text style={globalStyles.header} >
               Filmler
            </Text> 
             <FlatList
             numColumns={2}
               data={data}
               showsVerticalScrollIndicator={false}
               renderItem={({item}) =>
                <View style={{flex: 1, flexWrap:'wrap',flexDirection: 'row'}}>  
                    
                    <Image 
                    style={globalStyles.image2} 
                    source={{uri : item.images["Poster Art"].url }}  />
                    <Text style={globalStyles.title}>{item.title}</Text>
                </View>
               }
               keyExtractor={(item, index) => index.toString()}
             />
             <View style={{backgroundColor:'black',flexDirection:'row', flexWrap:'wrap'}}>
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
     
            </View>
            <View style={{backgroundColor:'black', flexDirection:'row', flexWrap:'wrap'}}>
                <TouchableOpacity onPress={alert}>
                    <FontAwesome5 style={globalStyles.icons} name='twitter' size={30} color={'white'}/> 
                </TouchableOpacity>
                <TouchableOpacity onPress={alert}>
                    <FontAwesome style={globalStyles.icons} name='facebook' size={30} color={'white'}/>
                </TouchableOpacity>
            </View>
          </View>
       );
    }
  }
  
  export default DemoApp;
/*const newdata =data.map( (data) =>{
    return(
        <Card key={data.title}>
            
            <Card.Title>{data.title}</Card.Title>
            <Card.Text>
                {data.description}
            </Card.Text>
            
        </Card>

                

    )
})
export default function Movies(){
    return(
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>Movies Screen</Text>
            
           
        </View>
    )
    
}
*/