/*
 * Proyecto: Prueba FullStackMobile.
 * Empresa: Almundo
 * Responsable Proyecto: Sebastian Otalora
 * Responsable Contacto: jhonsebas77@outlook.com | 3217209516
 * Descripcion del Hotel en especifico
 */

import React, { Component } from 'react';
import { StyleSheet,View,Text } from 'react-native';
import { Card } from 'react-native-elements';

export default class DescHotel extends React.Component<{}> {
  render() {
    return (
        <View style={styles.extraContainer}>
          <Card title="Descripcion" style={styles.descContainer}>
            <Text>
            {this.props.description}
            </Text>
          </Card>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  extraContainer:{
    flex:1,
    alignItems:'center',
    flexDirection:'column',
    justifyContent:'space-around',
  },
  descContainer:{
    flex:2,
    justifyContent:'space-around',
  },


});

module.exports = DescHotel;
