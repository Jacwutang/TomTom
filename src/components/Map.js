import React, {Component} from 'react';
import { View, Text } from 'react-native';
import Header from './Header';


class Map extends Component {

  constructor(props){
    super(props);
    this.state = {};
  }

  componentWillMount(){

  }



  render(){

    return(
      <View>
        <Header headerText="Back" />
      </View>
    );

  };



};


const styles = {

};


export default Map;
