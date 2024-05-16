import { View, Text, FlatList, StyleSheet, SafeAreaView } from "react-native";
import { ProductItem } from "../product/productItem";
import { useEffect, useState } from "react";
import { getCoffeeLiked } from "../../apis/get-coffee-liked";
type ResType = {
    mes: string,
    coffeesLiked: any[],
    success: boolean
}
export function Favourite(){ 
    const [listCoffeeLiked, setListCoffeeLiked] = useState<any[]>([]);
    useEffect(() => { 
        async function handleCoffeeLiked() {
            try {
                const res: ResType = await getCoffeeLiked();
                setListCoffeeLiked(res.coffeesLiked);
            } catch (error: any) {
                alert(error.response.data.message)
            }
        }
        handleCoffeeLiked()
    }, [])
    return (
        <SafeAreaView style = {styles.container}>
            <View>
                <Text 
                style = {styles.favouriteTitle}
                >Danh sách sản phẩm bạn đã thích</Text>
            </View>
            <FlatList
                showsVerticalScrollIndicator = {false}
                data={listCoffeeLiked}
                keyExtractor={(item, index) => item._id}
                renderItem={({item}) => <ProductItem product={item} page = "favourite"/>}
            />
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        height: "100%",
        backgroundColor: "#fff2cc",
        alignItems: 'center', 
        justifyContent: 'center',
    },
    favouriteTitle: {
        marginTop: 10, 
        fontSize: 20,
        fontWeight: "800"
    }
});