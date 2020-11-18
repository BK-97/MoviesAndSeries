import React, { Component } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import { globalStyles } from "../styles/global";
import data from "../datas/movies.json";
import { FontAwesome5, FontAwesome } from "@expo/vector-icons";


class DemoApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchKey: "",
    };
  }
  
  render() {
    const filteredData = data.filter((item) => {
      return item.title.indexOf(this.state.searchKey) >= 0;
    });

    return (
      <View style={{ flex: 1, flexDirection: "column" }}>
        <Text style={globalStyles.header}>Filmler</Text>
        <TextInput
          placeholder="Film ismi giriniz" style={globalStyles.filter}
          onChangeText={(value) => this.setState({ searchKey: value })}
        ></TextInput>
        <FlatList
          numColumns={2}
          data={filteredData}
          keyExtractor={(item, index) => index.toString()}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => {
              return (
                
                <View>
                  
                  <Image
                    style={globalStyles.image2}
                    source={{ uri: item.images["Poster Art"].url }}
                  />
                  <Text style={globalStyles.title}>{item.title}</Text>
                </View>
              );
            }
          }
        />
        <View
          style={{
            backgroundColor: "black",
            flexDirection: "row",
            flexWrap: "wrap",
          }}
        >
          <TouchableOpacity onPress={alert}>
            <Text style={globalStyles.sozlesme}>Ana Sayfa</Text>
          </TouchableOpacity>
          <Text style={globalStyles.sozlesme}>|</Text>
          <TouchableOpacity onPress={alert}>
            <Text style={globalStyles.sozlesme}>Kullanıcı Sözleşmesi</Text>
          </TouchableOpacity>
          <Text style={globalStyles.sozlesme}>|</Text>
          <TouchableOpacity onPress={alert}>
            <Text style={globalStyles.sozlesme}>Gizlik Sözleşmesi</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            backgroundColor: "black",
            flexDirection: "row",
            flexWrap: "wrap",
          }}
        >
          <TouchableOpacity onPress={alert}>
            <FontAwesome5
              style={globalStyles.icons}
              name="twitter"
              size={30}
              color={"white"}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={alert}>
            <FontAwesome
              style={globalStyles.icons}
              name="facebook"
              size={30}
              color={"white"}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default DemoApp;
