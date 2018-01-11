import React, { Component } from 'react';
import { StyleSheet,ImageBackground,View,ActivityIndicator } from 'react-native';

export default class Loading extends React.Component<{}> {
  render() {
    return (
      <View style={{alignItems:'center'}}>
        <ImageBackground source= {this.props.imageLoading} style={styles.loading}>
          <View style={styles.containerActivity}>
            <ActivityIndicator size="large" color='white' />
          </View>
        </ImageBackground>
     </View>
    );
  }
}

const styles = StyleSheet.create({
  containerActivity:{
    position:'absolute',
    right:'50%',
    top:'50%'
  },
  loading:{
    width:'100%',
    height:'100%',
  }
});

module.exports = Loading;
