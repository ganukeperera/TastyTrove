import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Button,
} from "react-native";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../Components/MealDetails";
import Subtitle from "../Components/MealDetail/Subtitle";
import List from "../Components/MealDetail/List";
import { useContext, useLayoutEffect } from "react";
import IconButton from "../Components/IconButton";
import { FavouriteContext } from "../Store/Context/Favourite-Context";

export default function MealsDetailsScreen({ route, navigation }) {
  const mealId = route.params.mealId;
  const meal = MEALS.find((meal) => meal.id == mealId);
  //Use Context
  const favouritContext = useContext(FavouriteContext);
  const isMealFavourite = favouritContext.ids.includes(mealId);

  function mealFavouriteHandler() {
    if (isMealFavourite) {
      favouritContext.removeFavourite(mealId);
    } else {
      favouritContext.addFavourite(mealId);
    }
  }
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <IconButton
          icon={isMealFavourite ? "star" : "star-outline"}
          color="white"
          onPress={mealFavouriteHandler}
        />
      ),
    });
  }, [navigation, mealFavouriteHandler]);
  return (
    <ScrollView style={styles.scrollView}>
      <Image source={{ uri: meal.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{meal.title}</Text>
      <MealDetails
        duration={meal.duration}
        affordability={meal.affordability}
        complexity={meal.complexity}
        textStyle={styles.detailText}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>ingredients</Subtitle>
          <List dataPoint={meal.ingredients}></List>
          <Subtitle>Steps</Subtitle>
          <List dataPoint={meal.steps}></List>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    margin: 8,
    textAlign: "center",
    color: "white",
  },
  detailText: {
    color: "white",
  },
  listContainer: {
    width: "80%",
  },
  listOuterContainer: {
    alignItems: "center",
  },
  scrollView: {
    marginBottom: 30,
  },
});
