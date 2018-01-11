import React, { Component } from 'react';
import { StyleSheet,Image,ImageBackground,TouchableOpacity,View,Text } from 'react-native';
import { Rating } from 'react-native-elements';
import ImageOverlay from '../components/ImageOverlay';
import MapView from 'react-native-maps';

export default class HeaderDetails extends React.Component<{}> {
  render() {
    console.log(this.props);
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
            <MapView style={styles.map}
                region={{
                  latitude:this.props.lat,
                  longitude: this.props.long,
                  latitudeDelta: 0.0009,
                  longitudeDelta: 0.0009,
                }}>
                <MapView.Marker
                 coordinate={{
                   latitude:this.props.lat,
                   longitude: this.props.long,
                  }}
                 title="Prueba"
                 description="Otra Prueba"
               />
            </MapView>
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
    alignItems:'flex-start',
    padding:10,
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
    position:'absolute',
    top:0,
    left:'40%',
    bottom:0,
    right:0,
    justifyContent:'flex-end',
    alignItems:'center'
  },
  mapView:{
    width:'100%',
    alignItems:'center',
    justifyContent:'center',
    height:100,
  },
  map: {
    position:'absolute',
    top:0,
    left:0,
    bottom:0,
    right:0
  },
});

module.exports = HeaderDetails;
