import { Text, View, StyleSheet } from "react-native";
import Title from "../components/Title";
function Game() {
  return (
    <View style={styles.screen}>
      <Title> Opponet's Guess</Title>
      {/* Guess */}
      <View>
        <Text>Higher or Lower?</Text>
        {/* Button + */}
        {/* Button - */}
      </View>
      {/* <View>Round logs</View> */}
    </View>
  );
}

export default Game;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
});
