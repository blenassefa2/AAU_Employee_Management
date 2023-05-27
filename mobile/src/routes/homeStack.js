import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import HomePage from "../screens/home.screen";

const screens = {
  Home: {
    screen: HomePage,
    headerTitle: () => <FirstDot />,
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
