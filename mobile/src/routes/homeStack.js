import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import Welcome from "../screens/welcome.screen";
import Login from "../screens/login.screen";
const screens = {
  Welcome: {
    screen: Welcome,
    navigationOptions: {
      headerShown: false,
    },
  },
  Login: {
    screen: Login,
    navigationOptions: {
      headerShown: false,
    },
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
