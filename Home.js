import { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";
import axiosInstance from "./axiosInstance";

export const Home = () => {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");

  const handleSubmit = async () => {
    try {
      const id = uuidv4();
      await axiosInstance.post(
        "/products",
        { id: id, product: name, quantity: quantity },
        {
          headers: {
            Accept: "application/json",
          },
        }
      );
    } catch (e) {
      console.error("Error while submitting:", e);
    }
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View>
        <Text>Nazwa produktu:</Text>
        <TextInput
          style={{
            height: 40,
            width: 200,
            margin: 10,
            paddingLeft: 10,
            borderColor: "gray",
            borderWidth: 1,
          }}
          placeholder="Nazwa"
          onChangeText={(n) => setName(n)}
          value={name}
        />
      </View>
      <View>
        <Text>Ilość:</Text>
        <TextInput
          style={{
            height: 40,
            width: 200,
            margin: 10,
            paddingLeft: 10,
            borderColor: "gray",
            borderWidth: 1,
          }}
          placeholder="Ilość"
          onChangeText={(n) => setQuantity(n)}
          value={quantity}
        />
      </View>
      <Button onPress={() => handleSubmit()} title="zatwierdź" />
    </View>
  );
};
