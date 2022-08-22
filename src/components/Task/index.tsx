import { View, Text, TouchableOpacity } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { styles } from "./styles";
import { Trash } from "phosphor-react";

type Props = {
  name: string;
  done: boolean;
  onRemove: () => void;
}

export function Task({ name, done }: Props) {
  return (
    <View style={styles.task}>
      <BouncyCheckbox
        size={25}
        fillColor="#5E60CE"
        iconStyle={{ borderColor: "red" }} 
        style={styles.checkbox}
      />
      <Text style={styles.taskText}>{name}</Text>
      <TouchableOpacity>
        {/* <Trash size={32} /> */}
      </TouchableOpacity>
    </View>
  )
}