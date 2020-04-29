import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { colors } from "../../../../styles";
import { Feather } from "@expo/vector-icons";

export default function Bookmark() {
  return (
    <View style={styles.bookmnark}>
      <Feather name="bookmark" size={24} color={colors.pink} />
    </View>
  );
}

const styles = StyleSheet.create({
  bookmnark: {
    position: "absolute",
    width: 56,
    height: 56,
    right: 32,
    top: -56 / 2,
    backgroundColor: colors.text,
    ...gs.center,
    borderRadius: 56 / 2,
    zIndex: 10,
  },
});
