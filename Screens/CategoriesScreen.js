import { FlatList, View, Dimensions } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import Meal from "../models/meal";
import CategoryGridTile from "../Components/CategoryGridTile";

function renderItemHandler(itemData) {
  const width = Dimensions.get("window").width;
  return (
    <CategoryGridTile
      title={itemData.item.title}
      color={itemData.item.color}
      size={(width - 120) / 2}
    ></CategoryGridTile>
  );
}

export default function CategoryScreen() {
  return (
    <View>
      <FlatList
        data={CATEGORIES}
        renderItem={renderItemHandler}
        keyExtractor={(itemData) => itemData.id}
        numColumns={2}
      ></FlatList>
    </View>
  );
}
