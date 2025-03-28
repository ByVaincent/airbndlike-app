import { useState } from "react";
import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native";
import colors from "../../utils/colors";

const OfferDescription = ({ description }) => {
  const [seeMore, setSeeMore] = useState(false);
  return (
    <View style={{ gap: 10 }}>
      <Text numberOfLines={seeMore ? false : 3}>{description}</Text>
      <TouchableOpacity onPress={() => setSeeMore(!seeMore)}>
        <Text style={{ textDecorationLine: "underline", color: colors.text }}>
          {seeMore ? "Voir moins" : " Voir plus"}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
export default OfferDescription;
