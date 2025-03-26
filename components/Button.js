import { Pressable, Text, StyleSheet } from "react-native";
import colors from "../utils/colors";
import commonStyles from "../utils/styles";

const Button = ({ onPress, buttonText }) => {
  return (
    <Pressable onPress={onPress} style={styles.button}>
      <Text style={{ color: colors.textSnd }}>{buttonText}</Text>
    </Pressable>
  );
};
export default Button;

const styles = StyleSheet.create({
  button: {
    padding: 15,
    width: 200,
    borderWidth: 3,
    borderStyle: "solid",
    borderColor: colors.main,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
});
