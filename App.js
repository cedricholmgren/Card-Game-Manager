import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity, Pressable, SafeAreaView, StyleSheet, Button, View, Text, Image, ScrollView, TextInput, Alert, } from 'react-native'


//main app view
const App = () => {
  return (
    <View>
      <MainBanner/>
      <MainButton/>
    </View>
  )
}

//styles for buttons and graphics
const styles = StyleSheet.create({
  buttonContainer: {
    paddingTop: 370,
    paddingHorizontal: 140,
  },
  greenButton: {
    width: 100,
    height: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  bannerContainer: {
    paddingTop: 20,
    paddingHorizontal: 0,
  },
  greenBanner: {
    width: 375,
    height: 100,
    alignItems: "center",
    justifyContent: "center",
  },
})

// image for button
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

// Header banner, not very special
const MainBanner  = () => {
  return (
    <View style={styles.bannerContainer}>
      <Image
        style={styles.greenBanner}
        source={{
          uri:
          'https://www.pinclipart.com/picdir/big/551-5512566_banner-design-clipart-green-banner-transparent-background-png.png',
        }}
      />
    </View>
  )
}

//primary button for creating new games
const MainButton = () => {
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity onPress={()=>{alert("Farts")}}>
        <ButtonImage/>
      </TouchableOpacity>
    </View>
  )
}

export default App

