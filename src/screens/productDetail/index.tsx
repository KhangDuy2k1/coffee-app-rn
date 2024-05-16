import { View, Text } from "react-native"
import { ProductDetail } from "../../components/product/productDetail"
export const ProductScreen = ({route}) => {
    return (
        <ProductDetail product = {route.params.product}/>
    )
}