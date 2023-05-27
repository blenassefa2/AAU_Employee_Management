import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

const HomePage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require("../assets/AAULogo.png")} style={styles.logo} />
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Human resources</Text>
        <Text style={styles.subtitle}>Management system</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/homepagePic.png")}
          style={styles.image}
        />
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
  header: {
    position: "absolute",
    top: 10,
    left: 10,
  },
  logo: {
    width: 50,
    height: 50,
    resizeMode: "contain",
  },
  titleContainer: {
    marginTop: 150,
    alignSelf: "flex-start",
    marginLeft: 20,
  },
  title: {
    fontSize: 30,
    color: "#3B7CBD",
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 18,
    color: "black",
  },
  imageContainer: {
    marginTop: 20,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: "contain",
  },
  button: {
    marginTop: 20,
    backgroundColor: "#3B7CBD",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
  },
});

export default HomePage;
