
import React, { Component } from 'react';
import {StyleSheet,View,Image,} from 'react-native';

export default class MenuItem extends React.Component{

  render(){
    return(
      <View style={styles.menuItem}>
        <Image style={styles.image} source={this.props.itemImage}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  menuItem:{
    width:150,
    height: 150,
    padding:5,
  },
    image:{
    width:'100%',
    height:'100%',
  }
});
