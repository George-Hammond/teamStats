const team = {
    _players: [{
      firstName: 'Antonio',
      lastName: 'Ruediger',
      age: 28, 
    },{
      firstName:'Thiago',
      lastName: 'Silva',
      age: 36
    },{
      firstName: 'Mason',
      lastName: 'Mount',
      age: 22
    }],
    _games: [{
      opponent: 'Liverpool',
      teamPoint: 18,
      opponentPoints: 22
    }, {
      opponent: 'Manchester City',
      teamPoint: 20,
      opponentPoint: 18
    },{
      opponent: 'Tottenham',
      teamPoint: 14,
      opponentPoint: 15
    }],
    get players(){
        return this._players;
    },
    get games(){
      return this._games;
      },
    addPlayer(firstName, lastName, age){
      let player = {
        firstName: firstName,
        lastName: lastName,
        age: age
      };
    
     this.players.push(player)
      },
    addGame(opponent, teamPoint, opponentsPoint){
      let game = {
        opponent: opponent,
        teamPoint: teamPoint,
        opponentsPoint: opponentsPoint
      };
      this.games.push(game);
    }
    };
    
    team.addPlayer('Hakim', 'Ziyech', 28);
    team.addPlayer('Christian','Pulisic', 22);
    team.addGame('Arsenal', 11, 16);
    team.addGame('WolverHampton',10, 21)
    
    console.log(team._players)
    console.log(team._games)