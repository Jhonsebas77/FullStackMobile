/*
 * Proyecto: Prueba FullStackMobile.
 * Empresa: Almundo
 * Responsable Proyecto: Sebastian Otalora
 * Responsable Contacto: jhonsebas77@outlook.com | 3217209516
 * Informacion del Hotel en especifico, recibe todas las variables del componente Hotel.js
 */

import React, { Component } from 'react';
import { StyleSheet,TouchableOpacity,ImageBackground,View,ActivityIndicator,Text } from 'react-native';
import { Card,Badge,Divider,Icon } from 'react-native-elements';

export default class Loading extends React.Component<{}> {
  render() {
    return (
        <Card style={styles.container}>
          <Text >Habitaciones</Text>
            <View style={styles.detaContainer}>
              <Icon reverse
                name='users'
                type='font-awesome'
                color='#f50'
              />
              <Badge containerStyle={styles.badge} wrapperStyle={styles.badgeExt}>
                <Text style={styles.badgeText}>{this.props.people}</Text>
              </Badge>
              <Icon reverse
                name='bed'
                type='font-awesome'
                color='#f50'/>
              <Badge containerStyle={styles.badge} wrapperStyle={styles.badgeExt}>
                <Text style={styles.badgeText}>{this.props.bed}</Text>
              </Badge>
              <View style={{padding:10 }}>
                <Divider style={styles.divider}/>
              </View>
            </View>
            <Text>Servicios</Text>
              <View style={styles.detaContainer}>
                <Icon reverse
                  name='wifi'
                  type='font-awesome'
                  color='#f50'
                />
                <Badge containerStyle={styles.badge} wrapperStyle={styles.badgeExt}>
                  <Text style={styles.badgeText}>{this.props.wifi}</Text>
                </Badge>
                <Icon reverse
                  name='tv'
                  type='font-awesome'
                  color='#f50'/>
                <Badge containerStyle={styles.badge} wrapperStyle={styles.badgeExt}>
                  <Text style={styles.badgeText}>{this.props.television}</Text>
                </Badge>
                <View style={{padding:10 }}>
                  <Divider style={styles.divider}/>
                </View>
              </View>
              <TouchableOpacity style={styles.priceContainer}>
                <Text style={{fontSize:16,color:'white'}}>Precio por Noche</Text>
                <Text style={{fontWeight:'bold',fontSize:30,color:'white'}}>${this.props.priceHotel}</Text>
              </TouchableOpacity>
        </Card>

    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#6DA29E'
  },
  detaContainer:{
    padding:5,
    alignItems:'center',
    flex:2,
    flexDirection:'row',
    justifyContent:'center',
  },
  badge:{
    backgroundColor: '#c8c7c8',
  },
  divider:{
    backgroundColor: '#c8c7c8',
  },
  badgeExt:{
    padding:5,
  },
  badgeText:{
    color:'black',
    fontWeight:'bold',
    fontSize:15,
  },
  priceContainer:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'green',
  },
});

module.exports = Loading;
