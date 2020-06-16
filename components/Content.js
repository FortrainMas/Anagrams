import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {getRandomAnagram} from '../utils/getRandomAnagram';

export default function Content(){
    console.log(getRandomAnagram);
    return(
        <View style = {styles.container}>
            <Text style = {styles.label}>{getRandomAnagram()}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:10,
    },
    label:{
        alignSelf:'center',
        borderWidth: 1,
        borderRadius:2,
        marginTop:'10%',
        width: '70%',
        textAlign:'center',
        fontSize: 25,
    }
})