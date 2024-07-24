import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native"
import Slider from "@react-native-community/slider"

export default function App(params) {
  return(
    <View style={style.container}>
      <Image
      source={require("./src/assets/logo.png")}
      style={style.logo}
      />
      
      <Text style={style.title}>20 caracteres</Text>

      <View style={style.area}>
        <Slider
          style={{ height: 50}}
          minimumValue={6}
          maximumValue={20}
          maximumTrackTintColor="#ff0000"
          minimumTrackTintColor="#000"
          thumbTintColor="#392de9"
        />
      </View>

      <TouchableOpacity style={style.button}>
        <Text style={style.buttonText}>GERAR SENHA</Text>
      </TouchableOpacity>

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
  area:{
    marginTop: 14,
    marginBottom:14,
    width: "80%",
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 6,
  },
  button:{
    backgroundColor: "#392de9",
    width: "80%",
    height:50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    marginBottom:18,
  },
  buttonText:{
    color:"#fff",
    fontSize: 20,
  }
})