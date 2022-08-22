import { StyleSheet } from "react-native";

export const styles =   StyleSheet.create({
  task: {
    marginTop: 10,
    border: 10,
    backgroundColor: "#333333",
    borderWidth: 0,
    flex: 1,
    flexDirection: "row",
    width: 272,
    borderRadius: 10,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    minHeight: 60
  },
  checkbox: {
    marginLeft: 10
  },
  taskText: {
    color: "#FFF",
    flex: 1
  }
})