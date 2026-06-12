import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { colors, radius } from "../theme";
import type { TabKey } from "../navigation";

const TABS: { key: TabKey; label: string; icon: keyof typeof MaterialCommunityIcons.glyphMap }[] = [
  { key: "home", label: "Home", icon: "home-outline" },
  { key: "dashboard", label: "Dashboard", icon: "view-dashboard-outline" },
  { key: "connect", label: "Connect", icon: "link-variant" },
];

export default function BottomTabBar({
  active,
  onChange,
}: {
  active: TabKey;
  onChange: (tab: TabKey) => void;
}) {
  const insets = useSafeAreaInsets();
  return (
    <View style={[styles.bar, { paddingBottom: Math.max(insets.bottom, 12) }]}>
      {TABS.map((tab) => {
        const isActive = tab.key === active;
        return (
          <Pressable
            key={tab.key}
            onPress={() => onChange(tab.key)}
            style={styles.tab}
          >
            <View style={[styles.iconWrap, isActive && styles.iconWrapActive]}>
              <MaterialCommunityIcons
                name={tab.icon}
                size={22}
                color={isActive ? colors.emerald : colors.gray}
              />
            </View>
            <Text style={[styles.label, isActive && styles.labelActive]}>
              {tab.label}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  bar: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    flexDirection: "row",
    backgroundColor: "rgba(5,7,11,0.92)",
    borderTopWidth: 1,
    borderTopColor: colors.border,
    paddingTop: 10,
  },
  tab: {
    flex: 1,
    alignItems: "center",
    gap: 4,
  },
  iconWrap: {
    width: 40,
    height: 40,
    borderRadius: radius.md,
    alignItems: "center",
    justifyContent: "center",
  },
  iconWrapActive: {
    backgroundColor: "rgba(16,185,129,0.12)",
    borderWidth: 1,
    borderColor: "rgba(16,185,129,0.28)",
  },
  label: {
    fontSize: 11,
    color: colors.gray,
  },
  labelActive: {
    color: colors.emerald,
    fontWeight: "700",
  },
});
