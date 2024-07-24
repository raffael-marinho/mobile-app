import { View, Text, StyleSheet } from "react-native"


export default function App(params) {
  return(
    <View style={style.container}>
      <Text>Sujeito Programador</Text>
    </View>
  )
}

const style = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: "red"
  }
})