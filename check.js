function checkout_in(){


  if (player.x>0&&player.x<251  && player.y<11050 &&player.y>10550 && car1 ==="play"){
    console.log("hum");//
    car1 =""
    life -=1
    score -= 10;
  }

  if (player.x>52&&player.x<350  && player.y<9900 &&player.y>9350 && car10 ==="play"){
    console.log("hum"); //
    car10 =""
    life -=1
    score -= 10;
  }
  if (player.x>226&&player.x<526  && player.y<8650 &&player.y>8100 && car2 ==="play"){
    console.log("hum"); 
    car2 =""
    life -=1
    score -= 10;
  }
  if (player.x>52&&player.x<350  && player.y<7450 &&player.y>6950 && car3 ==="play"){
    console.log("hum"); 
    car3 =""
    life -=1
    score -= 10;
  }
  if (player.x>226&&player.x<526  && player.y<6250 &&player.y>5700 && car4 ==="play"){
    console.log("hum"); 
    car4 =""
    life -=1
    score -= 10;
  }
  if (player.x>52&&player.x<350  && player.y<5050 &&player.y>4550 && car5 ==="play"){
    console.log("hum"); 
    car5 =""
    life -=1
    score -= 10;
  }
  if (player.x>226&&player.x<526  && player.y<3900 &&player.y>3350 && car6 ==="play"){
    console.log("hum"); 
    car6 =""
    life -=1
    score -= 10;
  }
  if (player.x>52&&player.x<350  && player.y<2650  &&player.y>2150 && car7 ==="play"){
    console.log("hum");
    car7 ="" 
    life -=1
    score -= 10;
  }
  if (player.x>226&&player.x<526  && player.y<1450 &&player.y>900 && car8 ==="play"){
    console.log("hum"); 
    car8 =""
    life -=1
    score -= 10;
  }
  if (player.x>52&&player.x<350  && player.y<190 && car9 ==="play" ){
    console.log("hum"); 
    car9 =""
    life -=1
    score -= 10;
  } 

  if (player.y<190 && car9 ==="play" ){ 
    car9 =""
    score +=30
  } 

  if (player.y<900 && car8 ==="play"){

    car8 =""
    score +=30
  }
  
  if (player.y<1250 && car7 ==="play"){

    car7 =""
    score +=30
  }


  if (player.y<3350 && car6 ==="play"){

    car6 =""
    score +=30
  }

  if (player.y<4550 && car5 ==="play"){

    car5 =""
    score +=30
  }

  if (player.y<5700 && car4 ==="play"){

    car4 =""
    score +=30
  }

  if (player.y<6950 && car3 ==="play"){

    car3 =""
    score +=30
  }

  
  if (player.y<8100 && car2 ==="play"){

    car2 =""
    score +=30
  }


  if (player.y<9350 && car10 ==="play"){

    car10 =""
    score +=30
  }

  if (player.y<10550 && car1 ==="play"){

    car1 =""
    score +=30
  }


}
