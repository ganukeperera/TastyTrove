import { Text, View, StyleSheet } from "react-native";
import MealsList from "../Components/MealsList/MealsList";
import { useContext } from "react";
import { FavouriteContext } from "../Store/Context/Favourite-Context";
import { MEALS } from "../data/dummy-data";

export default function FavouritsScreen() {
  const favouriteContext = useContext(FavouriteContext);
  const itemsToDisplay = MEALS.filter((meal) =>
    favouriteContext.ids.includes(meal.id)
  );
  if (itemsToDisplay.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You have no favourite meals yet!</Text>
      </View>
    );
  }
  return <MealsList items={itemsToDisplay} />;
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#8dba6b",
    fontSize: 18,
    textAlign: "center",
    fontWeight: "bold",
  },
});
