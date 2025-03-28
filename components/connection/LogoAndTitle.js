import commonStyles from "../../utils/styles";
import { View, Text, Image } from "react-native";
import Title from "../Title";
import Logo from "../Logo";

const LogoAndTitle = ({ text }) => {
  return (
    <View style={[commonStyles.center, { gap: 15 }]}>
      <Logo size={100} />
      <Title text={text}></Title>
    </View>
  );
};
export default LogoAndTitle;
