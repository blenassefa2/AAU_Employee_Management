import React from "react";
import { useState } from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import { styles } from "../styles/login.style";
import { useSelector, useDispatch } from "react-redux";
import { pressHandler } from "../utils/utils";
import { useLoginMutation } from "../redux/api/api";
import { onLogin } from "../redux/actions/loginAction";
const Login = ({ navigation }) => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <View
        style={styles.header}
        onTouchStart={function handle() {
          pressHandler("Welcome", navigation);
        }}
      >
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
            value={email}
            placeholderTextColor="#A9A9A9"
            onChange={(e) => setEmail(e.target.value)}
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
            value={password}
            placeholderTextColor="#A9A9A9"
            onChange={(e) => setPassword(e.target.value)}
            secureTextEntry
          />
        </View>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={function handle() {
          dispatch(onLogin({ email, password }));
          // login({ email, password })
          //   .unwrap()
          //   .then((data) => {
          //     // Handle successful login
          //     console.log(data);
          pressHandler("Home", navigation);
          //   })
          //   .catch((error) => {
          //     // Handle login error
          //     console.error(error);
          //   });
        }}
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
