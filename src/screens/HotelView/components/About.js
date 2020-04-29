import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { gs, colors } from "../../../../styles";

const hotel = {
  name: "Mount Carlin Hotel",
  price: "$967",
  location: "New York",
  about: "inventore sint ipsum"
};

export default function About() {
  return (
    <View style={styles.root}>
      <Text style={gs.title}>{hotel.name}</Text>
      <Text style={styles.info}>{hotel.price}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    ...gs.SectionContainer,
    backgroundColor: colors.darkBg
  }
});
