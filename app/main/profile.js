import { useContext } from "react";
import { AuthContext } from "../../Contexts/AuthContex";
import { View, StyleSheet } from "react-native";
import { Button } from "../../components/indexComponent";
import { SafeAreaView } from "react-native-safe-area-context";
import { Platform } from "react-native";
import commonStyles from "../../utils/styles";
import { Logo } from "../../components/indexComponent";

export default function Profile() {
  const { authFunctions, setUser } = useContext(AuthContext);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={
          Platform.OS === "ios"
            ? { flex: 1 }
            : { marginTop: Constants.statusBarHeight, flex: 1 }
        }
      >
        <View style={styles.logo}>
          <Logo size={50} />
        </View>
        <View style={[styles.container, commonStyles.center]}>
          <Button
            buttonText={"Se déconnecter"}
            onPress={() => authFunctions.logout(setUser)}
          ></Button>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  logo: { alignItems: "center" },
});
