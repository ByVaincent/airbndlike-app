import { useEffect, useState } from "react";
import { Slot } from "expo-router";
import { useRouter } from "expo-router";
import authFunctions from "../utils/authFunctions";
import { AuthContext } from "../Contexts/AuthContex";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function IndexLayout() {
  const router = useRouter();
  //Auth states
  console.log(AuthContext);

  const [user, setUser] = useState(false);
  console.log(user);

  //check if user already connected
  useEffect(() => {
    const fetchLocalStorage = async () => {
      // await AsyncStorage.removeItem("user");
      const localStorage = await AsyncStorage.getItem("user");

      if (localStorage) {
        setUser(JSON.parse(localStorage));
        router.replace("main/home");
      }
    };

    fetchLocalStorage();
  }, []);

  //redirect user if connected or not
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
      <Slot></Slot>
    </AuthContext.Provider>
  );
}
