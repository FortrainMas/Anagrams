import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

export function MenuButton({text, onPress}){
    function pressHandler(){
        onPress(text.toLowerCase());
    }
    return(
        <TouchableOpacity style = {styles.button} onPress={pressHandler}>
            <Text style = {styles.buttonText}>{text}</Text>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    button:{
        backgroundColor: 'red',        
        padding:'4%',
        borderRadius: 5,
        margin: '3%',
        width: '50%',
        alignSelf:'center',
    },
    buttonText:{
        color: 'white',
        fontSize: 25,
        textAlign:'center',
    }
})