import { View, Image, StyleSheet, Text, Dimensions } from "react-native";
import ColorPropType from "react-native/Libraries/DeprecatedPropTypes/DeprecatedColorPropType";

import Title from "../components/ui/Title";
import PrimaryButton from "../components/ui/PrimaryButton";
import Colors from "../constants/Colors";

function GameOver({ roundsNumber, userNumber, onNewGame }) {
  return (
    <View style={styles.rootContainer}>
      <Title>GAME OVER!</Title>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/success.png")}
        />
      </View>
      <Text style={styles.summaryText}>
        Your phone needed <Text style={styles.hightlight}>{roundsNumber}</Text>{" "}
        rounds to guess the number{" "}
        <Text style={styles.hightlight}>{userNumber}</Text>
      </Text>
      <PrimaryButton onPress={onNewGame}> Start New Game</PrimaryButton>
    </View>
  );
}

export default GameOver;

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: deviceWidth < 380 ? 150 : 300,
    height: deviceWidth < 380 ? 150 : 300,
    borderRadius: deviceWidth < 300 ? 75 : 150,
    borderWidth: 3,
    borderColor: Colors.primary800,
    overflow: "hidden",
    margin: 36,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summaryText: {
    fontFamily: "open-sans",
    fontSize: 24,
    textAlign: "center",
  },
  hightlight: {
    fontFamily: "open-sans-bold",
    color: Colors.primary500,
  },
});
