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
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";

export default function Map() {
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={
          Platform.OS === "ios"
            ? styles.container
            : [{ marginTop: Constants.statusBarHeight }, styles.container]
        }
      >
        <View style={(styles.container, commonStyles.center)}>
          <Logo size={50} />
        </View>
        <View style={styles.container}>
          <MapView
            style={styles.container}
            initialRegion={{
              latitude: 48.856614,
              longitude: 2.3522219,
              latitudeDelta: 0.2,
              longitudeDelta: 0.2,
            }}
          ></MapView>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
});
