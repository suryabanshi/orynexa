import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import HomeScreen from "./src/screens/HomeScreen";
import DashboardScreen from "./src/screens/DashboardScreen";
import ConnectScreen from "./src/screens/ConnectScreen";
import BottomTabBar from "./src/components/BottomTabBar";
import type { TabKey } from "./src/navigation";
import { colors } from "./src/theme";

export default function App() {
  const [tab, setTab] = useState<TabKey>("home");

  return (
    <SafeAreaProvider>
      <View style={styles.app}>
        {tab === "home" && <HomeScreen />}
        {tab === "dashboard" && <DashboardScreen />}
        {tab === "connect" && <ConnectScreen />}
        <BottomTabBar active={tab} onChange={setTab} />
        <StatusBar style="light" />
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: colors.coreBlack,
  },
});
