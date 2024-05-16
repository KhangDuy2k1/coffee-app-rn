import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
import IconFeather from "react-native-vector-icons/Feather";
import IconEntypo from "react-native-vector-icons/Entypo";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { setIdAddress, setInfoOrder, setVisibleSelectMethod } from "../../../commons/redux/slices/order";
export const AddressItem = ({data}) => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const handle = () => { 
        
      dispatch(setIdAddress(data._id));
      dispatch(setInfoOrder({
        address: data.address,
        phonenumber: data.phonenumber
      }))
      dispatch(setVisibleSelectMethod(true))
      navigation.navigate("sản phẩm")
    } 
    return (
      <TouchableOpacity onPress={handle}> 
        <View style = {styles.container}> 
            <View style = {styles.wrapInfo}>
                <IconEntypo style = {styles.icon} name="location"/>
                <Text style = {styles.text} numberOfLines={1}>{data.address}</Text>
            </View>
            <View style = {styles.wrapInfo}>
                <IconFeather style = {styles.icon} name="phone"/>
                <Text style = {styles.text}>{data.phonenumber}</Text>
            </View>
        </View>
      </TouchableOpacity>
        
    )
}
const styles = StyleSheet.create({
    container: {
        borderBottomWidth: 1,
        borderBottomColor: "#ffecb3",
        borderRadius: 10,
        padding: 20,
        display: "flex",
        justifyContent: "center", 
        width: 300,
        marginTop: 25,
        height: 80
    },
    wrapInfo: { 
        marginTop: 10,
        display: "flex",
        flexDirection: "row",
        alignItems: "center"
    },
    icon: { 
        color: "#e6ac00",
        fontSize: 25
    },
    text: { 
        marginLeft: 10,
        fontSize: 20
    }
})