import { StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import StartGame from "./screens/StartGame";

export default function App() {
  return (
    <LinearGradient colors={["#ddb52f", "#72063c"]} style={styles.rootsScreen}>
      <StartGame />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootsScreen: {
    flex: 1,
  },
});
