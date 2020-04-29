import { StyleSheet } from "react-native";

export const colors = {
  darkBg: "#222",
  lightBg: "#333",
  darkHl: "#666",
  lightHl: "#888",
  pink: "#EA3372",
  text: "#fff",
  textSec: "#aaa"
};

export const gs = StyleSheet.create({
  sectionContainer: {
    paddingVertical: 24,
    paddingHorizontal: 32,
    marginBottom: 8,
    backgroundColor: colors.lightBg
  },

  rowCewnter: {
    flexDirection: "row",
    alignItems: "center"
  },

  rowBetween: {
    flowDirection: "row",
    justifyContent: "space-between"
  },

  center: {
    alignItems: "center",
    justifyItems: "center"
  },
  title: {
    color: colors.text,
    fontSize: 30
  }
});
