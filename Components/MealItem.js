import {
  View,
  Text,
  Pressable,
  Image,
  StyleSheet,
  Platform,
} from "react-native";

export default function MealItem({
  title,
  imageUrl,
  duration,
  affordability,
  complexity,
}) {
  return (
    <View style={styles.mealItem}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => pressed && styles.pressed}
      >
        <View style={styles.innerContainer}>
          <View>
            <Image source={{ uri: imageUrl }} style={styles.image} />
            <Text style={styles.title}>{title}</Text>
          </View>
          <View style={styles.deatils}>
            <Text style={styles.detailItem}>{duration}m</Text>
            <Text style={styles.detailItem}>{affordability.toUpperCase()}</Text>
            <Text style={styles.detailItem}>{complexity.toUpperCase()}</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    backgroundColor: "white",
    elevation: 4,
    shadowRadius: 8,
    shadowOpacity: 0.5,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 5 },
  },
  pressed: {
    opacity: Platform.select({ ios: 0.5, android: 1 }),
  },
  innerContainer: {
    overflow: "hidden",
    borderRadius: 8,
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    margin: 10,
  },
  deatils: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12,
  },
});
