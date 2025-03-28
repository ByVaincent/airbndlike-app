import { useRouter } from "expo-router";
import Constants from "expo-constants";
import { Text, View, Platform, StyleSheet } from "react-native";
import { useEffect, useState } from "react";
import {
  Logo,
  OfferDescription,
  OffersImage,
  OfferDetails,
} from "../../../../components/indexComponent";
import colors from "../../../../utils/colors";
import { ActivityIndicator } from "react-native";
import { useLocalSearchParams } from "expo-router";
import axios from "axios";

export default function Room() {
  const [offer, setOffer] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const { id } = useLocalSearchParams();

  //navigation

  const router = useRouter();

  useEffect(() => {
    try {
      const fectchData = async () => {
        const offer = await axios.get(
          `https://lereacteur-bootcamp-api.herokuapp.com/api/airbnb/rooms/${id}`
        );

        setOffer(offer.data);
        setIsLoading(false);
      };

      fectchData();
    } catch (error) {
      setError(error.response.data.error);
      setIsLoading(false);
    }
  }, []);

  return (
    <View
      style={
        Platform.OS === "ios" ? null : { marginTop: Constants.statusBarHeight }
      }
    >
      <View
        style={[
          styles.container,
          {
            alignItems: "center",
            justifyContent: "center",
          },
        ]}
      >
        {isLoading ? (
          <ActivityIndicator size={"large"} color={colors.main} />
        ) : error ? (
          <Text>{error}</Text>
        ) : (
          <View style={styles.container}>
            <OffersImage uri={offer.photos[1].url} price={offer.price} />
            <View style={styles.detailsWrapper}>
              <OfferDetails
                title={offer.title}
                ratingValue={offer.ratingValue}
                reviews={offer.reviews}
                uri={offer.user.account.photo.url}
                size={"20%"}
              />
              <OfferDescription description={offer.description} />
            </View>
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { width: "100%" },
  detailsWrapper: { paddingHorizontal: 15 },
});
