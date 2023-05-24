import { FlatList, View, Dimensions, StyleSheet } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import Meal from "../models/meal";
import CategoryGridTile from "../Components/CategoryGridTile";

export default function CategoriesScreen({ navigation }) {
  function renderItemHandler(itemData) {
    const width = Dimensions.get("window").width;

    function pressHandler() {
      navigation.navigate("Meals Overview");
    }
    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        size={(width - 120) / 2}
        onPress={pressHandler}
      ></CategoryGridTile>
    );
  }

  return (
    <View style={styles.screen}>
      <FlatList
        data={CATEGORIES}
        renderItem={renderItemHandler}
        keyExtractor={(itemData) => itemData.id}
        numColumns={2}
      ></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
  },
});
