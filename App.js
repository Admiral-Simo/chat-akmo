import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import store from "./state/store";
import { Provider } from "react-redux";

import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./state/slices/counterSlice";

const Stack = createNativeStackNavigator();

function Test() {
  const count = useSelector(state => state.counter.value)
  const dispatch = useDispatch();
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-red-500">{count}</Text>
      <Button title='+' onPress={() => dispatch(increment())}/>
      <Button title='-' onPress={() => dispatch(decrement())}/>
      <StatusBar style="auto" />
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator>
          <Stack.Screen name="Test" component={Test} />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
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
