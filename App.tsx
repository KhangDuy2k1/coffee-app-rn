import { View, StyleSheet } from "react-native";
import { MainStack } from "./src/stack";
import { Provider } from "react-redux";
import { store } from "./src/commons/redux/stores";

export default function App() {
  return (
    <Provider store={store}>
       <MainStack/>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
