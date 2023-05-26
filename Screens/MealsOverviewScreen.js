import { CATEGORIES, MEALS } from "../data/dummy-data";
import { useLayoutEffect } from "react";
import MealsList from "../Components/MealsList/MealsList";

export default function MealsOverviewScreen({ route, navigation }) {
  const catId = route.params.categoryId;

  const mealsToDisplay = MEALS.filter((item) => {
    return item.categoryIds.indexOf(catId) >= 0;
  });

  useLayoutEffect(() => {
    const catTitle = CATEGORIES.find((item) => item.id == catId).title;
    navigation.setOptions({
      title: catTitle,
    });
  }, [catId, navigation]);
  return <MealsList items={mealsToDisplay} />;
}
