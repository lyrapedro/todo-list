import React, { useState } from "react";
import {
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  View,
  FlatList,
  Alert,
} from "react-native";
import uuid from "react-native-uuid";
import { styles } from "./styles";
import { Task } from "../../components/Task";

type Task = {
  id: string;
  name: string;
  done: boolean;
};

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [taskName, setTaskName] = useState("");
  const [taskDone, setTaskDone] = useState(false);

  function handleTaskAdd() {
    if (tasks?.some((element) => element.name == taskName)) {
      return Alert.alert(
        "Assinatura existe",
        "Já existe uma assinatura com esse nome"
      );
    }

    setTasks((prevState) => [
      ...prevState,
      { id: uuid.v4().toString(), name: taskName, done: taskDone },
    ]);
    setTaskName("");
    setTaskDone(false);
  }

  function handleTaskRemove(taskId: string, taskName: string) {
    Alert.alert("Remover", `Deseja remover a tarefa ${taskName}?`, [
      {
        text: "Sim",
        onPress: () =>
          setTasks((prevState) =>
            prevState.filter((element) => element.id !== taskId)
          ),
      },
      {
        text: "Cancelar",
        style: "cancel",
      },
    ]);
  }

  function handleTaskDone(taskId: string) {
    const newTasksState = tasks.map((obj) => {
      if (obj.id == taskId) {
        const newValue = !obj.done;
        return { ...obj, done: newValue };
      }
      return obj;
    });

    setTasks(newTasksState);
  }

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
            onChangeText={setTaskName}
            value={taskName}
          />

          <TouchableOpacity style={styles.button} onPress={handleTaskAdd}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.list}>
        <View style={styles.container}>
          <View style={styles.statusRow}>
            <Text style={styles.createdText}>Criadas</Text>
            <Text style={styles.doneText}>Concluídas</Text>
          </View>
          <View style={styles.tasks}>
            <FlatList
              data={tasks}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <Task
                  key={item.id}
                  name={item.name}
                  onChange={() => handleTaskDone(item.id)}
                  onRemove={() => handleTaskRemove(item.id, item.name)}
                />
              )}
              showsVerticalScrollIndicator={false}
              ListEmptyComponent={() => (
                <View style={styles.listEmptyComponent}>
                  <Image
                    source={require("../../assets/images/empty.png")}
                    style={styles.imgEmpty}
                  />
                  <Text style={styles.listEmptyText}>
                    Você ainda não tem tarefas cadastradas
                  </Text>
                  <Text style={styles.listEmptyText2}>
                    Crie tarefas e organize seus itens a fazer
                  </Text>
                </View>
              )}
            />
          </View>
        </View>
      </View>
    </View>
  );
}
