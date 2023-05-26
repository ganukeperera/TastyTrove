import {
  View,
  Text,
  Pressable,
  Image,
  StyleSheet,
  Platform,
} from "react-native";
import MealDetails from "../MealDetails";

export default function MealItem({
  id,
  title,
  imageUrl,
  duration,
  affordability,
  complexity,
  onPress,
}) {
  function mealDetailHandler() {
    onPress(id);
  }
  return (
    <View style={styles.mealItem}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => pressed && styles.pressed}
        onPress={mealDetailHandler}
      >
        <View style={styles.innerContainer}>
          <View>
            <Image source={{ uri: imageUrl }} style={styles.image} />
            <Text style={styles.title}>{title}</Text>
          </View>
          <MealDetails
            duration={duration}
            affordability={affordability}
            complexity={complexity}
          ></MealDetails>
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
});
