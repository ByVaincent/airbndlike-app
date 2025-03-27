import {
  Text,
  View,
  useWindowDimensions,
  StyleSheet,
  SafeAreaView,
  ActivityIndicator,
} from "react-native";
import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React, { useState, useContext } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Constants from "expo-constants";
import commonStyles from "../../utils/styles";
import { AuthContext } from "../../Contexts/AuthContex";
import {
  FormInput,
  LogoAndTitle,
  FormButtonAndError,
} from "../../components/indexComponent";

const Signup = () => {
  //Context
  const { isConnected, setIsConnected, authFunctions, setUser } =
    useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [description, setDescription] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const styles = useStyle();

  const formSubmit = () => {
    authFunctions.signup(
      email,
      username,
      password,
      description,
      confirmPassword,
      setIsLoading,
      setError,
      setUser
    );
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
              crypted={false}
            ></FormInput>
            <FormInput
              state={username}
              setState={setUsername}
              type={"username"}
              crypted={false}
            ></FormInput>
            <FormInput
              state={description}
              setState={setDescription}
              type={"description"}
              crypted={false}
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
            <Link
              href={"auth/login"}
              style={{ textDecorationLine: "underline" }}
            >
              Déjà un compte?
            </Link>
          </View>
        </View>
      </KeyboardAwareScrollView>
      <StatusBar style={"dark"}></StatusBar>
    </SafeAreaView>
  );
};
export default Signup;

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
