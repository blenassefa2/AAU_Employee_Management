import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Welcome from "../screens/welcome.screen";
import Login from "../screens/login.screen";
import Home from "../screens/home.screen";
import MyProfile from "../screens/myProfiles.screen";
import Appeal from "../screens/appeal.screen";
import { CustomDrawerContent } from "../component/drawer";
const Drawer = createDrawerNavigator();

export default function MyDrawer() {
  return (
    <Drawer.Navigator
      useLegacyImplementation
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen
        name="Welcome"
        component={Welcome}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      ></Drawer.Screen>

      <Drawer.Screen
        name="MyProfile"
        component={MyProfile}
        options={{
          headerShown: false,
        }}
      />

      <Drawer.Screen
        name="Appeal"
        component={Appeal}
        options={{ headerShown: false }}
      ></Drawer.Screen>
    </Drawer.Navigator>
  );
}
