import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

import { colors } from "../../../styles";
import Header from "./components/Header";
import Bookmark from "./components/Bookmark";
import About from "./components/About";

export default function () {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Header />

      <View>
        <Bookmark />

        <About />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkBg,
  },
});
