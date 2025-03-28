import { useRouter } from "expo-router";
import { Link } from "expo-router";
import Constants from "expo-constants";
import {
  Text,
  View,
  Platform,
  StyleSheet,
  FlatList,
  Image,
  ActivityIndicator,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Logo from "../../../components/Logo";
import commonStyles from "../../../utils/styles";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Contexts/AuthContex";
import axios from "axios";
import colors from "../../../utils/colors";
import {
  Avatar,
  OfferDetails,
  OfferTitle,
  OffersImage,
} from "../../../components/indexComponent";

export default function Home() {
  const router = useRouter();
  const { user } = useContext(AuthContext);

  const [offers, setOffers] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  if (!user.userToken) {
    router.replace("auth/login");
  }

  useEffect(() => {
    try {
      const fetchData = async () => {
        const offers = await axios.get(
          "https://lereacteur-bootcamp-api.herokuapp.com/api/airbnb/rooms"
        );

        setOffers(offers.data);
      };

      fetchData();
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  }, []);

  return (
    <View
      style={
        Platform.OS === "ios" ? null : { marginTop: Constants.statusBarHeight }
      }
    >
      <View style={[styles.container]}>
        {/* <View
            style={[
              styles.container,
              {
                alignItems: "center",
                borderTopWidth: 1,
                borderTopColor: colors.text,
                width: "100%",
                padding: 15,
              },
            ]}
          > */}
        {isLoading ? (
          <ActivityIndicator size={50} color={colors.main} />
        ) : (
          <FlatList
            style={styles.FlatList}
            data={offers}
            keyExtractor={(item) => String(item._id)}
            renderItem={({ item }) => {
              return (
                <View>
                  <Link href={`./room/${item._id}`}>
                    <OffersImage uri={item.photos[0].url} price={item.price} />
                  </Link>
                  <OfferDetails
                    title={item.title}
                    ratingValue={item.ratingValue}
                    reviews={item.reviews}
                    uri={item.user.account.photo.url}
                    size={"20%"}
                  />
                </View>
              );
            }}
            ListEmptyComponent={() => (
              <Text>Impossible de récupérer les offres</Text>
            )}
            ItemSeparatorComponent={() => (
              <View style={styles.separator}></View>
            )}
          ></FlatList>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  separator: {
    width: "100%",
    height: 1,
    backgroundColor: colors.text,
    marginBottom: 20,
  },
  image: { width: "100%", height: 200 },
  imageContainer: { width: "100%", position: "relative" },
  price: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "black",
    color: "white",
    fontSize: 20,
    position: "absolute",
    bottom: 20,
  },
  details: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "5%",
    paddingVertical: 20,
  },
  title: { fontSize: 20 },
  rating: { color: colors.text },
  avatarContainer: {
    borderRadius: "50%",
    backgroundColor: "black",
    width: "20%",
    aspectRatio: "1 / 1",
    overflow: "hidden",
  },
  avatar: { width: "100%", height: "100%" },
});
