import axios from "axios";
import { useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

const login = async (email, password, setIsLoading, setError, setUser) => {
  try {
    setIsLoading(true);
    setError(null);

    if (!email || !password) {
      throw { message: "Merci d'indiquer votre email et votre mot de passe" };
    }

    const user = await axios.post(
      "https://lereacteur-bootcamp-api.herokuapp.com/api/airbnb/user/log_in",
      {
        email,
        password,
      }
    );

    const value = { userToken: user.data.token, userId: user.data.id };

    await AsyncStorage.setItem("user", JSON.stringify(value));

    setUser({ userToken: user.data.token, userId: user.data.id });
    setIsLoading(false);
  } catch (error) {
    if (error.response?.data?.error) {
      setError(error.response.data.error);
      setIsLoading(false);
    } else {
      setError(error.message);
      setIsLoading(false);
    }
  }
};

const signup = async (
  email,
  username,
  password,
  description,
  confirmPassword,
  setIsLoading,
  setError,
  setUser
) => {
  try {
    setIsLoading(true);
    setError(null);
    console.log("test");
    if (
      !email ||
      !username ||
      !password ||
      !description ||
      !password ||
      !confirmPassword
    ) {
      throw { message: "Merci de remplir tous les champs demandés" };
    } else if (password !== confirmPassword) {
      throw { message: "Les mots de passes doivent être identiques" };
    }

    const user = await axios.post(
      "https://lereacteur-bootcamp-api.herokuapp.com/api/airbnb/user/sign_up",
      {
        email,
        username,
        description,
        password,
      }
    );

    // setUser({ userToken: user.data.token, userId: user.data.id });

    const value = { userToken: user.data.token, userId: user.data.id };

    await AsyncStorage.setItem("user", JSON.stringify(value));

    setIsLoading(false);
    setUser({ userToken: user.data.token, userId: user.data.id });
  } catch (error) {
    if (error.response?.data?.error) {
      setError(error.response.data.error);
      setIsLoading(false);
    } else {
      setError(error.message);
      setIsLoading(false);
    }
  }
};

const logout = async (setUser) => {
  await AsyncStorage.removeItem("user");
  setUser(null);
};

export default { login, signup, logout };
