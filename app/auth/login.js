import {
  Text,
  View,
  useWindowDimensions,
  StyleSheet,
  Image,
  SafeAreaView,
  ActivityIndicator,
} from "react-native";
import { Link, Redirect } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React, { useState, useContext } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Constants from "expo-constants";
import commonStyles from "../../utils/styles";
import FormInput from "../../components/connection/FormInput";
import LogoAndTitle from "../../components/connection/LogoAndTitle";
import FormButtonAndError from "../../components/connection/FormButtonAndError";
import { AuthContext } from "../_layout";
import axios from "axios";

const Login = () => {
  //context
  const { isConnected, setIsConnected, authFunctions, setUser } =
    useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const styles = useStyle();

  const formSubmit = async () => {
    authFunctions.login(
      email,
      password,
      isLoading,
      setIsLoading,
      setError,
      setIsConnected,
      setUser
    );
  };

  return isConnected ? (
    <Redirect href="/main/home" />
  ) : (
    <SafeAreaView style={[styles.container]}>
      <KeyboardAwareScrollView contentContainerStyle={{ flex: 1 }}>
        <View style={styles.connectionContainer}>
          <LogoAndTitle text={"Login"}></LogoAndTitle>
          <View style={[commonStyles.center, { gap: 20 }]}>
            <FormInput
              state={email}
              setState={setEmail}
              type={"email"}
              crypted={false}
            ></FormInput>
            <FormInput
              state={password}
              setState={setPassword}
              type={"password"}
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
              href={"/auth/signup"}
              style={{ textDecorationLine: "underline" }}
            >
              Pas encore de compte?
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
