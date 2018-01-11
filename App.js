import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import HomeScreen from './src/pages/HomeScreen';
import Hotel from './src/pages/Hotel';
import MapsView from './src/pages/MapsView';

const HomeScreenMain = StackNavigator({
  Home: { screen: HomeScreen },
  HotelDetail: { screen: Hotel },
  MapsView: { screen: MapsView },
});

export default class App extends React.Component<{}> {
  constructor(props){
    super(props);
  }
  render() {
    return ( <HomeScreenMain/> );
  }
}
