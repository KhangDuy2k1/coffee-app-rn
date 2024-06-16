import { useState } from "react";
import { 
     View,
     Text,
     Image,
     StyleSheet,
     TextInput,
     TouchableOpacity
} 
from "react-native";
import IconAnt from "react-native-vector-icons/AntDesign"
import { BottomSheetSelect } from "../../../modals/bottomSheet";
import { useSelector, useDispatch } from "react-redux";
import { selectOrder, setVisibleSelectMethod } from "../../../commons/redux/slices/order";
import { formatMoney } from "../../../commons/helpers/func";

export const ProductDetail = ({product}) => { 
    const [inputQuantity, setInputQuantity] = useState<number>(0)
    const dispatch = useDispatch();
    const order = useSelector(selectOrder)
    function decrease() {
        setInputQuantity((data) => data === 0 ? 0 : --data)
    }
    function increase(){
        setInputQuantity((data) => ++data)
    }
    async function hanldeOrder() { 
        dispatch(setVisibleSelectMethod(true))
    }
    return (
        <View style = {styles.container}>
            <BottomSheetSelect dataOrder = {{product: product, quantity: inputQuantity}}/>
            <View style = {styles.wrapImage}>
                <Image source={{uri: product.image}} style = {styles.image}/>
            </View>
            <View style = {styles.wrapContent}>
                <View style = {styles.headerContent}>
                    <Text style = {{fontSize :25, fontWeight: "700"}}>
                        {product.name}
                    </Text>
                    <View> 
                        <View style = {styles.containerInfo}>
                            <View style = {styles.starsContainer}>
                                <Text style = {styles.starsNumberText}>
                                    {product.stars} / 5
                                </Text>
                                <IconAnt style = {styles.starIcon} name="star"/>
                            </View>

                            <Text style = {styles.price}>
                                {formatMoney(product.price)} VNĐ
                            </Text>
                        </View> 
                    </View>
                   
                </View>
                <View style = {styles.descript}>
                   <Text style = {styles.textDesc}>
                        {product.desc}
                   </Text>
                </View>
                <View style = {styles.quantityContainer}>
                    <TouchableOpacity style={styles.button} onPress={decrease}>
                    <Text style={styles.buttonText}>-</Text>
                    </TouchableOpacity>
                    <TextInput style={styles.input} value= {inputQuantity.toString()} />
                    <TouchableOpacity style={styles.button} onPress={increase}>
                    <Text style={styles.buttonText}>+</Text>
                    </TouchableOpacity>
                </View>
                    <View style = {styles.containerOrderBottom}>
                        <View>
                            <Text style = {styles.textSumMoney}>Tổng tiền</Text>
                            <Text style = {styles.price}>
                             {formatMoney((product.price)*inputQuantity)} VNĐ
                            </Text>
                        </View>
                        
                        <View>
                           <TouchableOpacity onPress={hanldeOrder}>
                            <View style = {styles.orderButton}>
                                <Text style = {styles.textOrder}>
                                    Đặt hàng
                                </Text>
                            </View>
                           </TouchableOpacity>
                        </View>
                    </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({ 
    container: {
        backgroundColor: "#d6d6c2"
    },
    wrapImage: {
        height: 300,
        display: "flex",
        alignItems: "center"
    },
    descript: {
        height: 100,
    },
    textDesc: {
        opacity: 0.5,
        fontSize: 20
    },
    image: { 
        marginTop: 10,
        textAlign: "center",
        borderRadius: 100,
        width: "80%",
        height: "100%"
    },
    wrapContent: { 
        padding: 30,
        marginTop: 20,
        borderRadius: 60,
        height: "100%",
        backgroundColor: "#ffe680"
    },
    headerContent: {
        height: 60,
    },
    quantityContainer: {
        marginTop: 60,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center"
    },
    button: {
        backgroundColor: '#adad85',
        borderRadius: 5,
        paddingTop:10,
        paddingBottom: 10,
        paddingLeft: 20,
        paddingRight: 20
    },
    buttonText: {
        color: "#fff",
        fontSize: 25,
    },
    input: {
        borderRadius: 5,
        borderWidth: 0.5,
        width: 70,
        textAlign: 'center',
        fontSize: 20,
        paddingVertical: 5,
    },
    containerOrderBottom: {
        marginTop: 40,
        height: 60,
        alignItems: "center",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    containerInfo: { 
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    starsContainer: {
        width: 70,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center"
    },
    starIcon: { 
        fontSize: 20,
        color: "#ff9900"
    },
    starsNumberText: { 
        fontSize: 22
    },
    price: {
        letterSpacing: 0.5,
        fontSize: 23
    },
    orderButton: {
        display: "flex",
        justifyContent: "center",
        borderRadius: 20,
        width: 150,
        height: 40,
        backgroundColor: "#ffad33"
    },
    textOrder: {
        textAlign: "center",
        fontSize: 20,
        color: "#fff"
    },
    textSumMoney: { 
        fontWeight: "600",
        fontSize: 25
    }
})