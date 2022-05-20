import { useState } from "react";
import { StyleSheet, ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import StartGame from "./screens/StartGame";
import Game from "./screens/Game";

export default function App() {
  const [pickedNumber, setPickedNumber] = useState();

  let screen = <StartGame onPickedNumber={setPickedNumber} />;

  if (pickedNumber) {
    screen = <Game />;
  }

  return (
    <LinearGradient colors={["#ddb52f", "#72063c"]} style={styles.rootsScreen}>
      <ImageBackground
        source={require("./assets/images/background.png")}
        resizeMode="cover"
        style={styles.rootsScreen}
        imageStyle={styles.backgoundImage}
      >
        {screen}
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
