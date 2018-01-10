import React, { Component } from 'react';
import {StyleSheet,ImageBackground,} from 'react-native';
import ImageOverlay from './ImageOverlay';

export default class Banner extends React.Component<{}> {
  render() {
    return (
        <ImageBackground source= {require('../img/Landscape.jpg')}
                style={styles.banner} >
          <ImageOverlay header='! BUSCA TU HOTEL!' paragraph= 'AQUI!' />
        </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  banner: {
    width:'100%',
    alignItems:'center',
    justifyContent:'center',
    height:500,
  },

});

module.exports = Banner;
