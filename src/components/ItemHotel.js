import React, { Component } from 'react';
import {StyleSheet,ImageBackground,Text,View,TouchableOpacity,Image} from 'react-native';
import ImageOverlay from './ImageOverlay';
import { Tile,Avatar,PricingCard,Rating,Card } from 'react-native-elements';

export default class ItemHotel extends React.Component<{}> {

  render() {
    return (
        <View  style={styles.container}>
          <View style={styles.contentContainer}>
            <View style={styles.colImage}>
              <Image source= {this.props.imageHotel} style={styles.image} />
            </View>
            <View style={styles.colText}>
              <Text style={{fontWeight:'bold',fontSize:20}}>{this.props.nombreHotel}</Text>
              <Text style={{fontSize:16}}>{this.props.country}</Text>
              <Text style={{fontSize:16}}>{this.props.city}</Text>
              <Rating
                type='custom'
                imageSize={20}
                readonly
                startingValue={this.props.stars}
                ratingBackgroundColor='#c8c7c8'
              />
            </View>
            <View style={styles.colPrice}>
              <Text style={{fontSize:16}}>Precio por Noche</Text>
              <Text style={{fontWeight:'bold',fontSize:30}}>$ {this.props.price}</Text>
            </View>
          </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection:'row',
    borderColor:'rgba(0,0,0,0.5)',
    borderWidth:0.5,
    backgroundColor:'#FFFFFF'
  },
  contentContainer: {
    flex:1,
    flexDirection:'row',
    justifyContent:'center',
  },
  colImage: {
    flex:3,
    justifyContent:'space-around',
  },
  colText: {
    flex:2,
    padding:10,
    justifyContent:'space-around',
  },
  colPrice: {
    flex:2,
    padding:5,
    justifyContent:'center',
  },
  image: {
    width:200,
    height:200,
    alignItems:'center',
    justifyContent:'center'
  },
});

module.exports = ItemHotel;
