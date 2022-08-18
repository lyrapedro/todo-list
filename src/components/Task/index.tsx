import { View } from "react-native";

type Props = {
  name: string;
  done: boolean;
  onRemove: () => void;
}

export function Task({ name, done }: Props) {
  return (
    <View></View>
  )
}