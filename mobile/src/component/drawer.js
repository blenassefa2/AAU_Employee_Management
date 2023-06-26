import * as React from "react";
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import {
  selectCurrentToken,
  selectCurrentUser,
} from "../redux/slices/auth/authSlice";
import { useSelector } from "react-redux";
import { pressHandler } from "../utils/utils";

export function CustomDrawerContent(props) {
  const user = useSelector(selectCurrentUser);
  const token = useSelector(selectCurrentToken);
  const { Welcome, Login, Home, MyProfile, Appeal } = props;
  return (
    <DrawerContentScrollView>
      <DrawerItem label={`${token}`} />
      <DrawerItem
        label="Welcome"
        onPress={() => pressHandler("Welcome", navigation)}
      />
      <DrawerItem
        label="Close drawer"
        onPress={() => props.navigation.closeDrawer()}
      />
      <DrawerItem
        label="Toggle drawer"
        onPress={() => props.navigation.toggleDrawer()}
      />
    </DrawerContentScrollView>
  );
}
