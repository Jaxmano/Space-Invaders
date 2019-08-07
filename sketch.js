let x1=300;
let x2 = 250;
let x3 = 350;
let bulletY = 430;

function setup(){-
   createCanvas(600,600);
}

 function mouseClicked({clientX,clientY}){
    
 }

function keyPressed({clientX,clientY}){
    if(keyCode === 32){
        bullet();
    }
   
   if(keyCode === LEFT_ARROW){
    x1-=20;
    x2-=20;
    x3-=20;
    }
    if(keyCode === RIGHT_ARROW){
        x1+=20;
        x2+=20;
        x3+=20;
    }
}

function makeEnemy(){
fill('limegreen');
   ellipse(90, 90, 80, 80);
   ellipse(180, 90, 80, 80);
   ellipse(270, 90, 80, 80);
   ellipse(360, 90, 80, 80);
   ellipse(450, 90, 80, 80);
   ellipse(90, 180, 80, 80);
   ellipse(180, 180, 80, 80);
   ellipse(270, 180, 80, 80);
   ellipse(360, 180, 80, 80);
   ellipse(450, 180, 80, 80);
}
function bullet(){
    fill('blue');
 rect(x1 ,bulletY,10,40);
}
function draw(){
   background('black');
   drawBullet();
   makeEnemy();
   fill('red');
   rect(460, 400, 70, 30);
    rect(300, 400, 70, 30);
    rect(140, 400, 70, 30);
    triangle(x1,500,x2,550,x3,550);
}

let j=1;
function drawBullet(){
    if(keyCode == 32){
        if(j=1){
        
        bullet(); 
        if(bulletY > -40 ){
            bulletY -= 10;
        } else if(keyCode == 32){
            // setTimeout(time, 5000)
            bulletY = 430;
            
        }
        j=2;
    }
    }
} 


setInterval(function(){ alert("Game Over! Restart the page."); }, 100000);