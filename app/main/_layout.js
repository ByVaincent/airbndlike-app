import { Tabs } from "expo-router";

const MainLayout = () => {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen name="(home)" options={{ tabBarLabel: "plop" }} />
    </Tabs>
  );
};
export default MainLayout;
