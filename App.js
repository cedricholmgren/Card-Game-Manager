import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity, Pressable, SafeAreaView, StyleSheet, Button, View, Text, Image, ScrollView, TextInput, Alert, } from 'react-native'


//main app view
const App = () => {
  return (
    <View>
      <MainBanner/>
      <PrimaryScroll/>
      <MainButton/>
    </View>
  )
}

//styles for buttons and graphics
const styles = StyleSheet.create({
  // primary green button stuff
  buttonContainer: {
    position: 'absolute',
    paddingTop: 500,
    paddingHorizontal: 140,
  },
  greenButton: {
    width: 100,
    height: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  // primar green banner stuff
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
  //primary scroll view
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

// ScrollView to store games
const PrimaryScroll = () => {
  return  (
    <View>
      <ScrollView>
        <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
      </ScrollView>
    </View>
  )
}

export default App

