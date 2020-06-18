import React from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import {getRandomAnagram} from '../utils/getRandomAnagram';
import {ContinueButton} from './ContinueButton'

export default class Content extends React.Component{
    constructor(){
        super();
        this.state = {
            isGuessed: false,
            AnagramData: getRandomAnagram()
        }
    }
    
    isGuessed = (txt) => {
        txt = txt.nativeEvent.text.toLowerCase();
        console.log(txt);
        console.log(this.state.AnagramData.word.toLowerCase());
        if(this.state.AnagramData.word.toLowerCase() == txt){
            this.setState({isGuessed: true});
            console.log("My congratulations")
        }
    }
    render(){
        return(
            <View style = {styles.container}>
                <Text style = {styles.label}>{this.state.AnagramData.anagram}</Text>
                <View style = {styles.inpContainer}>
                    <TextInput style = {styles.input} placeholder="Type hear" onChange = {this.isGuessed}></TextInput>
                    <ContinueButton />
                </View>
            </View>
        )
    }
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