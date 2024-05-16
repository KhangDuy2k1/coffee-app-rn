import {Text, View, StyleSheet, Image, TouchableOpacity} from "react-native";
import { useNavigation } from '@react-navigation/native';
import OctionsIcon from "react-native-vector-icons/Octicons"
import { Rating } from 'react-native-ratings';
import IconAnt from "react-native-vector-icons/AntDesign"
import { likeCoffee } from "../../../apis/like-coffee";
import { useState } from "react";
import { unLikeCoffee } from "../../../apis/unlike-coffee";
export const ProductItem = ({product, page, listCoffeeLiked} ) => { 
    const navigations = useNavigation();
    const [liked, setLiked] = useState<boolean>(false);
    const [unlike, setUnlike] = useState<boolean>(true);

    const checkCoffee = (): boolean => {
        return listCoffeeLiked.includes(product._id) || liked;
    }

    const checkCoffeeAreadyLiked = (error: any): boolean => {
        return error.response.data.message === "coffee aready liked";
    }

    const handleNextProductScreen = async(): Promise<any> => {
        try {
            await likeCoffee(product._id);
            setLiked(true);  
        } catch (error: any) {
            if(checkCoffeeAreadyLiked(error)) {
                try {
                    await unLikeCoffee(product._id);
                    setUnlike(false);
                } catch (error) {
                    console.log(error);
                }
            };
        }
    }

    return (
        <TouchableOpacity
        onPress={() => {
            navigations.navigate("product", { product: product});
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
                numberOfLines={1}
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
            page === "home" 
            && 
            <OctionsIcon 
            onPress={handleNextProductScreen}
            name="heart-fill"
            style = {
                checkCoffee() && unlike
                ?
                styles.favoriteIconLiked
                :
                styles.fivouriteIcon
            }
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
        width: 180,
        display: "flex",
        alignItems: "flex-start",
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
    },
    favoriteIconLiked : {
        marginTop: 20,
        marginLeft: 30,
        color: "#ffb84d",
        fontSize: 20
    },
    fivouriteIcon: {
        marginTop: 20,
        marginLeft: 30,
        color: "black",
        opacity: 0.3,
        fontSize: 20
    },
    addIcon: { 
        marginLeft:30,
        fontSize: 20,
        marginTop: 25,
        color: "#ffa31a"
    }
})