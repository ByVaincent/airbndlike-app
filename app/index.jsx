import { View, Text, SafeAreaView, Platform, StyleSheet } from "react-native";
import Constants from "expo-constants";
import { StatusBar } from "expo-status-bar";
import commonStyles from "../utils/styles";

import { Link } from "expo-router";

const Home = () => {
  return (
    <SafeAreaView style={[{ flex: 1 }, styles.container, styles.center]}>
      <Link href={"user/login"} style={[commonStyles.title]}>
        Login
      </Link>

      <StatusBar style={"dark"}></StatusBar>
    </SafeAreaView>
  );
};
export default Home;

const styles = StyleSheet.create({
  container: { margin: 10 },
  center: { justifyContent: "center", alignItems: "center" },
});
