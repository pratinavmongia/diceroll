// alert("Refreshing the page makes both the dice roll randomly");
/*
var imgArray = new Array();
imgArray[0]= new Image();
imgArray[0].src= "images\dice1.png";
imgArray[1]= new Image();
imgArray[1].src = 'C:\Users\prati\Desktop\web dev course\Dicee Challenge - Starting Files\Dicee Challenge - Starting Files\images\dice2.png';
imgArray[2]= new Image();
imgArray[2].src = 'C:\Users\prati\Desktop\web dev course\Dicee Challenge - Starting Files\Dicee Challenge - Starting Files\images\dice3.png';
imgArray[3]= new Image();
imgArray[3].src = 'C:\Users\prati\Desktop\web dev course\Dicee Challenge - Starting Files\Dicee Challenge - Starting Files\images\dice4.png';
imgArray[4]= new Image();
imgArray[4].src = 'C:\Users\prati\Desktop\web dev course\Dicee Challenge - Starting Files\Dicee Challenge - Starting Files\images\dice5.png';
imgArray[5]= new Image();
imgArray[5].src = 'C:\Users\prati\Desktop\web dev course\Dicee Challenge - Starting Files\Dicee Challenge - Starting Files\images\dice6.png';

var i;
i=Math.random()*6;
i=Math.floor(i);

var j;
j=Math.random()*6;
j=Math.floor(j);

document.getElementsByClassName("img1").setAttribute("src","imgArray[i]");
document.getElementsByClassName("img2").setAttribute("src","imgArray[j]");
*/

var randomNumber1= Math.floor(Math.random()*6)+1;
var randomNumber2= Math.floor(Math.random()*6)+1;
var randomDiceImage="images/dice"+ randomNumber1+".png";
var randomDiceImage2="images/dice"+ randomNumber2+".png";
document.querySelectorAll("img")[0].setAttribute("src",randomDiceImage);
document.querySelectorAll("img")[1].setAttribute("src",randomDiceImage2);

if(randomNumber1>randomNumber2)
{
  document.querySelector("h1").innerHTML="Player 1 Wins!";
}

else if(randomNumber1<randomNumber2){
  document.querySelector("h1").innerHTML="Player 2 Wins!";
}

else
{
  document.querySelector("h1").innerHTML="It's A Tie!";
}
