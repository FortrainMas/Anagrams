import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

export function GameButton({isGuessed, onMenuPress, onContinuePress}){
    if(isGuessed){
        return(
            <TouchableOpacity style = {styles.button} onPress = {()=>{onContinuePress('play')}}>
                <Text style = {styles.buttonText}>CONTINUE</Text>
            </TouchableOpacity>
        )
    }
    return(
        <TouchableOpacity style = {styles.button} onPress = {()=>{onMenuPress('menu')}}>
            <Text style = {styles.buttonText}>MENU</Text>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    button:{
        backgroundColor: 'red',        
        padding:'4%',
        borderRadius: 5,
        margin: '30%',
    },
    buttonText:{
        color: 'white',
        fontSize: 23
    }
})