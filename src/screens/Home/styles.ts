import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  body: {
    backgroundColor: "#0D0D0D",
  },
  container: {
    paddingLeft: 24,
    paddingRight: 24,
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
    alignItems: "center",
    position: "relative",
    top: 25,
    zIndex: 14444
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
  statusRow: {
    width: "100%",
    flexDirection: "row",
    position: "relative",
    paddingTop: 80,
  },
  createdText: {
    color: "#4EA8DE",
    fontWeight: "bold",
  },
  doneText: {
    color: "#5E60CE",
    position: "absolute",
    right: 0,
    bottom: 0,
    fontWeight: "bold",
  },
  list: {
    height: "100%",
    width: "100%",
    backgroundColor: "#333333",
    zIndex: -1
  },
  tasks: {
    borderTopColor: "#808080",
    borderTopWidth: 1,
  },
  listEmptyComponent: {
    alignContent: "center",
    justifyContent: "center",
  },
  imgEmpty: {
    height: 58,
    width: 58,
  },
  listEmptyText: {

  }
})