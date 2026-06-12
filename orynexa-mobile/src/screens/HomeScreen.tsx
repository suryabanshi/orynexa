import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ScreenContainer from "../components/ScreenContainer";
import Card from "../components/Card";
import Logo from "../components/Logo";
import { colors } from "../theme";
import { services, subsystems } from "../data/content";

export default function HomeScreen() {
  return (
    <ScreenContainer>
      <Logo subtitle="FROM THE CORE" />

      <View>
        <Text style={styles.kicker}>FROM THE CORE</Text>
        <Text style={styles.h1}>
          Build Intelligent Systems From the <Text style={styles.gold}>Core</Text>
        </Text>
        <Text style={styles.lead}>
          ORYNEXA connects business, technology, learning, automation, and
          global human potential into one evolving system.
        </Text>
      </View>

      <View style={styles.metrics}>
        <View style={styles.metric}>
          <Text style={styles.metricValue}>6</Text>
          <Text style={styles.metricLabel}>Subsystems</Text>
        </View>
        <View style={styles.metric}>
          <Text style={styles.metricValue}>5</Text>
          <Text style={styles.metricLabel}>System Layers</Text>
        </View>
        <View style={styles.metric}>
          <Text style={styles.metricValue}>∞</Text>
          <Text style={styles.metricLabel}>Possibilities</Text>
        </View>
      </View>

      <View>
        <Text style={styles.sectionTitle}>
          WHAT ORYNEXA <Text style={styles.emerald}>BUILDS</Text>
        </Text>
        <View style={styles.grid}>
          {services.map((service) => (
            <Card key={service.title} {...service} />
          ))}
        </View>
      </View>

      <View>
        <Text style={styles.sectionTitle}>
          ORYNEXA <Text style={styles.emerald}>SUBSYSTEMS</Text>
        </Text>
        <View style={styles.grid}>
          {subsystems.map((subsystem) => (
            <Card key={subsystem.title} {...subsystem} />
          ))}
        </View>
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
    fontSize: 34,
    fontWeight: "800",
    lineHeight: 40,
    marginTop: 10,
    marginBottom: 12,
  },
  gold: { color: colors.gold },
  emerald: { color: colors.emerald },
  lead: {
    color: "#CBD5E1",
    fontSize: 15,
    lineHeight: 23,
  },
  metrics: {
    flexDirection: "row",
    gap: 24,
  },
  metric: {},
  metricValue: {
    color: colors.white,
    fontSize: 26,
    fontWeight: "800",
  },
  metricLabel: {
    color: colors.gray,
    fontSize: 11,
    marginTop: 2,
  },
  sectionTitle: {
    color: "#E2E8F0",
    letterSpacing: 3,
    fontSize: 13,
    fontWeight: "700",
    marginBottom: 12,
    textAlign: "center",
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
  },
});
