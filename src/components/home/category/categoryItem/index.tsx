import { View, Text, StyleSheet } from "react-native"

export const CategoryItem = ({nameCategory}) => {
    return (
        <View 
        style = {style.categoryWrap}
        >
            <Text style = {style.textCategory}>
                     {nameCategory}
            </Text>
        </View>
    )
}
const style = StyleSheet.create({
    categoryWrap: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginLeft: 10,
        padding: 5,
        borderRadius: 10,
        width: 100,
        height: 30,
        backgroundColor: "#ffb366"
    },
    textCategory: {
        fontWeight: "700",
        color: "#fff"
    }
})