import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from "@react-navigation/native";
import { LoginScreen } from "./screens/login";
import { RegisterScreen } from "./screens/register";
import { HomeScreen } from "./screens/home";
import { getToken } from "./commons/helpers/asyncFunc";
import { useEffect, useState } from "react";
import { ProfileScreen } from "./screens/profile";
import { FavouriteScreen } from "./screens/favourite";
import { OrderScreen } from "./screens/order";
import { ProductScreen } from "./screens/productDetail";
import Icon from "react-native-vector-icons/FontAwesome"
import IonIcon from "react-native-vector-icons/Ionicons"
import IconOcticons from "react-native-vector-icons/Octicons"
import { AddressListScreen } from "./screens/address";
import { View, Text } from "react-native";
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


const ProductStack = ({route}) => { 
    const { product } = route.params
    return (
        <Stack.Navigator>
            <Stack.Screen 
            name = "sản phẩm" 
            component={ProductScreen}
            options={{
                headerShown: false
            }}
            initialParams={{product}}
            />

            <Stack.Screen 
            name = "addressList" 
            component={AddressListScreen}
            options={{
                headerTitle: "địa chỉ",
                headerShown: true
            }}
            />
        </Stack.Navigator>
    )
}

const dataTab = [
    {
        name: "Home",
        component: HomeScreen,
        headerTitle: "Trang chủ",
        tabBarLabel: "Trang chủ",
        icon: ({ color, size }) => (
            <Icon name="home" color={color} size={30} />
        ),
    },
    {
        name: "favourite",
        component: FavouriteScreen,
        headerTitle: "Yêu thích",
        tabBarLabel: "Yêu thích",
        icon: ({ color, size }) => (
            <IonIcon name="heart-circle" color={color} size={30} />
        ),
    },
    {
        name: "product",
        component: ProductStack,
        headerTitle: "Chi tiết sản phẩm",
    }, 
    {
        name: "order",
        component: OrderScreen,
        headerTitle: "Đơn hàng",
        tabBarLabel: "Đơn hàng",
        icon: ({ color, size }) => (
            <IconOcticons name="list-unordered" color={color} size={25} />
        ),
    },
    {
        name: "profile",
        component: ProfileScreen,
        headerTitle: "Thông tin cá nhân",
        tabBarLabel: "Cá nhân",
        icon: ({ color, size }) => (
            <IonIcon name="person-circle" color={color} size={30} />
        ),
    },
]
const HomeTab = () => {
    return (   
            <Tab.Navigator
           
            screenOptions={{
                tabBarActiveTintColor: '#ff9933',
                tabBarInactiveTintColor: 'gray',
              }}
            >
                {
                    dataTab.map((data: any, index) => {
                        if(data.name === "product" || data.name === "addressList" ) {
                            return <Tab.Screen 
                            name = {data?.name}
                            key={index}
                            component={data.component}
                            options={{
                                unmountOnBlur: true,
                                headerTitle: data.headerTitle,
                                tabBarButton : () => null
                            }    
                            }
                            />
                        }
                        return <Tab.Screen 
                        key={index}
                        name ={data.name}
                        component={data.component}
                        options={{
                            unmountOnBlur: true,
                            headerTitle: data.headerTitle,
                            tabBarLabel: data.tabBarLabel,
                            tabBarIcon: data.icon
                        }} 
                        />
                    })
                }
            </Tab.Navigator>
    )
}


export const MainStack = () => { 
    const [accessToken, setAccessToken] = useState("");
    useEffect(() => {
        getToken().then((accessToken: string) => {
                setAccessToken(accessToken);
        }
      )
    },[])
    return (
        !accessToken ? 
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Login" component={LoginScreen} options={{title: 'Đăng nhập'}}/>
                <Stack.Screen name="Register" component={RegisterScreen}  options={{title: "Đăng ký"}}/>
            </Stack.Navigator>
        </NavigationContainer>
        :
        <NavigationContainer>
            <HomeTab/>
        </NavigationContainer>
    )
}
