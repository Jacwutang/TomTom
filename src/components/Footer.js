import React from 'react';
import {Text, View} from 'react-native';

const Footer = (props) => {
  const {textStyle, viewStyle} = styles;
  const {footerTextRight, footerTextLeft} = props;

  return(
    <View style={viewStyle}>
      <Text style={textStyle}> {props.footerTextLeft} </Text>
      <Text> | </Text>
      <Text style={textStyle}> {props.footerTextRight} </Text>
    </View>
  );

};



const styles = {
  textStyle: {
    fontSize: 15,

  },

  viewStyle:{
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    height: 45,
    // paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative',


  }

};



export default Footer;
