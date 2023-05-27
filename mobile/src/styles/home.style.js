import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
  header: {
    position: "absolute",
    top: 30,
    left: 30,
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
  titleContainer: {
    marginTop: 120,
    alignSelf: "flex-start",
    marginLeft: 40,
  },
  title: {
    fontSize: 40,
    color: "#3B7CBD",
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 24,
    color: "black",
  },
  imageContainer: {
    marginTop: 40,
  },
  image: {
    width: 350,
    height: 350,
    resizeMode: "contain",
  },
  button: {
    marginTop: 40,
    backgroundColor: "#3B7CBD",
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 24,
  },
});
