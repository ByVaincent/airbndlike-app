import { StyleSheet } from "react-native";
import { View, Image } from "react-native";

const Avatar = ({ uri, size }) => {
  return (
    <View style={[styles.avatarContainer, { width: size }]}>
      <Image
        source={{
          uri: uri,
        }}
        style={styles.avatar}
      ></Image>
    </View>
  );
};
export default Avatar;

const styles = StyleSheet.create({
  avatarContainer: {
    borderRadius: "50%",
    backgroundColor: "black",
    aspectRatio: "1 / 1",
    overflow: "hidden",
  },
  avatar: { width: "100%", height: "100%" },
});
