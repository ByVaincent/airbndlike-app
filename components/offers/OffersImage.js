import { StyleSheet, View, Image, Text } from "react-native";

const OffersImage = ({ uri, price }) => {
  console.log(uri);

  return (
    <View style={styles.imageContainer}>
      <Image
        source={{
          uri: uri,
        }}
        style={styles.image}
        resizeMode="cover"
      ></Image>

      <Text style={styles.price}>{price} €</Text>
    </View>
  );
};
export default OffersImage;

const styles = StyleSheet.create({
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
});
