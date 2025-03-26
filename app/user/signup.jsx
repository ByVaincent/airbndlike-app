import {
  Text,
  View,
  useWindowDimensions,
  StyleSheet,
  Image,
  SafeAreaView,
  ActivityIndicator,
} from "react-native";
import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Constants from "expo-constants";
import commonStyles from "../../utils/styles";
import FormInput from "../../components/connection/FormInput";
import LogoAndTitle from "../../components/connection/LogoAndTitle";
import FormButtonAndError from "../../components/connection/FormButtonAndError";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [description, setDescription] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const styles = useStyle();

  const formSubmit = async () => {
    try {
      setIsLoading(true);

      setError("");
      if (
        !email ||
        !password ||
        !description ||
        !password ||
        !confirmPassword
      ) {
        throw { message: "Merci de remplir tous les champs demandés" };
      } else if (password !== confirmPassword) {
        throw { message: "Les mots de passes doivent être identiques" };
      }
      console.log("test");

      const user = await axios.post(
        "https://lereacteur-bootcamp-api.herokuapp.com/api/airbnb/user/sign_up",
        {
          email,
          username,
          description,
          password,
        }
      );
      console.log(user.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error.response.data.error);

      error.response?.data?.error
        ? setError(error.response.data.error)
        : setError(error.message);
      setIsLoading(false);
    }
  };

  return (
    <SafeAreaView style={[styles.container]}>
      <KeyboardAwareScrollView contentContainerStyle={{ flex: 1 }}>
        <View style={styles.connectionContainer}>
          <LogoAndTitle text={"Signup"}></LogoAndTitle>
          <View style={[commonStyles.center, { gap: 20 }]}>
            <FormInput
              state={email}
              setState={setEmail}
              type={"email"}
            ></FormInput>
            <FormInput
              state={username}
              setState={setUsername}
              type={"username"}
            ></FormInput>
            <FormInput
              state={description}
              setState={setDescription}
              type={"description"}
            ></FormInput>
            <FormInput
              state={password}
              setState={setPassword}
              type={"password"}
              crypted={true}
            ></FormInput>
            <FormInput
              state={confirmPassword}
              setState={setConfirmPassword}
              type={"confirmPassword"}
              crypted={true}
            ></FormInput>
          </View>
          <View
            style={{ justifyContent: "center", alignItems: "center", gap: 20 }}
          >
            {isLoading ? (
              <ActivityIndicator />
            ) : (
              <FormButtonAndError
                error={error}
                buttonText={"Envoyer"}
                onPress={formSubmit}
              ></FormButtonAndError>
            )}
            <Link href={"./login"} style={{ textDecorationLine: "underline" }}>
              Déjà un compte?
            </Link>
          </View>
        </View>
      </KeyboardAwareScrollView>
      <StatusBar style={"dark"}></StatusBar>
    </SafeAreaView>
  );
};
export default Login;

const useStyle = () => {
  const { width, height } = useWindowDimensions();

  const wholeHeight = height - Constants.statusBarHeight;

  const styles = StyleSheet.create({
    container: {
      width: width,
      flex: 1,
    },
    connectionContainer: {
      justifyContent: "space-around",
      flex: 1,
      padding: 10,
    },
  });

  return styles;
};
