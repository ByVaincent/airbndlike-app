import commonStyles from "../utils/styles";
import { Text } from "react-native";

const Title = ({ text }) => {
  return <Text style={[commonStyles.title]}>{text}</Text>;
};
export default Title;
