import React, { useEffect, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import ScreenContainer from "../components/ScreenContainer";
import Logo from "../components/Logo";
import { colors, radius, spacing } from "../theme";
import { integrations } from "../data/integrations";

const STORAGE_KEY = "orynexa.connectedApps";

export default function ConnectScreen() {
  const [connected, setConnected] = useState<Record<string, boolean>>({});
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    AsyncStorage.getItem(STORAGE_KEY)
      .then((value) => {
        if (value) setConnected(JSON.parse(value));
      })
      .finally(() => setLoaded(true));
  }, []);

  useEffect(() => {
    if (!loaded) return;
    AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(connected)).catch(() => {});
  }, [connected, loaded]);

  const toggle = (id: string) => {
    setConnected((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const connectedCount = Object.values(connected).filter(Boolean).length;

  return (
    <ScreenContainer>
      <Logo subtitle="CONNECT" />

      <View>
        <Text style={styles.kicker}>YOUR ECOSYSTEM</Text>
        <Text style={styles.h1}>Connect Your Apps</Text>
        <Text style={styles.lead}>
          Link ORYNEXA to the tools you already use. Connected apps can sync
          with ORYNEXA OS, AI agents, and workflows across every subsystem.
        </Text>
        <Text style={styles.count}>
          {connectedCount} of {integrations.length} apps connected
        </Text>
      </View>

      <View style={styles.list}>
        {integrations.map((app) => {
          const isConnected = !!connected[app.id];
          return (
            <View key={app.id} style={styles.row}>
              <View style={styles.iconWrap}>
                <MaterialCommunityIcons
                  name={app.icon}
                  size={26}
                  color={isConnected ? colors.emerald : colors.gray}
                />
              </View>
              <View style={styles.info}>
                <Text style={styles.name}>{app.name}</Text>
                <Text style={styles.category}>{app.category}</Text>
                <Text style={styles.description}>{app.description}</Text>
              </View>
              <Pressable
                onPress={() => toggle(app.id)}
                style={[styles.button, isConnected && styles.buttonConnected]}
              >
                <Text
                  style={[
                    styles.buttonText,
                    isConnected && styles.buttonTextConnected,
                  ]}
                >
                  {isConnected ? "Connected" : "Connect"}
                </Text>
              </Pressable>
            </View>
          );
        })}
      </View>

      <Text style={styles.note}>
        Connection preferences are saved on this device. Live account sync
        for each provider can be enabled from ORYNEXA OS settings.
      </Text>
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
  count: {
    color: colors.gold,
    fontSize: 13,
    fontWeight: "700",
    marginTop: 12,
  },
  list: {
    gap: 12,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.sm,
    backgroundColor: "rgba(15,23,42,0.85)",
    borderColor: colors.border,
    borderWidth: 1,
    borderRadius: radius.lg,
    padding: spacing.md,
  },
  iconWrap: {
    width: 48,
    height: 48,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(148,163,184,0.08)",
    borderColor: colors.border,
    borderWidth: 1,
  },
  info: {
    flex: 1,
  },
  name: {
    color: colors.white,
    fontSize: 15,
    fontWeight: "700",
  },
  category: {
    color: colors.cyan,
    fontSize: 11,
    letterSpacing: 1,
    marginTop: 2,
    marginBottom: 4,
  },
  description: {
    color: colors.gray,
    fontSize: 12,
    lineHeight: 17,
  },
  button: {
    borderWidth: 1,
    borderColor: "rgba(248,250,252,0.16)",
    borderRadius: radius.pill,
    paddingVertical: 8,
    paddingHorizontal: 14,
  },
  buttonConnected: {
    backgroundColor: "rgba(16,185,129,0.14)",
    borderColor: "rgba(16,185,129,0.4)",
  },
  buttonText: {
    color: colors.white,
    fontSize: 12,
    fontWeight: "700",
  },
  buttonTextConnected: {
    color: colors.emerald,
  },
  note: {
    color: colors.gray,
    fontSize: 12,
    lineHeight: 18,
    textAlign: "center",
  },
});
