import { Pressable, View, Text, StyleSheet, Platform } from "react-native";

export default function CategoryGridTile({ title, color, size }) {
  return (
    <View style={[styles.container, { width: size, height: size }]}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => [
          styles.pressableNormal,
          { backgroundColor: color },
          pressed ? styles.pressablePress : null,
        ]}
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
    shadowColor: "black",
    shadowOpacity: 0.2,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
    backgroundColor: "white",
    overflow: Platform.select({ ios: "visible", android: "hidden" }),
  },
  pressablePress: {
    opacity: Platform.select({ ios: 0.5, android: 1.0 }),
  },
  pressableNormal: {
    flex: 1,
    justifyContent: "center",
    borderRadius: 10,
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    padding: 5,
  },
});
