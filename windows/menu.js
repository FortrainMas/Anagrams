import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {MenuButton} from '../components/MenuButton';

export function Menu({onPress}){
    return(
        <View style = {styles.container}>
            <MenuButton text = "PLAY" onPress = {onPress}/>
            <MenuButton text = "SETTINGS" onPress = {onPress}/>
            <MenuButton text = "STATS" onPress = {onPress}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'column',
        height: 20,
        alignItems:'center',
        justifyContent:'center',
    }
})