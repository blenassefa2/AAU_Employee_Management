import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import Icon from "react-native-vector-icons/FontAwesome";
import { useGetClockNumberQuery } from "../redux/api";

const Home = ({ navigation }) => {
  const { data, isLoading, isError, error } = useGetClockNumberQuery();

  const openDrawer = () => {
    navigation.openDrawer();
  };
  let showNotificationDot = false;
  if (!isLoading && !isError) showNotificationDot = data.data.length > 0;
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={openDrawer} style={styles.burgerIcon}>
        <Icon name="bars" size={24} color="black" />
      </TouchableOpacity>
      <View style={styles.logoContainer}>
        <Image source={require("../assets/AAULogo.png")} style={styles.logo} />
      </View>
      <TouchableOpacity style={styles.bellIcon}>
        <Icon name="bell" size={24} color="black" />
        {showNotificationDot && <View style={styles.notificationDot} />}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#3B7CBD",
    paddingHorizontal: 15,
    height: 60,
  },
  burgerIcon: {
    padding: 10,
  },
  logoContainer: {
    flex: 1,
    alignItems: "center",
  },
  logo: {
    width: 30,
    height: 30,
    resizeMode: "contain",
  },
  bellIcon: {
    padding: 10,
    position: "relative",
  },
  notificationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "red",
    position: "absolute",
    top: 10,
    right: 5,
  },
});

export default Home;
