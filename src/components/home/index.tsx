import {StyleSheet, Text, View, Image} from 'react-native';
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigationState } from '@react-navigation/native';
import { Slides } from './slides';
import { Search } from './search';
import { Category } from './category';
import { ProductList } from './productList';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setTextSearch } from '../../commons/redux/slices/product';
const uri: string = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo7d4jIJ7dzrjigXP-QTN1H1rReftfbJtsiz4q-i63fy2Z5AOdWo7svkXcWsT8gGtibsM&usqp=CAU"
export const Home = () => {
    const dispatch = useDispatch();
    const navigationState = useNavigationState(state => state);
    useEffect(() => {
        dispatch(setTextSearch(""));
    }, [navigationState])
    return (
            <View style = {styles.homeContainer}>
                <View style = {styles.headerContainer}>
                        <Image 
                        source={{uri: uri}}
                        style = {styles.avt}
                        />
                    <View style = {styles.locationWrap}>
                        <Icon
                        style = {styles.locationIcon}
                        name="location-outline"
                        size={20}
                        color="#000" 
                        />
                        <Text 
                        style = {
                        {
                            fontWeight: 500,
                            fontSize: 13
                        }}>
                            Học Viện Kỹ Thuật Mật Mã
                        </Text>
                    </View>
                    
                    <IconMaterial
                    style = {
                    {
                        marginRight: 15,
                        fontSize: 25,
                        color: "#D2691E"
                    }}
                    name="bell-ring"
                    size={20}
                    color="#000" 
                    />
                </View>
                <View style = {styles.slidesContainer}>
                     <Slides/>
                </View>
                <View>
                    <Search/>
                    <ProductList />
                </View>
                  
            </View>    
    )
}
const styles = StyleSheet.create({
    avt: {
        marginLeft: 5,
        width: 35,
        height: 35,
        borderRadius: 100
        // borderRadius: "50%"
    },
    locationWrap: {
        display: "flex",
        justifyContent: "center",
        flexDirection: "row",
        alignItems: "center"
    },
    locationIcon: {
        marginRight: 15,
        fontSize: 25,
        color: "#D2691E"
    },
    homeContainer: {
        height: "100%",
        backgroundColor: "#fff"
    },
    headerContainer: {
        height: 45,
        flexDirection: 'row',
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
    },
    slidesContainer: {
        height: 210,
        backgroundColor: "#fff"
    }
})