import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import CategoriesScreen from "./Screens/CategoriesScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsOverviewScreen from "./Screens/MealsOverviewScreen";
import MealsDetailsScreen from "./Screens/MealsDetailsScreen";
import DrawerNavigatonHandler from "./Screens/DrwerNavigationHandler";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Drawer"
          screenOptions={{
            headerStyle: { backgroundColor: "#011701" },
            headerTintColor: "white",
            contentStyle: { backgroundColor: "#1a2b0d" },
          }}
        >
          <Stack.Screen
            name="Drawer"
            component={DrawerNavigatonHandler}
            options={{
              headerShown: false,
            }}
          ></Stack.Screen>
          <Stack.Screen
            name="Meals Overview"
            component={MealsOverviewScreen}
          ></Stack.Screen>
          <Stack.Screen
            name="MealsDetailsScreen"
            component={MealsDetailsScreen}
            options={{
              title: "About the Meal",
            }}
          ></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
