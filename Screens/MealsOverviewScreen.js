import { View, Text, StyleSheet, FlatList } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealItem from "../Components/MealItem";

export default function MealsOverviewScreen({ route }) {
  const catId = route.params.categoryId;

  const mealsToDisplay = MEALS.filter((item) => {
    return item.categoryIds.indexOf(catId) >= 0;
  });
  function renderMealItem(itemData) {
    const item = itemData.item;
    const mealItemProps = {
      title: item.title,
      imageUrl: item.imageUrl,
      affordability: item.affordability,
      complexity: item.complexity,
      duration: item.duration,
    };
    return <MealItem {...mealItemProps} />;
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={mealsToDisplay}
        renderItem={renderMealItem}
        keyExtractor={(item) => item.id}
      ></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
