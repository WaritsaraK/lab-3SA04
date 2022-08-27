import React from "react";
import { FlatList, StyleSheet, Text, TouchableHighlight, View } from "react-native";
import { useNavigation } from '@react-navigation/native'; 


const availableZipItems = [   
    { place: 'Hatyai', code: '90110' },   
    { place: 'Trang', code: '92000' },   
    { place: 'Chiangmai', code: '50000' },   
    { place: 'Khonkaen', code: '40000' },   
    { place: 'Chonburi', code: '20000' }, 
]

const ZipItem = ({place, code, navigation}) => (
    <TouchableHighlight style={styles.touch} onPress={() =>{
        navigation.navigate('Weather', {zipCode: code})
    }}>
        <View style={styles.zipItem}>
            <Text>{place}</Text>
            <Text>{code}</Text>
        </View>
    </TouchableHighlight>
)

export default function ZipCodeScreen(){
    const navigation = useNavigation()
    return (
        <FlatList
            data = {availableZipItems}
            keyExtractor = {item => item.code}
            renderItem = {({item}) => <ZipItem {...item} navigation={navigation}/>}
            
        />
    )
}

const styles = StyleSheet.create({
    zipItem: {
        flex: 2,
        flexDirection: 'row',
        paddingHorizontal: 20,
        justifyContent: 'space-between',
        textAlign: 'center',
    },
    zipPlace: {
        flex: 1,
    },
    zipCode: {
        flex: 1,
    },
    touch: {
        padding: 20,
        backgroundColor: "#E3EBFD" ,
    }
})