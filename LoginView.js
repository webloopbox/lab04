import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";

export const LoginView = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  const handleLogin = () => {
    if (login === password) {
      navigation.navigate("AuthView");
    } else {
      Alert.alert("Invalid login or password");
    }
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontSize: 24, fontWeight: "bold" }}>Login Screen</Text>
      <TextInput
        style={{
          paddingLeft: 10,
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
          paddingLeft: 10,
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
