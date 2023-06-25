import * as React from "react";
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import { TouchableOpacity, View, Text } from "react-native";
import tw from "tailwind-react-native-classnames";

export function CustomDrawerContent(props) {
  const [isButtonPressed, setButtonPressed] = React.useState(false);

  const handleButtonPress = () => {
    setButtonPressed(true);
    // Additional logic for button press event
  };

  const handleButtonRelease = () => {
    setButtonPressed(false);
    // Additional logic for button release event
  };

  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <TouchableOpacity
        onPress={handleButtonPress}
        onPressOut={handleButtonRelease}
        activeOpacity={0.8}
      >
        <Text style={tw`text-base font-bold`}>Close drawer</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={handleButtonPress}
        onPressOut={handleButtonRelease}
        activeOpacity={0.8}
      >
        <Text style={tw`text-base font-bold`}>Toggle drawer</Text>
      </TouchableOpacity>
    </DrawerContentScrollView>
  );
}
