import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import MealItem from "./MealItem";

export default function MealList() {
  const [meals, setMeals] = useState([]);
  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((res) => res.json())
      .then((data) => setMeals(data.categories));
  }, []);
  return (
    <View style={styles.cards}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {meals.map((item) => {
          return <MealItem {...item} key={item.idCategory} />;
        })}
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  cards: {
    flexDirection: "row",
    paddingTop: 30,
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    overflow: "scroll",
    // backgroundColor: "#bbb",
  },
});
