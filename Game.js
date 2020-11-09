class Game {
constructor (){}
getState(){
    var gameStateref=database.ref('gameState');
    gameStateref.on("value",function(data){
gameState=data.val();
    })


}

update(state){ database.ref('/').update({ gameState: state }); }
start(){
    if(gameState===0){
player=new Player();
player.getCount()
form=new Form();
form.display();
    }
}
play(){
  form.hide();
  textSize(30);
  text("GAME START",120,30)  
  Player.getPlayerinfo();
  if(allPlayers!==undefined){
var n=130;
for(var i in allPlayers){
   if(i==="player"+player.index)
fill("red")
else
fill("black")
n+=20;
textSize(15)
text(allPlayers[i].name+":"+allPlayers[i].distance,120,n);
  
}
}
if(keyIsDown(UP_ARROW)&&player.index!==null){
    player.ditance+=50;
    player.update();
}
}
}