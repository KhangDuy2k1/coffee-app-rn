import { View, ScrollView, StyleSheet, FlatList, SafeAreaView } from "react-native";
import { useSelector } from "react-redux";
import { ProductItem } from "../../product/productItem";
import { useEffect, useState } from "react";
import { getAllProducts } from "../../../apis/product";

export const ProductList = ({navigation}) => { 
    const [listProduct, setListProduct] = useState<any[]>([]);
    const [listSearch, setListSearch] = useState<any[]>([])
    const text = useSelector((state: any) => state.product.textSearch)
    const searchProduct = (products: any[], text: string): any[] => { 
        return products.filter((product) => { 
            return product.name.toLowerCase().includes(text.toLowerCase());
        })
    }
    useEffect(() => {
        const newProductsList = searchProduct(listProduct, text);
        console.log(newProductsList)
        setListSearch(newProductsList);
    }, [text])

    useEffect(() => {
    async function getAllProductsFn(){
        try {
            const res = await getAllProducts();
            setListProduct(res["allCoffee"])
        } catch (error: any) {
            navigation.navigate("home")
            alert(error.response?.data?.message)

        }
    }
    getAllProductsFn()
}, [])
    return (

        <SafeAreaView style = {styles.container}>
            <FlatList
                showsVerticalScrollIndicator = {false}
                data={!text ? listProduct : listSearch}
                keyExtractor={(item, index) => item._id}
                renderItem={({item}) => <ProductItem product={item} page = "home"/>}
            />
        </SafeAreaView>
        
    );
}
const styles = StyleSheet.create({
    container: {
        alignItems: 'center', 
        justifyContent: 'center',
        marginTop: 20,
    },
});