import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity, Pressable, SafeAreaView, StyleSheet, Button, View, Text, Image, ScrollView, TextInput, Alert, } from 'react-native'



const App = () => {
  return (
    <View>
      <MainButton/>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    paddingTop: 500,
    paddingHorizontal: 140,
  },
  greenButton: {
    
    width: 100,
    height: 100,
    alignItems: "center",
    justifyContent: "center",
  },
})

const ButtonImage = () => {
  return (
    <View>
      <Image
        style={styles.greenButton}
        source={{
          uri:
          'https://th.bing.com/th/id/R.334e24171da811bd2398b219e79ad332?rik=y%2b4vPd09e1mhvQ&riu=http%3a%2f%2fwww.verdemartin.com%2fwp-content%2fuploads%2f2015%2f06%2fplus-button-green.png&ehk=E0SZsMblUcFR8sgK%2fgAORcLwKwH2vaygsnQgP5ftLhI%3d&risl=&pid=ImgRaw&r=0&adlt=strict',
        }}
      />
    </View>
  )
}

const MainButton = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={()=>{alert("Farts")}}>
        <ButtonImage/>
      </TouchableOpacity>
    </View>
  )
}

export default App

