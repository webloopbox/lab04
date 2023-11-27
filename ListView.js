import React, { useState, useEffect } from "react";
import { View, Text, FlatList, Button, TextInput } from "react-native";
import axiosInstance from "./axiosInstance";

export const ListView = () => {
  const [data, setData] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [modifiedProduct, setModifiedProduct] = useState("");
  const [modifiedQuantity, setModifiedQuantity] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get("/products");
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axiosInstance.delete(`/products/${id}`);
      setData((prevData) => prevData.filter((item) => item.id !== id));
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  const handleModify = async (id, item) => {
    try {
      const updatedData = {
        product: modifiedProduct || item.product,
        quantity: modifiedQuantity || item.quantity,
      };

      await axiosInstance.put(`/products/${id}`, updatedData);

      setData((prevData) =>
        prevData.map((item) =>
          item.id === id ? { ...item, ...updatedData } : item
        )
      );

      setEditingId(null);
      setModifiedProduct("");
      setModifiedQuantity("");
    } catch (error) {
      console.error("Error modifying item:", error);
    }
  };

  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            {editingId === item.id ? (
              <View>
                <TextInput
                  placeholder="Modified Product"
                  value={modifiedProduct || item.product}
                  onChangeText={(text) => setModifiedProduct(text)}
                />
                <TextInput
                  placeholder="Modified Quantity"
                  value={modifiedQuantity || item.quantity}
                  onChangeText={(text) => setModifiedQuantity(text)}
                />
                <Button
                  onPress={() => handleModify(item.id, item)}
                  title="Modify"
                />
              </View>
            ) : (
              <View>
                <Text>{item.product}</Text>
                <Text>{item.quantity}</Text>
                <Button onPress={() => handleDelete(item.id)} title="Delete" />
                <Button onPress={() => setEditingId(item.id)} title="Edit" />
              </View>
            )}
          </View>
        )}
      />
    </View>
  );
};
