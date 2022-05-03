import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Button, View, Text, Image, ScrollView, TextInput, Alert, } from 'react-native'



const App = () => {
  return (
    <View>
      <MainButton/>
    </View>
  )
}

const MainButton = () => {
  return (
    <View>
      <Button
        title="Press me"
        onPress={() => Alert.alert('Simple Button pressed')}
      />
    </View>
  )
}

export default App

