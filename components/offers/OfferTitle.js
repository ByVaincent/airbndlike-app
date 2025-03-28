import { StyleSheet } from "react-native";
import { Text } from "react-native";

const OfferTitle = ({ title }) => {
  return (
    <Text style={styles.title} numberOfLines={1}>
      {title}
    </Text>
  );
};
export default OfferTitle;

const styles = StyleSheet.create({
  title: { fontSize: 20 },
});
