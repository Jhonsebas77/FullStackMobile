import React, { Component } from 'react';
import {StyleSheet,ImageBackground,View,Image} from 'react-native';
import ImageOverlay from './ImageOverlay';

export default class Banner extends React.Component<{}> {
  render() {
    return (
      <View style = {styles.container}>
        <ImageBackground source= {require('../img/Landscape.jpg')} style={styles.landscape} >
          <View style = {styles.iconContainer}>
            <Image source= {require('../img/Logo.png')} style = {styles.icon} />
          </View>
          <View>
              <ImageOverlay header='! BUSCA TU HOTEL !' paragraph= '' />
          </View>
          </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
  },
  landscape:{
    padding:5,
    alignItems:'center',
    backgroundColor:'#98d2c1'
  },
  iconContainer:{

  },
  icon:{
    width:140,
    height:140,
    borderRadius:100,
    borderWidth:4,
    borderColor:'#fff',
  },

});

module.exports = Banner;
