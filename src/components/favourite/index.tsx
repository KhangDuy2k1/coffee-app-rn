import { View, Text, FlatList, StyleSheet, SafeAreaView } from "react-native";
import { ProductItem } from "../product/productItem";

export function Favourite(){ 
    const product = [
        {   
            id: 1,
            img: "https://product.hstatic.net/1000075078/product/1675355354_bg-tch-sua-da-no_4fbf208885ed464ab4b5e145336d42a2_large.jpg",
            name: "trà đào cam xả"
        },
        {
            id: 2,
            
            img: "https://product.hstatic.net/1000075078/product/1639377816_ca-phe-den-nong_2e0cb9233846467fbdcb76e99d2b7cac_large.jpg",
            name: "cà phê sữa đá"
        },
        {
            id: 3,
    
            img: "https://product.hstatic.net/1000075078/product/1709004168_vai-xuan-1_743d7966f0d54bccaa588389c17edb6c_large.jpg",
            name: "sữa chua vải thiều"
        },
        {
            id: 4,
    
            img: "https://product.hstatic.net/1000075078/product/1675355354_bg-tch-sua-da-no_4fbf208885ed464ab4b5e145336d42a2_large.jpg",
            name: "trà sữa chân trâu"
    
        },
        {
            id: 5,
    
            img: "https://product.hstatic.net/1000075078/product/1675355354_bg-tch-sua-da-no_4fbf208885ed464ab4b5e145336d42a2_large.jpg",
            name: "trà đào chanh đá"
        },
        {
            id: 6,
    
            img: "https://product.hstatic.net/1000075078/product/1675355354_bg-tch-sua-da-no_4fbf208885ed464ab4b5e145336d42a2_large.jpg",
            name: "trà đào chanh đá"
        },
        {
            id: 7,
    
            img: "https://product.hstatic.net/1000075078/product/1675355354_bg-tch-sua-da-no_4fbf208885ed464ab4b5e145336d42a2_large.jpg",
            name: "trà đào chanh đá"
        },{
            id: 8,
    
            img: "https://product.hstatic.net/1000075078/product/1675355354_bg-tch-sua-da-no_4fbf208885ed464ab4b5e145336d42a2_large.jpg",
            name: "trà đào chanh đá"
        },
        {
            id: 9,
    
            img: "https://product.hstatic.net/1000075078/product/1675355354_bg-tch-sua-da-no_4fbf208885ed464ab4b5e145336d42a2_large.jpg",
            name: "trà đào chanh đá"
        },{
            id: 10,
            img: "https://product.hstatic.net/1000075078/product/1675355354_bg-tch-sua-da-no_4fbf208885ed464ab4b5e145336d42a2_large.jpg",
            name: "trà đào chanh đá"
        },{
            id: 11,
    
            img: "https://product.hstatic.net/1000075078/product/1675355354_bg-tch-sua-da-no_4fbf208885ed464ab4b5e145336d42a2_large.jpg",
            name: "trà đào chanh đá"
        }
    
    ]
    return (
        <SafeAreaView style = {styles.container}>
            <View 
            style = {styles.favouriteWrap}>
                <Text 
                style = {styles.favouriteTitle}
                >Danh sách sản phẩm bạn đã thích</Text>
            </View>
            <FlatList
                showsVerticalScrollIndicator = {false}
                data={product}
                keyExtractor={(item, index) => item.id.toString()}
                renderItem={({item}) => <ProductItem product={item} page = "favourite"/>}
            />
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff2cc",
        alignItems: 'center', 
        justifyContent: 'center',
    },
    favouriteWrap : {
        backgroundColor: "#fff",
        width: "100%", 
        height: "6%",
    },
    favouriteTitle: {
        marginTop: 10, 
        fontSize: 20,
        fontWeight: "800"
    }

});