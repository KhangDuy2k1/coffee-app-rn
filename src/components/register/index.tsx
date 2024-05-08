import { View, Text, Image, StyleSheet, TextInput, Button } from "react-native"
import { Constant } from "../common/constants/img-user.constant"
import { useState } from "react"
import { register } from "../../apis/register"

export const Register = ({navigation}) => {
    const [infoRegister, setInfoRegister] = useState({
        email: "",
        password: "", 
        phonenumber: ""
    })

    const hanleRegister = async() => { 
        try {
            const response: any = await register(infoRegister);
            console.log(response);
            alert(response.mes);
            navigation.navigate("Login");
        } catch (error: any) {
            alert(error.response.data.message);
        }
       
    }

    const getEmail = (emailInput: string) => {
         setInfoRegister(({email, ...other}) => (
             {
                email: emailInput,
                ...other
             }
         ))
    }

    const getPassword = (passwordInput: string) => {
        setInfoRegister(({password, ...other}) => (
            {
               password: passwordInput,
               ...other
            }
        ))
    }

    const getPhonenumber = (phoneInput: string) => {
        setInfoRegister(({phonenumber, ...other}) => (
            {
               phonenumber: phoneInput,
               ...other
            }
        ))
    }
    return (
    <View style = {styles.wrapContainer}>
    <View style = {styles.container}>
            <Image 
            source = {{uri: Constant.URI_IMAGE_REGISTER}}
            style = {styles.imgRegister}
            />
            <Text style = {styles.textTitle}>
                Đăng ký tài khoản
            </Text>


            <View style = {styles.containerInput}>
            <Text style = {styles.text}>
                Email
            </Text>
            <TextInput 
                onChangeText={getEmail}
                placeholder="Nhập email"
                style = {styles.input}
            />
            </View>
          
            <View style = {styles.containerInput}>
            <Text 
            style = {styles.text}
            >
                Mật khẩu
            </Text>
            <TextInput
                onChangeText={getPassword}
                secureTextEntry = {true}
                placeholder="Nhập mật khẩu"
                style = {styles.input}
            />
            </View>

            <View style = {styles.containerInput}>
            <Text style = {styles.text}>
                Số điện thoại
            </Text>
            <TextInput
                onChangeText={getPhonenumber}
                style = {styles.input}
                placeholder="Nhập số điện thoại"
            />
            </View>

            <View
            style = {styles.btnRegister}
            >
            <Button
                onPress={hanleRegister}
                title="Đăng ký"
                color= "#fff"
            />
            </View>

        </View>
    </View>    
        
    )
}
const styles = StyleSheet.create({
    wrapContainer: {
        height: "100%",
        backgroundColor: "#fff3e6"
    },
    textTitle: {
        fontSize: 25,
        color: "#cc9900" 
    },
    text: {
        color: "#cc9900"
    },
    container: { 
        marginTop: 100,
        display: "flex",
        // justifyContent: "center",
        alignItems: "center",
        justifyContent: "center"
    },
    imgRegister: {
        width: 150,
        height: 150,
        borderRadius: 30
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
    containerInput: {
        marginTop: 5
    },
    btnRegister: {
        borderRadius: 10,
        marginTop: 20,
        width: 250,
        height: 40,
        backgroundColor: "#cc9900"      
    }
})