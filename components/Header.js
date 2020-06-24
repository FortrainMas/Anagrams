import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function Header(){
    return(
        <View style={styles.container}>
            <Text style = {styles.logo}>ANAGRAM</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'red',
        padding: '15%',
        paddingBottom: '0%',
        paddingTop: '13%',
        alignItems: 'center',
        flexDirection:'row',
        justifyContent:'center'
    },
    logo:{
        color: '#fff',
        fontSize: 35,
    },
    LVL:{
        color: '#fff',
        fontSize: 30,
    }
})