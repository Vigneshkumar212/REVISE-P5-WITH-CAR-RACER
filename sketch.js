var player;
var ob1,ob10,ob2,ob3,ob4,ob5,ob6,ob7,ob8,ob9;
var x = 400,y;
var GameState = "play"
var back
var player_img;
var fr=0,x1=0,x2=0
var rn=0,ob_img
var ys = 0;
var life = 5;
var life1,life2,life3,life4,life5
var lifes
var car1 = "play",car2= "play",car3= "play",car4= "play",car5= "play",car6= "play",car7= "play",car8= "play",car9= "play",car10= "play";
var finishline,line;
var score = 50 ,end_img,end_lose,end_win;
var carz1 = "play",carz2= "play",carz3= "play",carz4= "play",carz5= "play",carz6= "play",carz7= "play",carz8= "play",carz9= "play",carz10= "play";

function preload(){
  back = loadImage("images/track.png");
  player_img = loadImage("images/car3.png");
  ob_img = loadImage("images/car1.png");
  lifes = loadImage("images/lives.png");
  line = loadImage("images/lines.png");
  end_lose = loadImage("images/lose.png");
  end_win = loadImage("images/win.png");
}

function setup(){
  createCanvas(600,620);
  
  finishline = createSprite(295,-100,50,50);
  x = 10000;
  y = 12000;
  rn = random(0,1);
  
  x1 = 370;
  x2 = 200;
  
  ob1 = createSprite(x1,12000-1200,100,100);
  ob2 = createSprite(x2,12000-2370,100,100);
  ob3 = createSprite(x1,12000-3600,100,100);
  ob4 = createSprite(x2,12000-4800,100,100);
  ob5 = createSprite(x1,12000-6000,100,100);
  ob6 = createSprite(x2,12000-7200,100,100);
  ob7 = createSprite(x1,12000-8370,100,100);
  ob8 = createSprite(x2,12000-9600,100,100);
  ob9 = createSprite(x1,12000-10800,100,100);
  ob10 = createSprite(100,12000-12000,100,100);

  life1 = createSprite(50,550);
  life2 = createSprite(100,550);
  life3= createSprite(150,550);
  life4 = createSprite(200,550);
  life5 = createSprite(250,550);

  ob1.x = 100;
  ob2.x = x2;
  ob3.x = x1;
  ob4.x = x2;
  ob5.x = x1;
  ob6.x = x2;
  ob7.x = x1;
  ob8.x = x2;
  ob9.x = x1;
  ob10.x = x2;

  player = createSprite(x,12000,50,50);
  end_img = createSprite(300,y,0.005,0.005)

}


function draw(){
  fill("black")

  fr +=1;
  if(fr < 10){
    x = 400;
  }
  
  background("white");
  image(back,0,-600,600,displayHeight*20);
      
  images();

  checkout_in();

  //to move the cam with the player
  camera.position.y = y-200;
  
  //player's movement
  player.x = x;
  player.y = y;

  life1.y = y - 475;
  life2.y = y - 475;
  life3.y = y - 475;
  life4.y = y - 475;
  life5.y = y - 475;

  end_img.y = y - 200;
  textStyle(BOLD);
  textSize(50);
  text("Score : "+score,350,y-425);

  
  moving();

  // to make the player move to left and right when gone out of screen
  if (x < 0){
    x = 600;
  }
  if (x > 600){
    x = 1;
  }
  if (life<5){
    life5.x = 13000;
  }
  if (life<4){
    life4.x = 13000;
  }
  if (life<3){
    life3.x = 13000;
  }
  if (life<2){
    life2.x = 13000;
  }
  if (life<1){
    life1.x = 13000;
  }

  //game ending
  if (y ===  0){
    x = 370;
    GameState = "end";
    end_img.addImage("win",end_win);
  }
  if (life === 0){
    x = 370;
    GameState = "lose"; 
    end_img.addImage("win",end_lose);
  }

  drawSprites();
}

