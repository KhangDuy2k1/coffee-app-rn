import { TextInput, View, StyleSheet} from "react-native"

export const Input = ({placeholder}) => { 
    const handleInput = (value: any) => { 
            console.log(value)
    }
    return (
        <TextInput 
            onChangeText={handleInput}
            placeholder={placeholder}
            style = {styles.input}
        />
    )
}
const styles = StyleSheet.create({
    input: { 
        width: 250,
        height: 40,
        marginTop: 5,
        borderWidth: 2,
        borderColor: "#cc9900",
        padding: 3,
        borderRadius: 10
    },
})