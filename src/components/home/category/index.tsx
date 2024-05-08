import { View, Text, ScrollView } from "react-native"
import { CategoryItem } from "./categoryItem"

export const Category = () => {
    return (
        <View style = {{marginTop : 5}}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <CategoryItem nameCategory= "cà phê"/>
            <CategoryItem nameCategory= "cà phê"/>
            <CategoryItem nameCategory= "cà phê"/>
            <CategoryItem nameCategory= "cà phê"/>
            <CategoryItem nameCategory= "cà phê"/>

            <CategoryItem nameCategory= "cà phê"/>

            <CategoryItem nameCategory= "cà phê"/>

        </ScrollView>
        </View>
    )
}