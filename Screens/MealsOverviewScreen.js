import { View, Text, StyleSheet } from "react-native";

export default function MealsOverviewScreen() {
  return (
    <View style={styles.container}>
      <Text> Meals Overview Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
