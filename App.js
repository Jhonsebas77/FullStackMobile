/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,Button
} from 'react-native';
import api from './utilities/API';


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {
  constructor(props){
    super(props);
    this.state={
      rovers:[],
      roverName:''
    }
  }

  componentWillMount(){
   api.getRovers().then((res)=>{
     this.setState({
       rovers:res.rovers,
       roverName:res.rovers[0].name,
     })
   });
  }

  render() {
    return (
      <View style={styles.container}>
        <Button
          onPress={() => navigation.navigate('Details')}
          title="Recargar"
        />
        <Text style={styles.welcome}>
          Rovers!!!
        </Text>
        <Text style={styles.instructions}>
          Rovers: {this.state.roverName}
        </Text>
        <View>
          {this.state.rovers.map((rovers,i)=> {
  	         return <Text key={i}>{rovers.name} - {rovers.status} - {rovers.cameras[i].name}</Text>
        	})}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
