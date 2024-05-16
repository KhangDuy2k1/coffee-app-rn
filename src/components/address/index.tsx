import { View, Text, StyleSheet, TextInput, TouchableOpacity, FlatList } from "react-native"
import { AddressItem } from "./addressItem"
import { useEffect, useState } from "react"
import { addAddress } from "../../apis/add-address"
import { getAllAddress } from "../../apis/get-all-address"
import { useNavigation } from "@react-navigation/native"
export const AddressComponent = () => { 
    const navigation = useNavigation();
    const [info, setInfo] = useState({
        address: "",
        phonenumber: ""
    })
    const [address, setAddress] = useState([])
    const handleAddAddress =async() => { 
        try {
           const response = await addAddress(info);
           alert(response.mes);
        } catch (error:any) {
            alert(error.response?.data?.message[0])
        }
    }
    const getValueAddress = (value: string) => {
        setInfo(({phonenumber}) => (
            {
                address: value,
                phonenumber
            }
        ))
    }
    const getValuePhone = (value: string) => { 
        setInfo(({address}) => ({ 
            phonenumber: value,
            address
        }))
    }
    useEffect(() => { 
        async function getAddress() { 
            try {
                const response = await getAllAddress();
                setAddress(response.allAddress);
            } catch (error) {
                console.log(error)
            }
        }
        getAddress()
    }, [])
    return (
        <View style = {styles.containerAll}>
            <View style = {styles.containerTitle}>
            <View style = {styles.wrapAddInfo}> 
                <Text style = {styles.textTitle}>Thêm địa chỉ nhận hàng</Text>
                    <View style = {styles.wrapInput}> 
                        <Text>Địa chỉ</Text>
                        <TextInput placeholder="Nhập địa chỉ" style = {styles.input} onChangeText={getValueAddress}/>
                    </View>

                    <View style = {styles.wrapInput}>
                        <Text>Số điện thoại</Text>
                        <TextInput placeholder="Nhập số điện thoại" style = {styles.input} onChangeText={getValuePhone}/>
                    </View>
            </View>
            <TouchableOpacity onPress={handleAddAddress}>
            <View style = {styles.btnWrap}>
                    <Text style = {{color: "#fff"}}>
                        Thêm địa chỉ
                    </Text>
                </View>
            </TouchableOpacity>  
            </View>
            
            <View style = {styles.container}>  
                    <FlatList
                        data={address}
                        renderItem={({item}) => (
                            <AddressItem data = {item}/>
                    )}
                    />
            </View>
        </View>
        
    )
}
const styles = StyleSheet.create({ 
    containerAll: {
        backgroundColor: "#fff",
    },
    containerTitle: {
        marginTop: 20,
        
    },
    wrapAddInfo: { 
        marginLeft: 60
        
    },
    container: { 
        padding: 30,
        display: "flex",
        alignItems: "center",
        height: "100%",
        backgroundColor: "#fff"
    },
    textTitle: { 
        fontSize: 20
    },
    wrapInput: {
        marginTop: 10
    },
    input: {
        borderRadius: 10,
        marginTop: 5,
        padding:5,
        width: 300,
        height: 35,
        borderWidth: 2,
        borderColor: "#cc9900"
    },
    btnWrap: { 
        marginTop: 10,
        marginLeft: 260,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: 100,
        height: 30,
        backgroundColor: "#e6ac00",
        borderRadius: 10
    }
})