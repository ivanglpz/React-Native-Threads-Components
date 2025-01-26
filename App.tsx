import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Menu } from "./components/Menu";
export default function App() {
  const [showMenu, setshowMenu] = useState(false);
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <Text>Open up App.tsx to start working on your app!</Text>

      <TouchableOpacity
        onPress={() => {
          setshowMenu(true);
        }}
        style={{
          backgroundColor: "#222222",
          padding: 12,
        }}
      >
        <Text
          style={{
            color: "white",
            fontWeight: "bold",
          }}
        >
          Open menu
        </Text>
      </TouchableOpacity>
      <Menu
        isOpen={showMenu}
        onClose={() => {
          setshowMenu(false);
        }}
        options={[
          [
            { label: "Share", onPress: () => {}, icon: "map-marker" },
            {
              label: "Delete",
              onPress: () => {
                Alert.alert(
                  "Successfully",
                  "The task has been successfully deleted."
                );
              },
              style: "danger",
              icon: "map",
            },
            { label: "More information", onPress: () => {}, icon: "info" },
            { label: "Open map", onPress: () => {}, icon: "map-pin" },
          ],
          [
            {
              label: "Close",
              onPress: () => {
                setshowMenu(false);
              },
              icon: "close",
            },
          ],
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
