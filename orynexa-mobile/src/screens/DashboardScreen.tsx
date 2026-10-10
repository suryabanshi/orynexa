import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ScreenContainer from "../components/ScreenContainer";
import Card from "../components/Card";
import Logo from "../components/Logo";
import { colors } from "../theme";
import { dashboardItems } from "../data/content";

export default function DashboardScreen() {
  return (
    <ScreenContainer>
      <Logo subtitle="DASHBOARD" />

      <View>
        <Text style={styles.kicker}>SYSTEM CONTROL CENTER</Text>
        <Text style={styles.h1}>ORYNEXA OS Dashboard</Text>
        <Text style={styles.lead}>
          A live overview of your business systems, AI agents, learning
          tools, documents, team tasks, and global operations.
        </Text>
      </View>

      <View style={styles.grid}>
        {dashboardItems.map((item) => (
          <Card key={item.title} {...item} />
        ))}
      </View>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  kicker: {
    color: colors.emerald,
    letterSpacing: 4,
    fontWeight: "800",
    fontSize: 12,
    marginTop: 8,
  },
  h1: {
    color: colors.white,
    fontSize: 30,
    fontWeight: "800",
    marginTop: 10,
    marginBottom: 12,
  },
  lead: {
    color: "#CBD5E1",
    fontSize: 15,
    lineHeight: 23,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
  },
});
