import { createContext, useState } from "react";
import { Stack } from "expo-router";
import authFunctions from "../utils/authFunctions";

export const AuthContext = createContext();

export default function IndexLayout() {
  //Auth states
  const [isConnected, setIsConnected] = useState(false);
  const [user, setUser] = useState(null);
  console.log(user);

  //useContext

  return (
    <AuthContext.Provider
      value={{ isConnected, setIsConnected, authFunctions, user, setUser }}
    >
      <Stack />
    </AuthContext.Provider>
  );
}
