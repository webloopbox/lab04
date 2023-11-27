import { View } from "react-native";
import { useGlobalContext } from "./hooks/useGlobalContext";

export const ListView = () => {
  const { username, setUserName } = useGlobalContext();

  return <View></View>;
};
