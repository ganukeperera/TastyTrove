import { Pressable, View, Text, StyleSheet } from "react-native";

export default function CategoryGridTile({ title, color, size }) {
  return (
    <View
      style={[
        styles.container,
        { backgroundColor: color },
        { width: size, height: size },
      ]}
    >
      <Pressable
        style={({ pressed }) => {
          if (pressed) {
            return [styles.pressableNormal, styles.pressablePress];
          }
          return styles.pressableNormal;
        }}
      >
        <Text style={styles.text}>{title}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 200,
    height: 200,
    margin: 20,
    borderRadius: 10,
    justifyContent: "center",
  },
  pressablePress: {
    opacity: 0.15,
  },
  pressableNormal: {
    flex: 1,
    justifyContent: "center",
  },
  text: {
    fontSize: 18,
    textAlign: "center",
    padding: 5,
  },
});
