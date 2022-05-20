import { Text, View, StyleSheet } from "react-native";
function Game() {
  return (
    <View style={styles.screen}>
      <Text>Opponent's Guess</Text>
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
  },
});
