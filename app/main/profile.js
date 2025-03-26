import { useContext } from "react";
import { AuthContext } from "../_layout";
import { TouchableHighlight, View, Text } from "react-native";
import { Button } from "../../components/indexComponent";

export default function Profile() {
  const { authFunctions, setUser } = useContext(AuthContext);

  return (
    <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
      <Button
        buttonText={"Se déconnecter"}
        onPress={() => authFunctions.logout(setUser)}
      ></Button>
    </View>
  );
}
