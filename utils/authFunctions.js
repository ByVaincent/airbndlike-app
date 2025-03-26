import axios from "axios";
import { useRouter } from "expo-router";

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

    console.log(user.data);
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

const logout = (setUser) => {
  setUser(null);
};

export default { login, signup, logout };
