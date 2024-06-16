import { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, DevSettings } from "react-native"
import IconFontisto from "react-native-vector-icons/Fontisto";
import { getInfoUserLogin } from "../../apis/info-user-login";
import { getWallet } from "../../apis/get-wallet";
import { createWallet } from "../../apis/create-wallet";
import { TopUpModal } from "../../modals/topUp";
import { useDispatch } from "react-redux";
import { setVisibleWallet } from "../../commons/redux/slices/wallet";
import { formatMoney } from "../../commons/helpers/func";
import { removeToken } from "../../commons/helpers/asyncFunc";
export const Profile = () => {
    const [infoUserLogin, setInfoUserLogin] = useState<any>(); 
    const [wallet, setWallet] = useState<any>();
    const [createWalletStatus, setCreateWalletStatus] = useState<boolean>(false)
    const dispatch = useDispatch()
    useEffect(() => { 
       const getInfo = async() => { 
          try {
            const res: any = await getInfoUserLogin();
            setInfoUserLogin(res.user)
          } catch (error) {
            console.log(error);            
          }
       }
       const getInfoWallet = async() => { 
        try {
          const res: any = await getWallet();
          setWallet(res.wallet)
        } catch (error: any) {
          alert(error.response.data.message);            
        }
     }
       getInfoWallet()
       getInfo();
    },[createWalletStatus])
    
    const handleCreateWallet = async() => {
        try {
            const res = await createWallet()
            setCreateWalletStatus(!createWalletStatus)
        } catch (error) {
            console.log(error);
        }
    }
    const handleTopup = () => {
        dispatch(setVisibleWallet(true));
    }
    const logout = async() => { 
        await removeToken();
        DevSettings.reload();
    }
    return (
        <View style = {styles.container}>
            <TopUpModal/>
            <View style = {styles.avtContainer}>
                <Image style = {styles.banner} source={{uri: "https://d1b3667xvzs6rz.cloudfront.net/2022/08/1519798016830.jpeg"}}/>
                <Image style = {styles.avt} source={{uri: "https://cdn.dribbble.com/users/187214/screenshots/2011963/dribbble_barca.png"}}/>
            </View>
            <View style = {styles.body}>
                <Text style = {styles.textInfo}>Thông tin cá nhân</Text>
                <View style = {styles.wrapinfo}>
                   <IconFontisto style = {styles.icon} name = "email"/>
                   <Text style = {styles.text}>{infoUserLogin?.email}</Text>
                </View>
                <View style = {styles.wrapinfo}>
                   <IconFontisto style = {styles.icon} name = "phone"/>
                   <Text style = {styles.text}>{infoUserLogin?.phonenumber}</Text>
                </View>
                {
                    !wallet 
                    ?
                    <View style = {styles.nonWallet}> 
                        <Text>Bạn chưa có ví</Text>
                        <TouchableOpacity onPress={handleCreateWallet}>
                        <View style = {styles.btnCreateWallet}>
                            <Text style = {styles.textCreateWallet}>Tạo ví</Text>
                        </View>
                        </TouchableOpacity>
                        
                    </View>
                    :
                    <View style= {styles.wrapMoney}>
                    <Text style = {styles.textMoney}>Số tiền trong ví : {formatMoney(
                        wallet.amountMoney
                    )} VNĐ</Text>
                    <View>
                        <TouchableOpacity onPress={handleTopup}>
                            <View style = {styles.btnTopUp}>
                                 <Text style = {styles.btnText}>Nạp tiền</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                }
                <TouchableOpacity onPress={logout}>
                    <Text style = {styles.btnLogout}>Đăng xuất</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: { 
        backgroundColor: "#fff",
        height: "100%"
    },
    avtContainer: { 
        position: "relative",
        height: "40%",
        backgroundColor: "blue"
    },
    banner: {
        width: "100%",
        height: "100%"
    },
    avt: {
        borderWidth: 3,
        borderColor: "#0000ff",
        position: "absolute",
        left: 20,
        bottom: "-30%",
        width: 200,
        height: 200,
        borderRadius: 200
    },
    wrapinfo: { 
        marginTop: 20,
        display: "flex",
        flexDirection: "row",
        alignItems: "center"
    },
    icon: { 
        fontSize: 20
    },
    body: { 
        padding: 40,
        marginTop: 100,
        height: "100%",
    },
    textInfo: {
        fontSize: 25
    },
    text: { 
        marginLeft: 10,
        fontSize: 20
    },
    textMoney: {
        fontSize: 25
    },
    wrapMoney: {
        marginTop: 40
    },
    btnTopUp: { 
        marginTop: 20,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 40,
        width: 100,
        height: 40,
        backgroundColor: "#ff9900"
    },
    btnText: { 
        fontSize: 20,
        color: "#fff"
    },
    nonWallet: { 
        marginTop: 20
    },
    btnCreateWallet: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 20,
        marginTop: 20,
        width: 100,
        height: 40,
        backgroundColor: "#ff9900"
    },
    textCreateWallet: {
        fontSize: 20, 
        color: "#fff"
    },
    btnLogout: {
        marginTop: 10,
        marginLeft: 250,
        fontSize: 20
    }

})