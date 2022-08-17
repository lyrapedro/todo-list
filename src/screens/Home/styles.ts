import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: "#0D0D0D",
  },
  container: {
    padding: 24,
  },
  logoTo: {
    marginLeft: 10,
    fontSize: 32,
    color: "#4EA8DE",
    fontWeight: "900"
  },
  logoDo: {
    fontSize: 32,
    color: "#5E60CE",
    fontWeight: "900",
  },
  logo: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 48
  },
  form : {
    width: "100%",
    flexDirection: "row",
    marginTop: 36,
    marginBottom: 42
  },
  taskInput: {
    flex: 1,
    backgroundColor: "#262626",
    borderRadius: 5,
    height: 48,
    color: "#FFF",
    padding: 16,
    fontSize: 16,
    marginRight: 12,
    width: 100
  },
  button: {
    width: 48,
    height: 48,
    borderRadius: 5,
    backgroundColor: "#1E6F9F",
    alignItems: "center",
    justifyContent: "center"
  },
  buttonText: {
    color: "#fff",
    fontSize: 20,
  },
  list: {
    height: "100%",
    width: "100%",
    backgroundColor: "#333333"
  }
})