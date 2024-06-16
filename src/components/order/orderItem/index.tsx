import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native"
import { formatMoney } from "../../../commons/helpers/func"
import { useNavigation } from "@react-navigation/native"
export const OrderItem = ({order}) => { 
    const navigation = useNavigation();
    const handleGetOrder = () => { 
        console.log("onClick");
        navigation.navigate("orderDetail", {id_order: order._id});
    }
    return (    
        <TouchableOpacity onPress={handleGetOrder}> 
        <View style = {styles.container}> 
            <Image style = {styles.image} source={{uri: order.coffeeItem_id.image}}/>
            <View style = {styles.content}>
                <Text numberOfLines={1} style = {[styles.text, styles.name]}>Tên sản phẩm: {order.coffeeItem_id.name}</Text>
                <Text style = {styles.text}>Số lượng: {order.quantity}</Text>
                <Text style = {styles.text}>Tổng số tiền: {formatMoney(order.total)} VNĐ</Text>
                <Text style = {
                  order.status === "đã đặt hàng"  
                  ? [styles.ordered, styles.text] 
                  : order.status === "đã thanh toán" || order.status === "đã nhận hàng" ? [styles.text, styles.paid] : [styles.text, styles.cancle] 
                }>{order.status}</Text>
            </View>
        </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({ 
    container: {
        borderRadius: 20,
        padding: 10,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 20,
        backgroundColor: "#ffe6cc",
        width: 350,
        height: 150
    },
    image: { 
        borderRadius: 20,
        width: 80,
        height: 80
    },
    content : {
        height: "100%",
        justifyContent: "space-around",
        display: "flex",
        width: "70%"
    },
    text: {
        
        fontSize: 20
    },
    ordered: {
        fontStyle: "italic",
        color: "#3333cc"
    },
    name: {
        fontWeight: "600"
    },
    paid: {
        fontStyle: "italic",
        color: "green"
    },
    cancle: {
        fontStyle: "italic",
        color: "red"
    }
})