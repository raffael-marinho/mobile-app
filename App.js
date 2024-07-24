import { View, Text, StyleSheet, Image } from "react-native"


export default function App(params) {
  return(
    <View style={style.container}>
      <Image
      source={require("./src/assets/logo.png")}
      style={style.logo}
      />
      
      <Text style={style.title}>20 caracteres</Text>

      <View style={style.area}></View>
    </View>
  )
}

const style = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: "#F0F2FD",
    justifyContent: "center",
    alignItems: "center"
  },
  logo:{
    marginBottom:60
  },
  title:{

  }
})