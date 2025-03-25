import { View, Text, SafeAreaView, Platform } from "react-native";
import Constants from "expo-constants";
import { StatusBar } from "expo-status-bar";

const Home = () => {
  console.log(Constants.statusBarHeight);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          backgroundColor: "red",
          flex: 1,
        }}
      >
        <Text>Plop</Text>
      </View>
      <StatusBar style={"dark"}></StatusBar>
    </SafeAreaView>
  );
};
export default Home;
