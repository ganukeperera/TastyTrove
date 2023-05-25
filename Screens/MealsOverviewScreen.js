import { View, StyleSheet, FlatList } from "react-native";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealItem from "../Components/MealItem";
import { useLayoutEffect } from "react";

export default function MealsOverviewScreen({ route, navigation }) {
  const catId = route.params.categoryId;

  const mealsToDisplay = MEALS.filter((item) => {
    return item.categoryIds.indexOf(catId) >= 0;
  });
  function mealDetailsHandler(mealsId) {
    navigation.navigate("MealsDetailsScreen", {
      mealId: mealsId,
    });
  }
  function renderMealItem(itemData) {
    const item = itemData.item;
    const mealItemProps = {
      id: item.id,
      title: item.title,
      imageUrl: item.imageUrl,
      affordability: item.affordability,
      complexity: item.complexity,
      duration: item.duration,
    };
    return <MealItem {...mealItemProps} onPress={mealDetailsHandler} />;
  }

  useLayoutEffect(() => {
    const catTitle = CATEGORIES.find((item) => item.id == catId).title;
    navigation.setOptions({
      title: catTitle,
    });
  }, [catId, navigation]);
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
