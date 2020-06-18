import React from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import {getRandomAnagram} from '../utils/getRandomAnagram';
import {ContinueButton} from './ContinueButton'

export default function Content(){
    const AnagramData = getRandomAnagram();
    return(
        <View style = {styles.container}>
            <Text style = {styles.label}>{AnagramData.anagram}</Text>
            <View style = {styles.inpContainer}>
                <TextInput style = {styles.input} placeholder="Type hear"></TextInput>
                <ContinueButton />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:10,
        alignItems:'center'
    },
    inpContainer:{
        width: '100%',
        justifyContent:'center',
        alignItems: 'center',
        flexDirection: 'column',
        height:'100%'
    },
    label:{
        borderWidth: 0,
        borderRadius:2,
        marginTop:'10%',
        width: '70%',
        textAlign:'center',
        fontSize: 45,
        marginBottom: '10%'
    },
    input: {
        backgroundColor:'white',
        borderWidth:3,
        width: '70%',
        fontSize: 30,
        textAlign: 'center',
        borderRadius: 5,
        borderColor: 'red',
    }
})