import commonStyles from "../../utils/styles";
import { View, Text, Image } from "react-native";
import logo from "../../assets/logo.png";
import Title from "../Title";

const LogoAndTitle = ({ text }) => {
  return (
    <View style={[commonStyles.center, { gap: 15 }]}>
      <Image
        source={logo}
        style={{ width: 100, height: 100 }}
        resizeMode="contain"
      ></Image>
      <Title text={text}></Title>
    </View>
  );
};
export default LogoAndTitle;
