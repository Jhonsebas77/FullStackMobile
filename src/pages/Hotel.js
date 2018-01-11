'use stric'
import React, { Component } from 'react';
import { Card,Rating,Badge,Divider,Icon } from 'react-native-elements';
import {StyleSheet,FlatList,Image,WebView,Text,ActivityIndicator,View,ScrollView,ImageBackground,TouchableOpacity} from 'react-native';
import ImageOverlay from '../components/ImageOverlay';
import Loading from '../components/Loading';
import HeaderDetail from '../components/HeaderDetail';
import InfoHotel from '../components/InfoHotel';
import DescHotel from '../components/DescHotel';
import {api,apiDetalle} from '../../utilities/API';

export default class Hotel extends React.Component{

  static navigationOptions = ({ navigation }) => ({
    title: "Lista de Hoteles",
    headerTintColor:'#50B19B',
    headerColor:'#50B19B',
  });

  constructor(props){
    super(props);
    this.state={
      hotelsDet:[],
      loaded:false,
    }
  }
  async componentWillMount(){
    let request = this.props.navigation.state.params.item._id;
    let hotelsDet = await apiDetalle(request);
    this.setState({hotelsDet,loaded:true});
  }

   renderLoadingView(){
     return(
       <Loading imageLoading= {require('../img/loadDetails.png')} />
     )
   }

  render() {
    const { navigate } = this.props.navigation;
    if (!this.state.loaded) {
      return this.renderLoadingView();
    }
    return(
      <ScrollView style={{backgroundColor:'#319a83'}}>
        <View>
          <HeaderDetail
            imageHotel = {{uri: this.state.hotelsDet.images}}
            nameHotel = {this.state.hotelsDet.name}
            starsHotel = {this.state.hotelsDet.stars}
            addressHotel = {this.state.hotelsDet.address}
            cityHotel = {this.state.hotelsDet.city}
            countryHotel = {this.state.hotelsDet.country}
            imageMaps = {{uri: this.state.hotelsDet.imageMaps}}
            lat = {this.state.hotelsDet.latitude}
            long = {this.state.hotelsDet.longitude}
           />
         <DescHotel description = {this.state.hotelsDet.description} />
         <InfoHotel
            people = {this.state.hotelsDet.people}
            bed = {this.state.hotelsDet.bed}
            wifi = {this.state.hotelsDet.wifi}
            television = {this.state.hotelsDet.television}
            priceHotel = {this.state.hotelsDet.price}
         />

        </View>
      </ScrollView>
    )
  }
}


//Exportar el modulo
module.exports = Hotel;
