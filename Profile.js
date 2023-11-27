import { Button, Text, TextInput, View } from "react-native";
import { useGlobalContext } from "./hooks/useGlobalContext";
import { useState } from "react";

export const Profile = () => {
  const { username } = useGlobalContext();
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (login === password) {
      navigation.navigate("Home");
    } else {
      Alert.alert("Invalid login or password");
    }
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontSize: 24, fontWeight: "bold" }}>Login Screen</Text>
      <TextInput
        style={{
          height: 40,
          width: 200,
          margin: 10,
          borderColor: "gray",
          borderWidth: 1,
        }}
        placeholder="Enter login"
        onChangeText={(text) => setLogin(text)}
        value={login}
      />
      <TextInput
        style={{
          height: 40,
          width: 200,
          margin: 10,
          borderColor: "gray",
          borderWidth: 1,
        }}
        placeholder="Enter password"
        onChangeText={(text) => setPassword(text)}
        value={password}
        secureTextEntry={true}
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};
