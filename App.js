import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  TouchableOpacity,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Button,
  View,
  Text,
  Image,
  ScrollView,
  TextInput,
  Alert,
} from "react-native";

//main app view
const App = () => {
  const [games, setGames] = useState([]);

  const addGame = (newGame) => {
    setGames((currentGames) => [...currentGames, newGame]);
  };

  const onMainTouched = () => {
    const newGame = { name: "newGame", key: games.length + 1 };
    addGame(newGame);
  };

  return (
    <View style={styles.appContainer}>
      <MainBanner />
      <PrimaryScroll games={games} />
      <MainButton onPress={onMainTouched} />
    </View>
  );
};

// image for button
const ButtonImage = () => {
  return (
    <View>
      <Image
        style={styles.greenButton}
        source={{
          uri: "https://th.bing.com/th/id/R.334e24171da811bd2398b219e79ad332?rik=y%2b4vPd09e1mhvQ&riu=http%3a%2f%2fwww.verdemartin.com%2fwp-content%2fuploads%2f2015%2f06%2fplus-button-green.png&ehk=E0SZsMblUcFR8sgK%2fgAORcLwKwH2vaygsnQgP5ftLhI%3d&risl=&pid=ImgRaw&r=0&adlt=strict",
        }}
      />
    </View>
  );
};

// Header banner, not very special
const MainBanner = () => {
  return (
    <View style={styles.bannerContainer}>
      <Image
        style={styles.greenBanner}
        source={{
          uri: "https://www.pinclipart.com/picdir/big/551-5512566_banner-design-clipart-green-banner-transparent-background-png.png",
        }}
      />
    </View>
  );
};

/*const mainTouched = () => {
  gamesAmount = gamesAmount + 1
  return (
    addGame(DATA => [...DATA, game])
  )
}*/

//primary button for creating new games
const MainButton = (props) => {
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity onPress={props.onPress}>
        <ButtonImage />
      </TouchableOpacity>
    </View>
  );
};

// ScrollView to store games
const PrimaryScroll = (props) => {
  return (
    <View style={styles.scrollContainer}>
      <ScrollView>
        {props.games.map((item) => (
          <View key={item.key}>
            <Text style={styles.gamePreview}>{item.name}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

//styles for buttons and graphics
const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
  // primary green button stuff
  buttonContainer: {
    position: "absolute",
    top: 500,
    right: 140,
  },
  greenButton: {
    width: 100,
    height: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  // primar green banner stuff
  bannerContainer: {
    //position: 'absolute',
    width: 300,
    height: 100,
    paddingTop: 20,
    paddingHorizontal: 0,
    backgroundColor: "red",
  },
  greenBanner: {
    width: 375,
    height: 100,
  },
  //primary scroll view
  scrollContainer: {
    paddingTop: 1,
  },
  gamePreview: {
    width: 300,
    height: 50,
    color: `#a9a9a9`,
    padding: 30,
  },
});

export default App;
