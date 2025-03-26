import { Pressable, StyleSheet, TextInput, View } from "react-native";
import { useState } from "react";
import colors from "../../utils/colors";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

const FormInput = ({ state, setState, type, crypted }) => {
  const [passVisibility, setPassVisibility] = useState(false);

  return (
    <View style={styles.container}>
      <TextInput
        style={
          type !== "description" ? styles.formInput : styles.formInputMultilines
        }
        placeholder={type}
        value={state}
        onChangeText={setState}
        secureTextEntry={!crypted ? false : passVisibility ? false : true}
        multiline={type === "description"}
        textContentType={crypted ? "password" : "none"}
      ></TextInput>
      {crypted && (
        <Pressable
          style={styles.eye}
          onPress={() => setPassVisibility(!passVisibility)}
        >
          {passVisibility ? (
            <FontAwesome5 name="eye" size={24} color={colors.main} />
          ) : (
            <FontAwesome5 name="eye-slash" size={24} color={colors.main} />
          )}
        </Pressable>
      )}
    </View>
  );
};
export default FormInput;

const styles = StyleSheet.create({
  formInput: {
    borderBottomWidth: 1,
    borderBottomColor: colors.main,
    borderStyle: "solid",
    height: 40,
    position: "relative",
  },
  formInputMultilines: {
    height: 80,
    borderWidth: 1,
    borderColor: colors.main,
    borderStyle: "solid",
    padding: 5,
  },
  container: { width: "70%" },
  eye: { position: "absolute", right: 0, top: "20%" },
});
