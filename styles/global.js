import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  container: {

  },
  mainHeader: {
    fontFamily: "nunito-bold",
    fontSize: 28,
    color: "ghostwhite",
    padding: 20,
    backgroundColor: "black",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  header: {
    fontFamily: "nunito-bold",
    fontSize: 28,
    color: "ghostwhite",
    padding: 20,
    backgroundColor: "grey",

    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontFamily: "nunito-bold",
    fontSize: 20,
    marginHorizontal: 30,
    width: 150,
  },
  optionText: {
    fontFamily: "nunito-bold",
    fontSize: 22,
    marginHorizontal: "41%",
  },
  image: {
    height: 150,
    width: 150,
    resizeMode: "cover",
    marginHorizontal: "32%",
    marginVertical: 20,
    borderRadius: 20,
  },
  image2: {
    height: 150,
    width: 150,
    resizeMode: "cover",
    marginVertical: 20,
    borderRadius: 30,
    marginHorizontal: 30,
  },
  sozlesme: {
    fontFamily: "nunito-bold",
    marginHorizontal: 5,
    fontSize: 14,
    color: "white",
    marginLeft: 12,
    paddingBottom: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  icons: {
    marginHorizontal: 2,
    padding: 3,
    alignItems: "center",
    marginLeft: "38%",
  },
  down: {
    backgroundColor: "black",
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: "2%",
  },
  
  cloud: {
    
    justifyContent: "center",
    alignItems: "center",
  },
  filter: {
    paddingLeft: 10,
    marginLeft:20,
    marginRight:20,
    marginTop:10,
    height: 30,
    borderWidth:2,
    borderRadius:10,
    borderColor: "grey",
  },
});
