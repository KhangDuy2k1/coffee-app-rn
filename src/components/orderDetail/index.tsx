import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native"
import IconEntipo from "react-native-vector-icons/Entypo"
import IconFontAwe from "react-native-vector-icons/FontAwesome"
import { formatDate, formatMoney } from "../../commons/helpers/func"
import { useEffect, useState } from "react"
import { getOrderById } from "../../apis/get-order-id"
import { Rating } from "react-native-ratings"
import { review } from "../../apis/reivew"
import { recieved } from "../../apis/received"
export const OrderDetail = ({id_order}) => {
    const [orderInfo, setOrderInfo] = useState<any>();
    const [rating, setRating] = useState<number>(1);
    const [statusText, setStatusText] = useState<any>("");
    const [isReceived, setIsReceived] = useState<boolean>(false);
    useEffect(() => { 
        if(statusText === "đã nhận hàng") setIsReceived(true);
    }, [statusText])

    useEffect(() => { 
       async function getOrder(){
            try {
                const res = await getOrderById(id_order);
                setOrderInfo(res.order)
                setStatusText(res.order.status)
                if(statusText === "đã nhận hàng") setIsReceived(true);
            } catch (error) {
                console.log(error);
            }
       }
       getOrder()
    },[])
    const reviewCoffee = async() => {
        try {
            if(rating === 0) {
                alert("số sao đánh giá thấp nhất là 1")
                return;
            }
            const response = await review({id: orderInfo?.coffeeItem_id._id, stars: rating})
            alert(response.mes)
        } catch (error: any) {
            console.log(error?.response?.data);
        }
    }
    const finish = async() => {
       try {
        await recieved(id_order);
        setStatusText("đã nhận hàng")
       } catch (error) {
        console.log(error);
       }
    }
    const handleRatingCompleted = (value: number) => {
        setRating(value)
    }
    console.log(rating);
    return (
        <View style = {styles.container}>
            <View>
                <Text style = {styles.title}>Địa chỉ nhận hàng</Text>
                <View style = {styles.wrapInfo}>
                    <IconEntipo style = {styles.icon} name = "location"/>
                    <Text style = {styles.text}>{orderInfo?.id_address.address}</Text>
                </View>
                <View style = {styles.wrapInfo}>
                    <IconFontAwe style = {styles.icon} name = "phone-square"/>
                    <Text style = {styles.text}>{orderInfo?.id_address.phonenumber}</Text>
                </View>
            </View>
            <View style = {styles.infoOrder}>
                 <Text style = {styles.title}>Thông tin chi tiết</Text>
                 <View style = {styles.wrapCoffee}>
                    <Image style = {styles.image} source={{uri: orderInfo?.coffeeItem_id.image}}/>
                    <View style = {styles.wrapInfoCoffee}>
                        <Text numberOfLines={1} style = {styles.text}>tên sản phẩm: {orderInfo?.coffeeItem_id.name}</Text>
                        <Text style = {[styles.text, styles.price]}>Giá tiền: {formatMoney(orderInfo?.coffeeItem_id.price)} VNĐ</Text>
                        <Rating 
                        style = {styles.rating}
                        imageSize={16}
                        readonly
                        startingValue={orderInfo?.coffeeItem_id.stars}
                        />
                    </View>
                 </View>
            </View>
            <View style = {styles.wrapOrder}>
                <Text style = {styles.textOrder}>Trạng thái đơn hàng:  
                <Text style = {
                    statusText === "đã thanh toán" || statusText === "đã nhận hàng" ? styles.statusPaid : 
                    statusText === "đã hủy đơn" ? styles.cancle :
                     styles.ordered
                    }> {statusText}</Text>
                </Text>
                <Text style = {styles.textOrder}>Thời gian đặt hàng: {formatDate(orderInfo?.createdAt)}</Text>
                <Text style = {styles.textOrder}>Số lượng sản phẩm: {orderInfo?.quantity}</Text>
                <Text style = {styles.textOrder}>Tổng số tiền phải trả: {formatMoney(orderInfo?.total)} VNĐ</Text>
            </View>
            <View style = {styles.wrapRating}>
                <Text style = {styles.title}>Đánh giá sản phẩm</Text>

                <Rating
                startingValue={rating}
                style = {styles.ratingBot}
                imageSize={30}
                onFinishRating={handleRatingCompleted}
                />
                
                <TouchableOpacity onPress={reviewCoffee}>
                <View style = {styles.btnReview}>
                    <Text style = {styles.textBtnReview}>Đánh giá</Text>
                </View>
                </TouchableOpacity>
                
            </View>
            <View style = {styles.wrapBtnBt}>
                <TouchableOpacity onPress={finish} disabled = {isReceived}>
                    <View style = {!isReceived ? [styles.btn, styles.success] : [styles.btn, styles.rec]}>
                        <Text style = {styles.textBtnBt}>Đã nhận được hàng</Text>
                    </View>
                </TouchableOpacity>
               
                <TouchableOpacity>
                    <View style = {styles.btn}>
                        <Text style = {styles.textBtnBt}>Hủy đơn</Text>
                    </View>
                </TouchableOpacity>
                
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: { 
        padding: 20,
        height: "100%",
        backgroundColor: "#fff"
    },
    wrapInfo: {
        display: "flex",
        flexDirection: "row",
        marginTop: 10
    },
    icon: {
        color: "#cc9900",
        fontSize: 20
    },
    text: {
        fontWeight: "500",
        // marginTop: 10, 
        fontSize: 20,
        marginLeft: 5
    },
    infoOrder: {
        marginTop: 20
    },
    image: { 
        borderRadius: 20,
        width: 100,
        height: 100
    },
    title: { 
        marginBottom: 20,
        fontSize: 25,
        fontWeight: "700"
    },
    wrapCoffee: {
        display : "flex",
        flexDirection: "row"
    },
    wrapFoot: { 
        marginTop: 20
    },
    wrapOrder: { 
        marginTop: 20
    },
    textOrder: { 
        marginTop: 15,
        fontSize: 20,
        fontWeight: "700"
    },
    statusPaid: {
        fontStyle: "italic",
        color: "green"
    },
    cancle: {
        fontStyle: "italic",
        color: "red"
    },
    ordered: {
        color: "blue",
        fontStyle: "italic"
    },
    price: {
        marginTop: 10
    },
    rating: { 
        marginTop: 15,
        marginLeft: 5
    },wrapInfoCoffee: {
        display: "flex",
        alignItems: "flex-start"
    },
    wrapRating: {
        marginTop: 20
    },
    ratingBot: {
        marginTop: 15
    },
    btnReview: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 20,
        width : 100,
        height: 40,
        backgroundColor: "#ffc61a"
    },
    textBtnReview: {
        fontSize: 20, 
        color: "#fff"
    },
    wrapBtnBt: {
        marginTop: 50,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    btn : {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 20,
        backgroundColor: "red",
        width: 180,
        height: 40
    },
    success: { 
        backgroundColor: "green"
    },
    textBtnBt: {
        fontSize :20,
        color: "#fff"
    },
    rec: {
        backgroundColor: "green",
        opacity: 0.5 
    }
})