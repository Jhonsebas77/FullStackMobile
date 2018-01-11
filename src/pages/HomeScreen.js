/*
 * Proyecto: Prueba FullStackMobile.
 * Empresa: Almundo
 * Responsable Proyecto: Sebastian Otalora
 * Responsable Contacto: jhonsebas77@outlook.com | 3217209516
 * Vista principal
 */
import React, { Component } from 'react';
import {ScrollView,StyleSheet,View,ActivityIndicator,Text,ImageBackground,TouchableOpacity,Image,FlatList} from 'react-native';
import { SearchBar,Card,Header } from 'react-native-elements';
import Banner from '../components/Banner';
import Hotel from './Hotel';
import ItemHotel from '../components/ItemHotel';
import Loading from '../components/Loading';
import {api,apiDetalle} from '../../utilities/API';

export default class HomeScreen extends React.Component<{}> {
  static navigationOptions = {
    header:false,
  };

  //Asignamos las propiedades inciales para nuestro State
  constructor(props){
    super(props);
    this.state={
      hotels:[],
      hotelsSearch:[],
      loaded:false,
      text:'',
      noData:false,
    }
  }

  //Metodo propio de React que teniendo en cuenta el ciclo de vida se cargara antes de renderizar, permitiendo asi realizar la peticion al API
  async componentWillMount(){
    let hotels = await api();
    this.setState({hotels,loaded:true,hotelsSearch:hotels});
    console.log(hotels);
  }
  //Metodo que retorna una vista de carga
  renderLoadingView(){
    return(
      <Loading imageLoading= {require('../img/loadHotels.png')} />
    )
  }

  /*
   * Filtro de Busqueda, recibe el Texto del SearchBar
   * compara las dos cadenas de texto y retorna un valor
   * con el cual podemos tomar desiciones
   *
   * ademas se realizan otras validaciones para permitir retornar
   la busqueda sin afectar la lista original
   */
  filterSearch(text){
    const newData = this.state.hotelsSearch.filter(function (item){
      const itemData = item.name.toUpperCase()
      const textData= text.toUpperCase()
      return itemData.indexOf(textData) > -1
    })

    // Si no coinciden y el texto es vacio retorne la lista original
    if (!text || text === '') {
        this.setState({
          hotelsSearch:this.state.hotels,
          text:''
        })
      }
       // Si no coincide ningun dato retorne la lista original
       else if (!Array.isArray(newData) && !newData.length) {
        this.setState({
          hotelsSearch:this.state.hotels,
          noData: true
        })
      }
      // Si el nombre coincide retorna los valores necesarios y lo pasa al FlatList
      // done mapea los datos y le asigna un indice para poderlo visualizar

      else if (Array.isArray(newData)) {
        this.setState({
          noData: false,
          hotelsSearch:newData,
          text:text
        })
      }
  }

  render() {
    const { navigate } = this.props.navigation;
    if (!this.state.loaded) {
      return this.renderLoadingView();
    }
    return (
      <ScrollView style={styles.container}>
        <Banner/>
        <SearchBar
          lightTheme
          round
          icon={{name: 'search', color: 'white'}}
          placeholder=' ¿Conoces el nombre del Hotel?'
          onChangeText= {(text)=>this.filterSearch(text)}
          value={this.state.text}
         />
        <View style={styles.contentContainer}>
          <View style={styles.col1}>
            <FlatList
              data={this.state.hotelsSearch}
              keyExtractor={(x,i)=>i}
              renderItem={
                ({item})=>
                  <TouchableOpacity
                    style={{padding:5}}
                    title="Hoteles"
                    onPress={() => navigate('HotelDetail', {item})}>
                      <ItemHotel
                        imageHotel={{uri: item.images}}
                        nombreHotel={item.name}
                        country={item.country}
                        city={item.city}
                        stars= {item.stars}
                        price={item.price}
                      />
                  </TouchableOpacity>
              }
            />
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#6DA29E'
  },
  contentContainer: {
    flexDirection:'row',
    flexWrap:'wrap',
    padding:5,
  },
  col2: {
    flex:3,
    padding:5,
  },
  col1: {
    flex:2,
    padding:5,
    justifyContent:'space-around',
  },
  contentBanner: {
    width:'100%',
    alignItems:'center',
    justifyContent:'center',
    flexDirection:'column',
  },
});

module.exports = HomeScreen;
