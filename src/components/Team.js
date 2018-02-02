import React, {Component} from 'react';
import {ScrollView, Text} from 'react-native';
import DATA from '../TeamMember';

class Team extends Component {

  componentWillMount(){
    console.log(DATA);
  }



  renderTeam(){
    // return this.state.teammates
  }

  render(){

    return(
    <ScrollView>
      <Text> Team Mates </Text>
    </ScrollView>
    );

  };

};


export default Team;
