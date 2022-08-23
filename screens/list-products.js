import { Text, View, StyleSheet } from "react-native"
import { ScrollView } from "react-native-web"
import { ListItem } from 'react-native-elements'
export const ListProducts = () =>{
    const arr_products = [
        {
            id: 12,
            nombre: "hola"
        },
        {
            id: 13,
            nombre: "hola"
        },
        {
            id: 14,
            nombre: "hola"
        },
    ]
    return (
        <ScrollView>
            {
                arr_products.map((item,i)=>{
                    return (<View key={i} ><Text style={styles.item}>{item.nombre}</Text></View>)
                }
                )
            }
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    item: {
        padding: 20, 
        fontSize: 14,
        margin:5,
        backgroundColor: "#FFF",
        borderRadius: 5,
        shadowColor: "#000"
    }
})