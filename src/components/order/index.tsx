import { View, Text, StyleSheet, FlatList, ScrollView } from "react-native"
import { OrderItem } from "./orderItem"
import { useEffect, useState } from "react"
import { getListOrders } from "../../apis/list-order";
export const Order = () => { 
    const [listOrders, setListOrders] = useState<any[]>([]);
    useEffect(() => { 
        async function getListOrdersUser() { 
            try {
                const response = await getListOrders();
                setListOrders(response.allOrders);
            } catch (error) {
                console.log(error);
            }
        }
        getListOrdersUser()
    }, [])
    return (
        <View style = {styles.container}>
            <ScrollView
            showsVerticalScrollIndicator = {false}
            >
                {listOrders.map((data, index) => {
                    return <OrderItem key={index} order = {data}/>
                })}
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    container: { 
        height: "100%",
        backgroundColor: "#fff",
        display: "flex",
        alignItems: "center"
    }
})