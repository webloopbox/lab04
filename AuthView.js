import { createDrawerNavigator } from "@react-navigation/drawer";
import { ListView } from "./ListView";
import { Home } from "./Home";

const Drawer = createDrawerNavigator();

export const AuthView = () => {
  return (
    <Drawer.Navigator initialRouteName="Profile">
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Setup Profile" component={ListView} />
    </Drawer.Navigator>
  );
};
