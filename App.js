import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import MealList from "./components/MealList";

export default function App() {
  return (
    <View style={styles.container}>
      <MealList />
      <StatusBar style="auto" hidden />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
