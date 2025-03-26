import { Pressable, View, Text, StyleSheet } from "react-native";
import commonStyles from "../../utils/styles";
import Button from "../Button";
import colors from "../../utils/colors";

const FormButtonAndError = ({ error, buttonText, onPress }) => {
  return (
    <View style={[styles.center, { gap: 20 }]}>
      <Text style={commonStyles.error}>{error}</Text>
      <Button buttonText={buttonText} onPress={onPress}></Button>
    </View>
  );
};
export default FormButtonAndError;

const styles = StyleSheet.create({
  center: { justifyContent: "center", alignItems: "center" },
});
