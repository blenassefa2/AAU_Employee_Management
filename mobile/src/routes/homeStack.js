import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import Home from "../screens/home.screen";
import Login from "../screens/login.screen";
const screens = {
  Home: {
    screen: Home,
    navigationOptions: {
      headerShown: false,
    },
  },
  Login: {
    screen: Login,
  },
};

const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: "#3B7CBD",
    },
  },
});

export default createAppContainer(HomeStack);
