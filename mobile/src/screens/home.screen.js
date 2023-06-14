import React, { useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

import Icon from "react-native-vector-icons/FontAwesome";
import { useGetByAccountQuery, useGetClockNumberQuery } from "../redux/api/api";
import { styles } from "../styles/component/layout.style";
import Layout from "../component/layout/layout.component";
import HomeScreenBody from "../component/homeBody";

const Home = ({ navigation }) => {
  const [data, setData] = useState(null);
  // const { token } = route.params;

  const { data2, isLoading, isError, error } = useGetByAccountQuery();

  if (!isLoading && !isError) setData(data2);

  return (
    <Layout
      navigation={navigation}
      bodyElement={<HomeScreenBody data={data} />}
    />
  );
};

export default Home;
