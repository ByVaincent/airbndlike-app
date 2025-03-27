import { useRouter } from "expo-router";
import Constants from "expo-constants";
import { TouchableHighlight, Text, View, Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
  const router = useRouter();

  return (
    <SafeAreaView>
      <View
        style={
          Platform.OS === "ios"
            ? null
            : { marginTop: Constants.statusBarHeight }
        }
      >
        <TouchableHighlight onPress={() => router.push("/main/profile")}>
          <Text>To Profile</Text>
        </TouchableHighlight>
      </View>
    </SafeAreaView>
  );
}
