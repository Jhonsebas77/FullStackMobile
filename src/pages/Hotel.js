'use stric'
import React, { Component } from 'react';
import { Card,Rating,Badge,Divider } from 'react-native-elements';
import {StyleSheet,FlatList,WebView,Text,View,ScrollView,Image,TouchableOpacity} from 'react-native';
import Footer from '../components/Footer';
import ImageOverlay from '../components/ImageOverlay';
import {api,apiDetalle} from '../../utilities/API';

export default class Hotel extends React.Component{

  static navigationOptions = ({ navigation }) => ({
    title: "Lista de Hoteles",
  });

  constructor(props){
      super(props);
      this.state={
        hotelsDet:[],
        loaded:false,
      }
      console.log(this.props);
  }
  async componentWillMount(){

    let hotelsDet = await apiDetalle(this.props.navigation.state.params.item._id);
    this.setState({hotelsDet,loaded:true});
    console.log(hotelsDet);
  }

   renderLoadingView(){
     return(
       <View>
         <Text style={{fontSize:30}}>
           Cargando...
         </Text>
       </View>
     )
   }

  render() {

  if (!this.state.loaded) {
    return this.renderLoadingView();
  }
  console.log(this.state.hotelsDet.name);
    return(
<ScrollView style={styles.containerSlider}>
      <View>
            <Image source= {{uri: this.state.hotelsDet.images}} style={styles.banner} />
            <Card title={this.state.hotelsDet.name} style={styles.container}>
                <View style={styles.starContainer}>
                  <Rating type='custom' imageSize={20} readonly startingValue={this.state.hotelsDet.stars}
                    ratingBackgroundColor='#c8c7c8'
                  />
                </View>
                <View style={styles.infoContainer}>
                  <View style={styles.addressContainer}>
                    <Text style={styles.textFirstLine}>Direccion: </Text>
                    <Text style={styles.textSecondLine}>{this.state.hotelsDet.address} </Text>
                  </View>
                  <View style={styles.numberContainer}>
                    <Text style={styles.textFirstLine}>Telefono: </Text>
                    <Text style={styles.textSecondLine}>{this.state.hotelsDet.number} </Text>
                  </View>
                </View>
                  <TouchableOpacity style={styles.priceContainer}>
                    <Text style={{fontSize:16,color:'white'}}>Precio por Noche</Text>
                    <Text style={{fontWeight:'bold',fontSize:30,color:'white'}}>${this.state.hotelsDet.price}</Text>
                  </TouchableOpacity>
          </Card>
          <View style={styles.extraContainer}>
            <Card title="Detalles" style={styles.descContainer}>
              <Text>
              {this.state.hotelsDet.description}
              </Text>
              <View style={{padding:10 }}>
                <Divider style={styles.divider}/>
              </View>
              <Text style={styles.textFirstLine} >Lugares para dormir</Text>
                <View style={styles.detaContainer}>
                  <Badge containerStyle={styles.badge} wrapperStyle={styles.badgeExt}>
                    <Text style={styles.badgeText}> 2 Personas</Text>
                  </Badge>
                  <Badge containerStyle={styles.badge} wrapperStyle={styles.badgeExt}>
                    <Text style={styles.badgeText}> 1 Cama</Text>
                  </Badge>
              </View>
              <View style={{padding:10 }}>
                <Divider style={styles.divider} />
              </View>
              <Text style={styles.textFirstLine} >Servicios</Text>
                <View style={styles.detaContainer}>
                  <Badge containerStyle={styles.badge} wrapperStyle={styles.badgeExt}>
                    <Text style={styles.badgeText}> Wifi</Text>
                  </Badge>
                  <Badge containerStyle={styles.badge} wrapperStyle={styles.badgeExt}>
                    <Text style={styles.badgeText}> Tv Por Cable</Text>
                  </Badge>
                  <Badge containerStyle={styles.badge} wrapperStyle={styles.badgeExt}>
                    <Text style={styles.badgeText}> 2 Banos</Text>
                  </Badge>
              </View>
            </Card>
          </View>






      </View>
</ScrollView>

    )
  }
}

//Estilos
const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    padding:10,
    backgroundColor:'#6DA29E'
  },
  containerSlider:{

    backgroundColor:'#6DA29E'
  },
  banner: {
    width:'100%',
    alignItems:'center',
    justifyContent:'center',
    height:200,
  },
  textFirstLine: {
    fontWeight:'bold',
    fontSize:20,
    padding:5
  },
  textSecondLine: {
    fontWeight:'bold',
    fontSize:16,
    padding:5
  },
  addressContainer:{
    flex:1,
    justifyContent:'center',
    padding:10,
    alignItems:'center',
  },
  infoContainer:{
    flex:1,
    justifyContent:'space-around',
    padding:10,
    flexDirection:'row',
  },
  numberContainer:{
    flex:1,
    justifyContent:'center',
    padding:10,
    alignItems:'center',
  },
  priceContainer:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'green',
  },
  starContainer:{
    flex:1,
    justifyContent:'center',
    padding:10,
    alignItems:'center',
  },
  extraContainer:{
    flex:1,
    alignItems:'center',
    flexDirection:'column',
    justifyContent:'space-around',
  },
  detaContainer:{
    padding:5,
    alignItems:'center',
    flex:2,
    flexDirection:'row',
    justifyContent:'space-around',
  },
  descContainer:{
    flex:2,
    justifyContent:'space-around',
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

})

//Exportar el modulo
module.exports = Hotel;
