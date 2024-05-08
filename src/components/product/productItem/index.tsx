import {Text, View, StyleSheet, Image, TouchableOpacity} from "react-native";
import { useNavigation } from '@react-navigation/native';
import OctionsIcon from "react-native-vector-icons/Octicons"
import { Rating, AirbnbRating } from 'react-native-ratings';
import IconAnt from "react-native-vector-icons/AntDesign"
export const ProductItem = ({product, page} ) => { 
    const navigations = useNavigation();
    const handleNextProductScreen = () => {
        navigations.navigate('product')
    }
    return (
        <TouchableOpacity
        onPress={() => {
            navigations.navigate("product")
        }}
        >
        <View  
        style = {styles.wrapProducItem}>
             <Image 
             source={{uri: product.image}}
             style = {{
                width: 70,
                height: 70,
                borderRadius: 10
             }}
             />
             <View style = {styles.itemWrap}>
                <Text 
                style = {styles.nameProduct}
                >
                {product.name}
                </Text>
                <Text style = {styles.price}>
                    {product.price} VNĐ
                </Text>
                <Rating
                style = {styles.rating}
                ratingCount={5}
                imageSize={15}
                readonly = {true}
                startingValue = {product.stars}
                />
             </View>
           {
            page === "home" && <OctionsIcon 
            onPress={handleNextProductScreen}
            name="heart-fill"
            style = {styles.favoriteIcon}
            />
           }
           {
            page === "favourite" && 
            <IconAnt 
            name="pluscircleo"
            style= {styles.addIcon}
            />
           }
           {
            
           }
        </View>
        </TouchableOpacity>
        
    )
} 
const styles = StyleSheet.create({
    wrapProducItem: {
        display: "flex",
        flexDirection: "row",
        padding: 10,
        borderRadius: 20, 
        margin: 5,
        width: 350, 
        height: 90,
        backgroundColor: "#fff",
    },
    itemWrap: { 
        marginLeft: 20,
    },
    price: {
        marginTop: 5,
        opacity: 0.5,
        fontSize: 16
    },
    nameProduct: { 
        fontWeight: "600",
        fontSize: 20
    },
    rating: {
        marginTop: 12, 
        marginRight: 100
    },
    favoriteIcon : {
        marginTop: 20,
        marginLeft: 30,
        color: "#ffb84d",
        fontSize: 20
    },
    addIcon: { 
        marginLeft:30,
        fontSize: 20,
        marginTop: 25,
        color: "#ffa31a"
    }
})