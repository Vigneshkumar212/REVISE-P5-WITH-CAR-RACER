function moving(){
    if (keyIsDown(39)&& GameState === "play"){
        //right
        x = x + 25;
      }
      if (keyIsDown(37)&& GameState === "play"){
        //left
        x = x - 25;
      }
      if (keyIsDown(38)&& GameState === "play"){
        y = y - 30;
        ys = ys+1
    
        life1.y = y - 425
        life2.y = y - 425
        life3.y = y - 425
        life4.y = y - 425
        life5.y = y - 425
      }

}