import { useRouter } from "expo-router";
import Constants from "expo-constants";
import {
  TouchableHighlight,
  Text,
  View,
  Platform,
  StyleSheet,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Logo from "../../components/Logo";
import commonStyles from "../../utils/styles";

export default function Map() {
  return (
    <SafeAreaView>
      <View
        style={
          Platform.OS === "ios"
            ? null
            : { marginTop: Constants.statusBarHeight }
        }
      >
        <View style={(styles.container, commonStyles.center)}>
          <Logo size={50} />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
});
