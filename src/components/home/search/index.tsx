import { useState } from "react";
import { TextInput, View, StyleSheet } from "react-native";
import { setTextSearch } from "../../common/redux/slices";
import { UseDispatch, useDispatch } from "react-redux";
// import { useAppDispatch } from "../../common/redux/type";
import  Icon  from "react-native-vector-icons/Ionicons";
export function Search() {
  const dispatch = useDispatch();
  const handleOnChangeText = (text: string) => {
    dispatch(setTextSearch(text));
  };
  const [input, setInput] = useState("");

  return (
    <View style = {styles.containerSearch}>
      <TextInput
        placeholder="Nhập tên đồ uống"
        onChangeText={handleOnChangeText}
        style= {styles.inputSearch}
      />
      <Icon 
      name="search-outline"
      style = {styles.iconSearch}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  containerSearch: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center"
  },
  inputSearch: {
    marginTop: 10,
    borderColor: "#B8860B",
    borderWidth: 1,
    paddingLeft: 10,
    borderRadius: 30,
    width: "80%",
    height: 35,
  },
  iconSearch: {
    left: "82%",
    marginTop: 15,
    position: "absolute",
    fontSize: 25,
    color: "#e67300"
  }
})
