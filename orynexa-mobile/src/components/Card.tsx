import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { colors, radius, spacing } from "../theme";
import type { IconName } from "../data/content";

export default function Card({
  title,
  text,
  icon,
}: {
  title: string;
  text: string;
  icon: IconName;
}) {
  return (
    <View style={styles.card}>
      <View style={styles.icon}>
        <MaterialCommunityIcons name={icon} size={24} color={colors.emerald} />
      </View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexBasis: "48%",
    flexGrow: 1,
    backgroundColor: "rgba(15,23,42,0.85)",
    borderColor: colors.border,
    borderWidth: 1,
    borderRadius: radius.lg,
    padding: spacing.lg,
    minHeight: 150,
  },
  icon: {
    width: 48,
    height: 48,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(16,185,129,0.08)",
    borderColor: "rgba(16,185,129,0.28)",
    borderWidth: 1,
    marginBottom: spacing.sm,
  },
  title: {
    color: colors.white,
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 6,
  },
  text: {
    color: "#CBD5E1",
    fontSize: 13,
    lineHeight: 19,
  },
});
