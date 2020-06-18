import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

export function ContinueButton({onPress}){
    return(
        <TouchableOpacity style = {styles.button}>
            <Text style = {styles.buttonText}>CONTINUE</Text>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    button:{
        backgroundColor: 'red',        
        padding:'3%',
        borderRadius: 5,
        margin: '30%'
    },
    buttonText:{
        color: 'white',
        fontSize: 25
    }
})