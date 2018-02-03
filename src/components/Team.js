import React, {Component} from 'react';
import {ScrollView, Text} from 'react-native';
import DATA from '../TeamMember';
import TeamMemberDetail from './TeamMemberDetail';
import Header from './Header';
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
      thumbnail_image={member.thumbnail_image}
      github_url={member.github_url}
      linkedin_url={member.linkedin_url}
      />
    );
  }

  render(){

    return(
    <ScrollView>
      <Header headerText="Meet the Team"/>
      {this.renderTeam()}
    </ScrollView>
    );

  };

};

const styles = {

};

export default Team;
