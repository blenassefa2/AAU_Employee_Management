import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const DrawerContent = ({ navigation }) => {
  const navigateToScreen = (screenName) => () => {
    navigation.navigate(screenName);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.drawerItem}
        onPress={navigateToScreen("Home")}
      >
        <Text style={styles.drawerItemText}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.drawerItem}
        onPress={navigateToScreen("Profile")}
      >
        <Text style={styles.drawerItemText}>Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.drawerItem}
        onPress={navigateToScreen("Settings")}
      >
        <Text style={styles.drawerItemText}>Settings</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    paddingHorizontal: 10,
  },
  drawerItem: {
    marginBottom: 10,
  },
  drawerItemText: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default DrawerContent;
