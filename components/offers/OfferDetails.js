import { View, Text, StyleSheet } from "react-native";
import colors from "../../utils/colors";
import OfferTitle from "./OfferTitle";
import { Avatar } from "../indexComponent";
import Entypo from "@expo/vector-icons/Entypo";

const OfferDetails = ({ title, ratingValue, reviews, uri, size }) => {
  //diplaying the stars
  const rate = (ratingValue) => {
    const result = [];
    const emptyStars = 5 - ratingValue;

    for (let i = 0; i < ratingValue; i++) {
      result.push(<Entypo key={i} name="star" size={24} color={colors.main} />);
    }

    for (let i = 0; i < emptyStars; i++) {
      result.push(
        <Entypo
          key={"emptyStars-" + i}
          name="star-outlined"
          size={24}
          color={colors.main}
        />
      );
    }

    return result;
  };

  return (
    <View style={styles.details}>
      <View style={styles.detailsText}>
        <OfferTitle title={title} />
        <View style={styles.ratingContainer}>
          <Text style={styles.rating}>
            {rate(ratingValue)}
            {" " + reviews + " reviews"}
          </Text>
        </View>
      </View>
      <Avatar uri={uri} size={size} />
    </View>
  );
};
export default OfferDetails;

const styles = StyleSheet.create({
  detailsText: { width: "75%", gap: 15 },
  details: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "5%",
    paddingVertical: 20,
  },
  rating: { color: colors.text },
});
