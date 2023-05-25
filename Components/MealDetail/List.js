import { StyleSheet, View, Text } from "react-native";

export default function List({ dataPoint }) {
  return dataPoint.map((data) => (
    <View style={styles.listItem} key={data}>
      <Text style={styles.itemText}>{data}</Text>
    </View>
  ));
}

const styles = StyleSheet.create({
  listItem: {
    borderRadius: 6,
    paddingHorizontal: 6,
    paddingVertical: 4,
    marginVertical: 4,
    marginHorizontal: 12,
    backgroundColor: "#8dba6b",
  },
  itemText: {
    color: "#1a2b0d",
    textAlign: "center",
  },
});
