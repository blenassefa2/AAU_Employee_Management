import React from "react";

import { useGetUserQuery } from "../redux/slices/users/usersApiSlice";

import Layout from "../component/layout/layout.component";
import HomeScreenBody from "../component/homeBody";

const Home = ({ navigation }) => {
  // const { token } = route.params;

  const { data, isLoading, isError, isSuccess, error } = useGetUserQuery();

  if (isSuccess) {
    return (
      <Layout
        navigation={navigation}
        bodyElement={<HomeScreenBody data={data} />}
      />
    );
  }
};

export default Home;
