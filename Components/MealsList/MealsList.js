import { View, FlatList, StyleSheet } from "react-native";
import MealItem from "./MealItem";
import { useNavigation } from "@react-navigation/native";

export default function MealsList({ items }) {
  const navigation = useNavigation();

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
  return (
    <View style={styles.container}>
      <FlatList
        data={items}
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
