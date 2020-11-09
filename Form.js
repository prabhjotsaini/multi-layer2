class Form{
    constructor(){
        this.input=createInput('NAME');
         this.button=createButton('game Start')
        this.greeting=createElement('h3');
    }
    hide(){
    this.input.hide();
    this.button.hide();
    this.greeting.hide();
    }
    display(){
var title=createElement('h2');
title.html("car racing game")
title.position(130,0);


this.input.position(130,60);
this.button.position(250,200);
this.button.mousePressed(()=>{
    this.input.hide()
    this.button.hide()
   player.name= this.input.value();
    playerCount=playerCount+1
    player.index=playerCount;
    player.update();
    player.updateCount(playerCount);
   this.greeting.html("hello"+player.name)
this.greeting.position(130,160);
})

    }
}