import React, { Component } from 'react';
import {StyleSheet,ImageBackground,Text,View,TouchableOpacity} from 'react-native';
import ImageOverlay from './ImageOverlay';
import { Tile,Avatar,PricingCard,Rating } from 'react-native-elements';

export default class CustomImage extends React.Component<{}> {

  render() {
    return (
        <ImageBackground source= {this.props.imageSource} style={styles.image}>
          {/* <ImageOverlay header={this.props.header} paragraph={this.props.paragraph} /> */}
          <View style={styles.contentContainer}>
            <View style={styles.col1}>
              <Avatar
                xlarge
                source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg"}}
                onPress={() => console.log("Works!")}
                activeOpacity={0.7}
              />
              <Rating
                type='custom'
                imageSize={20}
                readonly
                startingValue={3}
                ratingBackgroundColor='#c8c7c8'
              />
            </View>
            <View style={styles.col1}>
              <PricingCard
                color='#E73000'
                title='Hotel'
                price='$0'
                info={['1 Habitacion', 'Basic Support', 'All Core Features']}
                button={{ title: 'Detalles', icon: 'flight-takeoff' }}
              />
            </View>
          </View>
        </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  contentContainer: {
    flexDirection:'row',
    flexWrap:'wrap',
    padding:5,
  },
  col1: {
    flex:2,
    padding:5,
    justifyContent:'space-around',
  },
  image: {
    width:'100%',
    height:400,
    alignItems:'center',
    justifyContent:'center',
  },
});

module.exports = CustomImage;
