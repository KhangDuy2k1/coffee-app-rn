import { View, ScrollView, StyleSheet, FlatList, SafeAreaView } from "react-native";
import { useSelector } from "react-redux";
import { ProductItem } from "../../product/productItem";
import { useEffect, useState } from "react";
import { getAllProducts } from "../../../apis/product";
import { getInfoUserLogin } from "../../../apis/get-info-user-login";
export const ProductList = () => { 
    const [listProduct, setListProduct] = useState<any[]>([]);
    const [listSearch, setListSearch] = useState<any[]>([])
    const [listIdCoffeeLiked, setListIdCoffeeLiked] = useState<any[]>([]) 
    const text = useSelector((state: any) => state.product.textSearch)
    const searchProduct = (products: any[], text: string): any[] => { 
        return products.filter((product) => { 
            return product.name.toLowerCase().includes(text.toLowerCase());
        })
    }
    useEffect(() => { 
        async function getCoffeeLiked() { 
          try {
            const userInfo = await getInfoUserLogin();
            setListIdCoffeeLiked(userInfo["user"]["likedCoffeeItem"]);
          } catch (error) {
            console.log(error);
          }
         
        }
        async function getAllProductsFn(){
            try {
                const res = await getAllProducts();
                setListProduct(res["allCoffee"])
            } catch (error: any) {
                alert(error.response?.data?.message)
    
            }
        }
        getCoffeeLiked()
        getAllProductsFn()
    },[])

    useEffect(() => {
        const newProductsList = searchProduct(listProduct, text);
        setListSearch(newProductsList);
    }, [text])
    return (

        <SafeAreaView style = {styles.container}> 
            <FlatList
                showsVerticalScrollIndicator = {false}
                data={!text.length ? listProduct : listSearch}
                keyExtractor={(item, index) => item._id}
                renderItem=
                {({item}) => 
                <ProductItem
                listCoffeeLiked = {listIdCoffeeLiked}
                product={item}
                page = "home"/>
                }
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