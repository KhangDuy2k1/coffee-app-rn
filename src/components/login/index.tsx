import { StyleSheet ,View, Text, TextInput, Image, TouchableOpacity, Button, DevSettings } from "react-native"
import RNRestart from 'react-native-restart';
import { Constant } from "../common/constants/img-user.constant"
import { Input } from "../common/input"
import { useState } from "react"
import { getToken, saveToken } from "../common/helpers/asyncFunc"
import { login } from "../../apis/login"
import { MainStack } from "../../stack"
export const Login = ({navigation}) => {
    const [info, setInfo] = useState({
        email: "",
        password: ""
    })
    const handleGetEmail = (emailValue: any) => {
        setInfo(({email, ...other}) => ({
            email: emailValue, ...other
        }));
    }
    const handleGetPasswordInput = (passwordValue: any) => {
        setInfo(({password, ...other}) => ({
            password: passwordValue, ...other
        }))
    }

    const handleLogin = async() => { 
        const response: any = await login(info);
        const accessToken: string = response["accessToken"];
        await saveToken(accessToken);   
        DevSettings.reload();
    }

    const handleNextToRegister = async() => {
        const token =await getToken();
        console.log(token);
        navigation.navigate("Register");
    }


    console.log(info)
    return (
      <View style = {styles.wrapContainer}>
        <View style={styles.container}>
            <Image style = {styles.img} source={{uri: Constant.URI_IMAGE_LOGIN}}/>
            <Text style= {styles.loginText}>Đăng nhập</Text>
            <View>
                <View style = {styles.wrapInput}>
                    <Text style = {styles.text}>Email</Text>
                    <TextInput
                        onChangeText={handleGetEmail}
                        placeholder="Nhập email" 
                        style = {styles.input}
                    >
                    </TextInput>
                </View>

                <View style = {styles.wrapInput}>
                    <Text style = {styles.text}>Mật khẩu</Text>
                    <TextInput
                        onChangeText={handleGetPasswordInput}
                        secureTextEntry = {true}
                        placeholder="Nhập mật khẩu" 
                        style = {styles.input}
                    >
                    </TextInput>
                </View>

            </View>
            <View style = {styles.wrapBtnLogin}>

                <Button
                color="#fff"
                onPress={handleLogin} 
                title="Đăng nhập"
                />

            </View>
            <Text style= {styles.registionWrap}>Bạn chưa có tài khoản?  <Text style = {styles.registion} onPress={handleNextToRegister}>Đăng ký</Text></Text>
        </View>
        
      </View>
        
    )
}

const styles = StyleSheet.create({
    wrapContainer: {
        height: "100%",
        backgroundColor: "#fff3e6"
    },
    container: {
        marginTop: 60,
        display: "flex" ,
        alignItems: "center",
    },
    img: {
        width: 150,
        height: 150,
        marginBottom: 20,
        borderRadius: 20,
    },
    wrapInput: { 
        marginTop: 5
    },
    text: { 
        color: "#cc9900"
    },
    input: { 
        width: 250,
        height: 40,
        marginTop: 5,
        borderWidth: 2,
        borderColor: "#cc9900",
        padding: 3,
        borderRadius: 10
    },
    wrapBtnLogin: {
        borderRadius: 10,
        marginTop: 20,
        width: 250,
        height: 40,
        backgroundColor: "#b38600"
    },
    registionWrap: {
        fontSize: 15,
        marginTop: 40,
        marginLeft: "15%"
    },
    registion: {
        fontSize: 17,
        color: "#b38600"
    },
    loginText: {
        fontSize: 25,
        color: "#cc9900"
    }
})