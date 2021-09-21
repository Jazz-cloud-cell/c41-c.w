class Player {
  constructor(){
    this.index = null;
    this.distance = 0;
    this.name = null;
    this.rank=null;
  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",(data)=>{
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count, 
      finishedPlayer:0
    });
  }

  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
      distance:this.distance
    });
  }

  static getPlayerInfo(){
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value",(data)=>{
      allPlayers = data.val();
    })
  }

  getFinishedPlayers()
  {
   var finishplr = database.ref('finishedPlayer');
  finishplr.on("value", (data)=>{
    this.rank= data.val();
  })
    
  }

  static updateFinishedPlayers(count){

      database.ref('/').update({
        finishedPlayer: count
      });
  
    
  }

  //player.getFinishedPlayers()
}
