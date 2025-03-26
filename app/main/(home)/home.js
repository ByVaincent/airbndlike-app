import { useRouter } from "expo-router";
import { TouchableHighlight, Text } from "react-native";

export default function Home() {
  const router = useRouter();

  return (
    <TouchableHighlight onPress={() => router.push("/main/profile")}>
      <Text>To Profile</Text>
    </TouchableHighlight>
  );
}
