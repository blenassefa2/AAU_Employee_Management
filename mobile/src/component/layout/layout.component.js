import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

import Icon from "react-native-vector-icons/FontAwesome";
import { useMyNotificationQuery } from "../../redux/slices/users/usersApiSlice";
import { styles } from "../../styles/component/layout.style";

const Layout = ({ navigation, bodyElement }) => {
  const { data, isLoading, isSuccess, isError, error } =
    useMyNotificationQuery();

  let showNotificationDot = false;
  if (!isLoading && !isError) showNotificationDot = data.data.length > 0;
  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => navigation.openDrawer()}
          style={styles.burgerIcon}
        >
          <Icon name="bars" size={24} color="black" />
        </TouchableOpacity>
        <View style={styles.logoContainer}>
          <Image
            source={require("../../assets/AAULogo.png")}
            style={styles.logo}
          />
        </View>
        <TouchableOpacity style={styles.bellIcon}>
          <Icon name="bell" size={24} color="black" />
          {showNotificationDot && <View style={styles.notificationDot} />}
        </TouchableOpacity>
      </View>

      {bodyElement}
    </>
  );
};

export default Layout;
