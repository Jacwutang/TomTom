import React, {Component} from 'react';
import {ScrollView, Text} from 'react-native';
import DATA from '../TeamMember';
import TeamMemberDetail from './TeamMemberDetail';

class Team extends Component {

  state = {teammates: []}

  componentWillMount(){
    console.log(DATA);
    this.setState({teammates: DATA});
  }



  renderTeam(){
    return this.state.teammates.map(member =>
      <TeamMemberDetail key={member.id} title={member.title}
      name={member.name}
      thumbnail_image={member.thumbnail_image}/>
    );
  }

  render(){

    return(
    <ScrollView>
      {this.renderTeam()}
    </ScrollView>
    );

  };

};


export default Team;
