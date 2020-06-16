import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function Header(){
    return(
        <View style={styles.container}>
            <Text style = {styles.logo}>ANAGRAM</Text>
            <Text style = {styles.LVL}>LVL 1</Text>
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
        justifyContent:'space-between'
    },
    logo:{
        color: '#fff',
        fontSize: 30,
    },
    LVL:{
        color: '#fff',
        fontSize: 30,
    }
})