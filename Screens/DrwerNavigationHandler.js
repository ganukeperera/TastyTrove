import { createDrawerNavigator } from "@react-navigation/drawer";
import CategoriesScreen from "./CategoriesScreen";
import FavouritsScreen from "./FavouritsScreen";
import { Ionicons } from "@expo/vector-icons";

export default function DrawerNavigatonHandler() {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#011701" },
        headerTintColor: "white",
        sceneContainerStyle: { backgroundColor: "#1a2b0d" },
        drawerContentStyle: { backgroundColor: "#1a2b0d" },
        drawerInactiveTintColor: "white",
        drawerActiveTintColor: "#1a2b0d",
        drawerActiveBackgroundColor: "#e3f4d7",
      }}
    >
      <Drawer.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          title: "All Categories",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="list" size={size} color={color}></Ionicons>
          ),
        }}
      ></Drawer.Screen>
      <Drawer.Screen
        name="Favourites"
        component={FavouritsScreen}
        options={{
          title: "Favourites",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="star" size={size} color={color}></Ionicons>
          ),
        }}
      ></Drawer.Screen>
    </Drawer.Navigator>
  );
}
