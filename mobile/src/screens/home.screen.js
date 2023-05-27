import React from "react";
import { View, Text, Image, TouchableOpacity, Pressable } from "react-native";
import { styles } from "../styles/home.style";
import { pressHandler } from "../utils/utils";
const Home = ({ navigation }) => {
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

      <TouchableOpacity
        style={styles.button}
        onPress={function handle() {
          pressHandler("Login", navigation);
        }}
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
