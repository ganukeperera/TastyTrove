import { Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function IconButton({ icon, color, onPress }) {
  return (
    <Pressable
      android_ripple={{ color: "#fff" }}
      style={({ prssed }) => prssed && styles.pressed}
    >
      <Ionicons
        name={icon}
        size={24}
        color={color}
        onPress={onPress}
      ></Ionicons>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.7,
  },
});
