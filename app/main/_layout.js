import { Tabs } from "expo-router";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

import colors from "../../utils/colors";
import { Logo } from "../../components/indexComponent";

const MainLayout = () => {
  return (
    <Tabs screenOptions={{ headerTitle: () => <Logo size={40} /> }}>
      <Tabs.Screen
        name="(home)"
        options={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: colors.main,
          tabBarInactiveTintColor: colors.text,
          headerShown: false,
          tabBarIcon: ({ color }) => {
            return <Feather name="home" size={30} color={color} />;
          },
        }}
      />

      <Tabs.Screen
        name="map"
        options={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: colors.main,
          tabBarInactiveTintColor: colors.text,
          headerShown: false,
          tabBarIcon: ({ color }) => {
            return (
              <FontAwesome5 name="map-marked-alt" size={30} color={color} />
            );
          },
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: colors.main,
          tabBarInactiveTintColor: colors.text,
          headerShown: false,
          tabBarIcon: ({ color }) => {
            return <Feather name="user" size={30} color={color} />;
          },
        }}
      />
    </Tabs>
  );
};
export default MainLayout;
