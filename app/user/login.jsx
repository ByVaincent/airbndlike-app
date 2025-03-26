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
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const styles = useStyle();

  const formSubmit = async () => {
    try {
      setIsLoading(true);

      if (!email || !password) {
        throw { message: "Merci d'indiquer votre email et votre mot de passe" };
      }

      const user = await axios.post(
        "https://lereacteur-bootcamp-api.herokuapp.com/api/airbnb/user/log_in",
        {
          email,
          password,
        }
      );

      setIsLoading(false);
    } catch (error) {
      if (error.response?.data?.error) {
        setError(error.response.data.error);
        setIsLoading(false);
      } else {
        setError(error.message);
        setIsLoading(false);
      }
    }
  };

  return (
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
              href={"/user/signup"}
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
