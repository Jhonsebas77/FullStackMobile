import React, { Component } from 'react';
import { StyleSheet,Image,ImageBackground,View,Text } from 'react-native';
import { Rating } from 'react-native-elements';
import ImageOverlay from '../components/ImageOverlay';

export default class HeaderDetails extends React.Component<{}> {
  render() {
    return (
      <View >
        <ImageBackground source= {this.props.imageHotel} style={styles.banner} >
          <View style={{padding:5,alignItems:'center',}}>
              <ImageOverlay header={this.props.nameHotel} style={{marginBottom:10}}/>
              <View style={styles.starContainer}>
                <Rating type='custom' imageSize={20} readonly
                  startingValue={this.props.starsHotel}
                  ratingBackgroundColor='#c8c7c8' style={{padding:10}}
                />
            </View>
          </View>
        </ImageBackground>
        <View style={styles.locationContainer}>
          <View style={styles.infoAddressContainer}>
              <Text style={styles.textDirection}>
                {this.props.addressHotel}
              </Text>
              <Text style={styles.textDetailDir}>
                {this.props.cityHotel},
                {this.props.countryHotel}
              </Text>
          </View>
          <View style={styles.mapContainer}>
            <Image  source= {this.props.imageMaps} style={styles.mapView} />
          </View>
        </View>
     </View>
    );
  }
}

const styles = StyleSheet.create({
  banner: {
    width:'100%',
    alignItems:'center',
    justifyContent:'center',
    height:200,
  },
  starContainer:{
    backgroundColor:'#fff',
    borderRadius:50,
    borderColor:'#ccc',
  },
  locationContainer:{
    flex:1,
    flexDirection:'row',
    flexWrap:'wrap',
    backgroundColor:'#EFFEFE'
  },
  infoAddressContainer:{
    flex:2,
    backgroundColor:'#50B19B',
    flexDirection:'column',
    flexWrap:'wrap',
    justifyContent:'space-around',
    alignItems:'center',
  },
  textDirection: {
    fontWeight:'bold',
    fontSize:18,
    padding:5,
    color:'white',
  },
  textDetailDir: {
    fontSize:16,
    padding:6,
    color:'white',
  },
  mapContainer:{
    flex:3,
    width:'100%'
  },
  mapView:{
    width:'100%',
    alignItems:'center',
    justifyContent:'center',
    height:100,
  },
});

module.exports = HeaderDetails;
