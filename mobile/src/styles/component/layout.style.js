import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#3B7CBD",
    paddingHorizontal: 15,
    height: 60,
  },
  burgerIcon: {
    padding: 10,
  },
  logoContainer: {
    flex: 1,
    alignItems: "center",
  },
  logo: {
    width: 55,
    height: 55,
    resizeMode: "contain",
  },
  bellIcon: {
    padding: 10,
    position: "relative",
  },
  notificationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "red",
    position: "absolute",
    top: 10,
    right: 5,
  },
});
