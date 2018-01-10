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
      loaded:false,
    }
    console.log(this.props);
  }
  async componentWillMount(){
    console.log(this.props);
    let hotels = await api();
    this.setState({hotels});
    this.setState({
      loaded:true,
    });
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

  render() {
    const { navigate } = this.props.navigation;
    if (!this.state.loaded) {
      return this.renderLoadingView();
    }
    return (
      <ScrollView style={styles.container}>
        <Banner/>
        <SearchBar
          reverse
          icon={{name: 'search', color: 'white'}}
          placeholder='¿Conoces el nombre del Hotel ?' />
          <View style={styles.contentContainer}>
            <View style={styles.col1}>
              <FlatList
                data={this.state.hotels}
                keyExtractor={(x,i)=>i}
                renderItem={
                  ({item})=>
                    <TouchableOpacity style={{padding:5}} title="Hoteles"
                      // onPress={() => this.onHotelPressed(item)}
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
