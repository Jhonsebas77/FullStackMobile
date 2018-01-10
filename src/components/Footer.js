'use stric'
import React, { Component } from 'react';
import { SocialIcon } from 'react-native-elements';
import {
  StyleSheet,Text,
  View,Image,TextInput,
  Button,Alert,ScrollView,
  StatusBar,FlatList,KeyboardAvoidingView,
  TouchableOpacity,Link
} from 'react-native';
import MenuItem from './MenuItem';

export default class Footer extends React.Component{
  constructor(props){
      super(props);
  }
  static navigationOptions = ({ navigation }) => ({
     title: ` ${navigation.state.params.user}`,
     headerTintColor: 'green',
   });

  render() {
    return(
      <View style={styles.footerContainer}>
        <View style={styles.info}>
          <FlatList
            data={[
             {key: '• Direccion'},
             {key: '• Cali - Colombia'},
             {key: '• Cel: (321) 720-9516'},
             {key: '• jhonsebas77@outlook.com'},
            ]}
            renderItem={({item}) => <Text style={styles.footerText}>{item.key}</Text>}
          />
        </View>
        <View style={styles.logo}>
          <Image source= {require('../img/Logo.png')} style={styles.cart} />
        </View>
      </View>
    )
  }
}

//Estilos
const styles = StyleSheet.create({
  footerContainer:{
    width:'100%',
    flex:1,
    justifyContent:'center',
    flexDirection:'row',
    flexWrap:'wrap',
    alignItems:'center',
    backgroundColor:'#000000',
  },
  logo:{
    flex:2,
    alignItems:'center',
  },
  info:{
    alignItems:'center',
    width:'100%',
    padding:5,
    flex:2,
    // shadowColor,
    // shadowOffset
    // shadowOpacity
  },

  footerText: {
    color:'white'
  },
  cart: {
    width:'50%',
    height:'50%',
    padding:5,
  },
})

//Exportar el modulo
module.exports = Footer;
