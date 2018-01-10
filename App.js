import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import HomeScreen from './src/pages/HomeScreen';
import Hotel from './src/pages/Hotel';

const HomeScreenMain = StackNavigator({
  Home: { screen: HomeScreen },
  HotelDetail: { screen: Hotel },
});

export default class App extends React.Component<{}> {
  constructor(props){
    super(props);
    console.log(this.props)
  }
  render() {
    return ( <HomeScreenMain/> );
  }
}
