const team = {
  members: ['Jane', 'Bill'],
  teamName: 'Super Squad',
  // teamSummary: function () {
  //   return this.members.map(function (member) {
  //     return `${member} is on team ${this.teamName}`;
  //   });
  // },

  teamSummary: function () {
    return this.members.map(member => {
      return `${member} is on team ${this.teamName}`;
    });
  },
};

team.teamSummary();
