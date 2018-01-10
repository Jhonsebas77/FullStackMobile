/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 * Si se usa una version mayor a la 0.5 utiliza ImageBackground en vez de
 Image si el componete imagen tiene hijos
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
        {paragraph}
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
