import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export default function MealItem({ strCategory, strCategoryThumb }) {
  return (
    <View style={styles.card}>
      <Image
        source={{ uri: `${strCategoryThumb}` }}
        style={{ width: 230, height: 150, borderRadius: 15 }}
      />
      <View style={styles.card_text}>
        <Text style={styles.card_title}>{strCategory}</Text>
        <Text style={styles.card_price}>25.000</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 20,
    marginTop: 20,
    gap: 10,
  },
  card_text: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  card_price: {
    color: "green",
    fontWeight: "700",
  },
  card_title: {
    color: "red",
    fontWeight: "700",
  },
});
