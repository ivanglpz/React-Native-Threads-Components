import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Menu } from "./components/Menu";
export default function App() {
  const [showMenu, setshowMenu] = useState(false);
  const [showMenu2, setshowMenu2] = useState(false);
  const [showMenu3, setshowMenu3] = useState(false);

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
      <TouchableOpacity
        onPress={() => {
          setshowMenu2(true);
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
          Open menu 2
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          setshowMenu3(true);
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
          Open menu 3
        </Text>
      </TouchableOpacity>
      <Menu
        isOpen={showMenu2}
        onClose={() => {
          setshowMenu2(false);
        }}
        options={[
          { label: "Home", onPress: () => {}, icon: "home" },
          {
            label: "Tasks",
            onPress: () => {},
            icon: "tasks",
          },
          { label: "Calendar", onPress: () => {}, icon: "calendar" },
          { label: "Settings", onPress: () => {}, icon: "gear" },
          { label: "Profile", onPress: () => {}, icon: "user" },
          {
            label: "Delete Account",
            onPress: () => {},
            icon: "remove",
            style: "danger",
          },
        ]}
      />
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
            { label: "Home", onPress: () => {}, icon: "home" },
            {
              label: "Tasks",
              onPress: () => {},
              icon: "tasks",
            },
            { label: "Calendar", onPress: () => {}, icon: "calendar" },
            { label: "Settings", onPress: () => {}, icon: "gear" },
            { label: "Profile", onPress: () => {}, icon: "user" },
            {
              label: "Delete Account",
              onPress: () => {},
              icon: "remove",
              style: "danger",
            },
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
      <Menu
        isOpen={showMenu3}
        onClose={() => {
          setshowMenu3(false);
        }}
        options={[
          {
            label: "Close",
            onPress: () => {
              setshowMenu3(false);
            },
            icon: "close",
          },
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
