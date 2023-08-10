import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { DetailsCurchScreen } from "../screens/DetailsCurchScreen";
import {AppRoutes} from "./app-tab.routes";

const Stack = createNativeStackNavigator();

export function AppStackRoutes() {
  return (
  <Stack.Navigator
  screenOptions={{ headerShown: false, headerLeft: undefined, gestureEnabled: false }}>
    <Stack.Screen component={AppRoutes} name="AppRoutes" />
    <Stack.Screen component={DetailsCurchScreen} name="DetailsCurchScreen" />
  </Stack.Navigator>
  )
}
