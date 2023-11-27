import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import {
  GlobalContextProvider,
  useGlobalContext,
} from "./hooks/useGlobalContext";
import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LoginView } from "./LoginView";
import { AuthView } from "./AuthView";

const Stack = createNativeStackNavigator();

export default function App() {
  const { username, setUserName } = useGlobalContext();

  return (
    <GlobalContextProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{}}>
          <Stack.Screen
            name="Login"
            component={LoginView}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="AuthView"
            component={AuthView}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
        <StatusBar style="auto" />
      </NavigationContainer>
    </GlobalContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
