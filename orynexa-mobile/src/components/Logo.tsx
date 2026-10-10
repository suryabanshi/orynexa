import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { colors } from "../theme";

export default function Logo({ subtitle }: { subtitle: string }) {
  return (
    <View style={styles.row}>
      <View style={styles.mark}>
        <View style={styles.ring} />
        <View style={styles.dot} />
      </View>
      <View>
        <Text style={styles.title}>ORYNEXA</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  mark: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "rgba(245,158,11,0.75)",
    alignItems: "center",
    justifyContent: "center",
  },
  ring: {
    position: "absolute",
    width: 26,
    height: 26,
    borderRadius: 13,
    borderWidth: 1,
    borderColor: "rgba(56,189,248,0.45)",
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: colors.gold,
  },
  title: {
    color: colors.white,
    fontWeight: "800",
    fontSize: 18,
    letterSpacing: 2,
  },
  subtitle: {
    color: colors.gray,
    fontSize: 10,
    letterSpacing: 3,
    marginTop: 2,
  },
});
