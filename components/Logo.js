import logo from "../assets/logo.png";
import { Image } from "react-native";

const Logo = ({ size }) => {
  return (
    <Image
      source={logo}
      style={{ width: size, height: size }}
      resizeMode="contain"
    ></Image>
  );
};
export default Logo;
