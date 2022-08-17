import React from "react";
import { Text, Image, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

export function Home() {
  return (
    <View style={styles.body}>
      <View style={styles.container}>
        <View style={styles.logo}>
          <Image source={require("../../assets/images/logo.png")} />
          <Text style={styles.logoTo}>to</Text>
          <Text style={styles.logoDo}>do</Text>
        </View>

        <View style={styles.form}>
          <TextInput
            style={styles.taskInput}
            placeholder="Insira uma tarefa"
            placeholderTextColor="#6B6B6B"
          />

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.list}></View>
    </View>
  );
}
