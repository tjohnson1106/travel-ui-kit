import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

import { AntDesign, Entypo } from "@expo/vector-icons";

export default function () {
  return (
    <View>
      <Image
        source={require("../../../../assets/modern-art-placeholder.jpg")}
        style={{
          width: "100%",
          height: 400,
        }}
      />
      <View style={style.topButtons}>
        <AntDesign name="close" size={24} color="#fff" />1
        <View style={gs.rowCentery}>
          <AntDesign name="save" size={24} style={styles.topButtonRight} />
          <AntDesign name="savealt" size={24} style={styles.topButtonRight} />
          <Entypo
            name="dots-three-vertical"
            size={18}
            style={styles.topButtonRight}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  topButtons: {
    ...gs.rowBetween,
    position: "absolute",
    top: 64,
    left: 32,
    right: 32,
  },

  topButtonRight: {
    marginLeft: 12,
    color: "#fff",
  },
});
