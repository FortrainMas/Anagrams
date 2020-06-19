import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Header from './components/Header';
import Content from './components/Content';
import {Menu} from './windows/menu';
import { render } from 'react-dom';

export default class App extends React.Component{
  constructor(){
    super();
    this.state = {
      window: "menu"
    }
  }
  menuLoader = () =>{
    this.setState({window: 'menu'});
  }
  gameLoader = () =>{
    this.setState({window: 'game'})
  }
  render(){
    return (
      <View style={styles.container}>
        <Header />
        {
          this.state.window == "game"? <Content onPress = {this.menuLoader}/>:
          this.state.window == "menu"? <Menu onPress = {this.gameLoader}/>:
          <Menu onPress = {this.windowsChangeHandler}/>
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column'
  },
});
