import { Stack } from "expo-router";
import Logo from "../../../components/Logo";

const HomeLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: true,
        headerTitle: () => <Logo size={40} />,
      }}
    ></Stack>
  );
};
export default HomeLayout;
