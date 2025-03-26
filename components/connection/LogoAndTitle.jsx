import commonStyles from "../../utils/styles";
import { View, Text, Image } from "react-native";
import logo from "../../assets/logo.png";

const LogoAndTitle = ({ text }) => {
  return (
    <View style={[commonStyles.center, { gap: 15 }]}>
      <Image
        source={logo}
        style={{ width: 100, height: 100 }}
        resizeMode="contain"
      ></Image>
      <Text style={[commonStyles.title]}>{text}</Text>
    </View>
  );
};
export default LogoAndTitle;
