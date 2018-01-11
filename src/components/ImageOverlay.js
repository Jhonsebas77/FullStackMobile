/*
 * Proyecto: Prueba FullStackMobile.
 * Empresa: Almundo
 * Responsable Proyecto: Sebastian Otalora
 * Responsable Contacto: jhonsebas77@outlook.com | 3217209516
 * Componente para ubicar un texto encima de una ImageBackground
 */


import React, { Component } from 'react';
import {StyleSheet,Text,View} from 'react-native';

export default class ImageOverlay extends React.Component<{}> {
  render() {
      let header = this.props.header ?
          <Text style={styles.overlayHeader}>
            {this.props.header}
          </Text>
      : null;

      let paragraph = this.props.paragraph ?
          <Text style={styles.overlayParagraph}>
            {this.props.paragraph}
          </Text>
      : null;
  return (
      <View>
        {header}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  overlayHeader: {
    elevation:1,
    alignSelf:'center',
    fontSize:28,
    color:"#292929",
    textAlign:'center',
    padding:10,
    backgroundColor:'rgba(255,255,255,0.6)',
    fontWeight:'bold',
  },
  overlayParagraph: {
    elevation:1,
    alignSelf:'center',
    fontSize:16,
    fontStyle:'italic',
    color:"#292929",
    textAlign:'center',
    padding:8,
    marginTop:8,
    backgroundColor:'rgba(255,255,255,0.6)',
    fontWeight:'bold',
  },

});

module.exports = ImageOverlay;
