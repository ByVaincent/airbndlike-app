import { createContext, useEffect, useState } from "react";
import { Stack } from "expo-router";
import { useRouter } from "expo-router";
import authFunctions from "../utils/authFunctions";

export const AuthContext = createContext();

export default function IndexLayout() {
  const router = useRouter();
  //Auth states

  const [user, setUser] = useState(true);
  console.log(user);

  useEffect(() => {
    if (user) {
      router.replace("main/home");
    } else {
      router.replace("/");
    }
  }, [user]);

  //useContext

  return (
    <AuthContext.Provider value={{ authFunctions, user, setUser }}>
      <Stack>
        <Stack.Screen name="auth" options={{ headerShown: false }} />
        <Stack.Screen name="main" options={{ headerShown: false }} />
      </Stack>
    </AuthContext.Provider>
  );
}
