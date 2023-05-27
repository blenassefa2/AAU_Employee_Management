import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
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
  formContainer: {
    marginTop: 120,
    alignItems: "center",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#D9D9D9",
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 10,
    resizeMode: "contain",
    backgroundColor: "#D9D9D9",
  },
  input: {
    flex: 1,
    fontSize: 18,
  },
  button: {
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
