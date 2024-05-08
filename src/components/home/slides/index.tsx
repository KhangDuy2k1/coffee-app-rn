import { useEffect, useState } from "react";
import { View, Image, StyleSheet } from "react-native";
import Swiper from "react-native-swiper";
const images: string[] = [
    "https://t4.ftcdn.net/jpg/02/55/91/67/360_F_255916794_PLWsW5bGfDkhviQ0YPrEJewDjLPdFjdV.jpg",

    "https://img.freepik.com/premium-vector/post-digital-marketing-coffee-shop-social-media-web-post-banner-template-vector_618890-951.jpg",
    "https://img.freepik.com/premium-vector/post-digital-marketing-social-coffee-shop-media-web-post-banner-template-vector_618890-946.jpg?size=626&ext=jpg&ga=GA1.1.1224184972.1714089600&semt=ais",
    "https://img.freepik.com/free-vector/hand-drawn-coffee-shop-instagram-stories_23-2149225897.jpg?size=626&ext=jpg&ga=GA1.1.87170709.1707350400&semt=ais"
];

export const Slides = () => { 
    return (
        <Swiper style={styles.wrapper} autoplay autoplayTimeout={3}>
            {images.map((url, index) => {
            return <View key={index} style={styles.slide}>
                        <Image source={{ uri: url }} style={styles.image}/>
                   </View>
            })}
         </Swiper>
    );
};

const styles = StyleSheet.create({
    wrapper: {},
    slide: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    image: {
        width: "100%",
        height: "100%",
        resizeMode: "cover"
    }
});