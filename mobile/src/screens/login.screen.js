import React from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { styles } from "../styles/login.style";
const Login = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require("../assets/AAULogo.png")} style={styles.logo} />
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Human resources</Text>
        <Text style={styles.subtitle}>Management system</Text>
      </View>
      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <Image
            source={require("../assets/login/person-icon.png")}
            style={styles.icon}
          />
          <TextInput
            style={styles.input}
            placeholder="Username"
            placeholderTextColor="#A9A9A9"
          />
        </View>
        <View style={styles.inputContainer}>
          <Image
            source={require("../assets/login/pad-lock-icon.png")}
            style={styles.icon}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#A9A9A9"
            secureTextEntry
          />
        </View>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
