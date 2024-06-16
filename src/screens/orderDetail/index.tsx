import { View, Text } from "react-native"
import { OrderDetail } from "../../components/orderDetail";
export const OrderDetailScreen = ({route}) => { 
    return (
       <OrderDetail id_order = {route.params.id_order}/>
    )
}