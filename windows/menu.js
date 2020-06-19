import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {MenuButton} from '../components/MenuButton';
import {getLanguage, getPlay, getExit} from '../utils/getPhrase';
import {changeLanguage, setCurrentLanguage} from '../utils/LanguageWorker';

export class Menu extends React.Component{
    constructor(props){
        super(props);
        this.onPress = this.props.onPress;
        this.state = {
            language: 'en'
        }
        setCurrentLanguage(this);
    }
    //When user press language button it calls change language and automaticly get new language
    onChangeLanguage = () => {
        this.setState({language: changeLanguage(this.state.language)});
    }
    render(){
        const {language} = this.state;
        return(
            <View style = {styles.container}>
                <MenuButton text = {getPlay(language)} onPress = {this.onPress}/>
                <MenuButton text = {getLanguage(language)} onPress = {this.onChangeLanguage}/>
                <MenuButton text = {getExit(language)} onPress = {this.onPress}/>
            </View>
        )
    }
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