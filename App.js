import { useState } from "react";
import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import StartGame from "./screens/StartGame";
import Game from "./screens/Game";
import Colors from "./constants/Colors";

export default function App() {
  const [pickedNumber, setPickedNumber] = useState();

  let screen = <StartGame onPickedNumber={setPickedNumber} />;

  if (pickedNumber) {
    screen = <Game />;
  }

  return (
    <LinearGradient
      colors={[Colors.backgroundColor, Colors.accentColor]}
      style={styles.rootsScreen}
    >
      <ImageBackground
        source={require("./assets/images/background.png")}
        resizeMode="cover"
        style={styles.rootsScreen}
        imageStyle={styles.backgoundImage}
      >
        <SafeAreaView style={styles.rootsScreen}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootsScreen: {
    flex: 1,
  },
  backgoundImage: {
    opacity: 0.15,
  },
});
