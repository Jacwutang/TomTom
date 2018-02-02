import {RECEIVE_TEAM_MEMBERS} from '../actions/TeamMemberActions';

const TeamMemberList = {
  {
    "name": "Jack Wu"
  }

};

const TeamMembersReducer = (state = {}){
  Object.freeze(state);

  return Object.assign({}, state, TeamMemberList);


};

export default TeamMembersReducer;
