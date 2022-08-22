import { View, Text, TouchableOpacity } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { styles } from "./styles";
import { Trash } from "phosphor-react-native";

type Props = {
  name: string;
  onChange: () => void;
  onRemove: () => void;
};

export function Task({ name, onChange, onRemove }: Props) {
  
  return (
    <View style={styles.task}>
      <View style={styles.container}>
        <BouncyCheckbox
          onPress={onChange}
          size={20}
          fillColor="#5E60CE"
          iconStyle={{ borderColor: "red" }}
          style={styles.checkbox}
        />
        <Text style={styles.taskText}>{name}</Text>
        <TouchableOpacity onPress={onRemove}>
          <Trash size={20} color="#808080" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
