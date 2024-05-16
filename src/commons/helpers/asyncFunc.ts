import AsyncStorage from '@react-native-async-storage/async-storage';
const tokenName = "accessToken"
export const saveToken = async(token: string): Promise<void> => { 
    try {
       await AsyncStorage.setItem(tokenName, token);
    } catch (error) {
       alert('lỗi khi lưu token');
    }
}
export const getToken = async(): Promise<any> => { 
    try {
        return await AsyncStorage.getItem(tokenName);    
    } catch (error) {
        alert("lỗi khi lấy token");
    } 
} 
export const removeToken = async():Promise<void> => {
    try {
        await AsyncStorage.removeItem(tokenName);
    } catch (error) {
        alert("lỗi")
    }
}