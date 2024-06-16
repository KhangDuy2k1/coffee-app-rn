import { BottomSheet } from "@rneui/themed";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { selectOrder, setVisibleSelectMethod } from "../commons/redux/slices/order";
import IconEntypo from "react-native-vector-icons/Entypo";
import IconFeather from "react-native-vector-icons/Feather"
import { useNavigation } from "@react-navigation/native";
import { orderApi } from "../apis/order";
export const BottomSheetSelect = ({dataOrder}) => { 
    const navigations = useNavigation();
    const dispatch = useDispatch();
    const order = useSelector(selectOrder);
    const data: {
        coffeeItem_id: any,
        id_address: any,
        quantity: number,
        total: number
    } = {
        coffeeItem_id: dataOrder.product._id,
        id_address: order.idAddress,
        quantity: dataOrder.quantity,
        total: dataOrder.product.price * dataOrder.quantity
    }
    const handleSelectPayDirectly = async() => {
        
        try {
           await orderApi(data, 0); 
           alert("Đặt hàng thành công");
        } catch (error: any) {
           alert(
           error.response.data.message === "bạn chưa nhập số lượng" 
           ? "bạn chưa nhập số lượng"
           : "bạn chưa có số điện thoại và địa chỉ nhận hàng"
           );
        }
        dispatch(setVisibleSelectMethod(false));
    }

    const handleSelectPayOnline = async() => {
        try {
            const res = await orderApi(data, 1)
            alert(res.mes);
        } catch (error: any) {
            alert(error.response?.data?.message);
        }
        dispatch(setVisibleSelectMethod(false))
    }

    const handleSelectAddress = () => { 
        navigations.navigate("addressList");
        dispatch(setVisibleSelectMethod(false))
    }

    return (
        <BottomSheet isVisible = {order.visibleSelectMethod}>
            <View style = {{
                padding: 40,
                backgroundColor: "#fff",
                width: "100%",
                height: 400
            }}>
                
                <Text style = {{fontSize: 25, marginBottom: 10}}>Chọn phương thức thanh toán</Text>
                <TouchableOpacity onPress={handleSelectPayDirectly}>
                    <View style = {{
                    display: "flex", justifyContent: "center", padding: 10 ,backgroundColor: "#ff8c1a", height: 40, borderRadius: 10}}>
                    <Text style = {{fontSize: 20, color: "#fff" }}>
                        Thanh toán khi nhận hàng
                    </Text>
                </View>
                </TouchableOpacity>
               
                <TouchableOpacity onPress={handleSelectPayOnline}>
                <View style = {{
                   display: "flex", marginTop: 20, justifyContent: "center", padding: 10 ,backgroundColor: "#ff8c1a", height: 40, borderRadius: 10}}
                >
                    <Text style = {{fontSize: 20, color: "#fff" }}>
                        Thanh toán online
                    </Text>
                </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={handleSelectAddress}>
                <View style = {{marginTop: 20}}>
                    <Text style = {{
                        fontSize: 20
                    }}>Địa chỉ nhận hàng</Text>
                    <View style = {{display: "flex", flexDirection: "row", alignItems: "center"}}>
                        <IconEntypo 
                        style = {{
                        fontSize: 20
                        }} 
                        name="location"
                        />
                        {
                            order.address 
                            ?<Text numberOfLines={1} style = {{marginLeft: 10, fontSize: 20}}>
                            {order.address}
                            </Text>
                            : 
                            <Text style = {{marginLeft: 10, fontSize: 20, opacity: 0.4, fontStyle: "italic"}}>Chưa có địa chỉ nhận hàng</Text>
                        }
                        
                    </View>
                    <View style = {{display: "flex", flexDirection: "row", alignItems: "center", marginTop: 10}}>
                        <IconFeather style = {{fontSize: 20}} name="phone"/>
                        {order.phonenumber 
                        ? <Text style = {{ fontSize: 20, marginRight: 30, marginLeft: 10}}> {order.phonenumber}
                          </Text> 
                        : <Text style = {{marginLeft: 10, fontSize: 20, opacity: 0.4, fontStyle: "italic"}}>Chưa có số điện thoại</Text>
                        }
                    </View>
                </View>
                </TouchableOpacity>
            </View>
        </BottomSheet>
    )
}