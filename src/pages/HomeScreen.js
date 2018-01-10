import React, { Component } from 'react';
import {ScrollView,StyleSheet,View,Text,ImageBackground,TouchableOpacity,Image,FlatList} from 'react-native';
import { SearchBar,Card,Header } from 'react-native-elements';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import Hotel from './Hotel';
import ItemHotel from '../components/ItemHotel';
import {api,apiDetalle} from '../../utilities/API';

export default class HomeScreen extends React.Component<{}> {
  static navigationOptions = {
    header:false,
  };
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
  async componentWillMount(){
    let hotels = await api();
    this.setState({hotels,loaded:true,hotelsSearch:hotels});
    console.log(hotels);
  }
  renderLoadingView(){
    return(
      <View>
        <Banner/>
        <SearchBar
          reverse
          icon={{name: 'search', color: 'white'}}
          placeholder='Cargando...' />
        <Text style={{fontSize:30}}>
          Cargando...
        </Text>
      </View>
    )
  }

  filterSearch(text){

    const newData = this.state.hotelsSearch.filter(function (item){
      const itemData = item.name.toUpperCase()
      const textData= text.toUpperCase()
      console.log( itemData.indexOf(textData))
      return itemData.indexOf(textData) > -1
    })

 // if no match and text is empty
      if (!text || text === '') {
          this.setState({
          hotelsSearch:this.state.hotels,
          text:''
          })
          console.log("Inicial hotelsSearch: "+this.state.hotelsSearch)
          console.log("Inicial: "+this.state.hotels)
        }
         // if no name matches to text output
         else if (!Array.isArray(newData) && !newData.length) {
          // set no data flag to true so as to render flatlist conditionally
          this.setState({
            hotelsSearch:this.state.hotels,
            noData: true
          })
          console.log("Intermedio: "+this.state.hotels)
        }
// if name matches then display
        else if (Array.isArray(newData)) {
          this.setState({
            noData: false,
            hotelsSearch:newData,
            text:text
          })
        }
    console.log("Despues hotelsSearch: "+this.state.hotelsSearch)
    console.log("Despues: "+this.state.hotels)
  }

  getDataAgain(){
    console.log("Hola Mundo")
    let hotels = api();
    this.setState({hotels});
    console.log("Adios Mundo")
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
          round
          reverse
          icon={{name: 'search', color: 'white'}}
          placeholder='¿Conoces el nombre del Hotel ?'
          onChangeText= {(text)=>this.filterSearch(text)}
          onClearText=  {()=>this.getDataAgain()}
          value={this.state.text}
         />
          <View style={styles.contentContainer}>
            <View style={styles.col1}>

{this.props.noData ? <Text>Sin Datos</Text> :
              <FlatList
                data={this.state.hotelsSearch}
                keyExtractor={(x,i)=>i}
                renderItem={
                  ({item})=>
                    <TouchableOpacity style={{padding:5}} title="Hoteles"
                      onPress={() => navigate('HotelDetail', {item})}
                      >
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
              />}
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
