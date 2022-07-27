var randomnumber1=(Math.random()*10)%6;
randomnumber1=Math.ceil(randomnumber1);

var randomnumber2=(Math.random()*10)%6;
randomnumber2=Math.ceil(randomnumber2);

const arr=["./images/dice1.png","./images/dice2.png","./images/dice3.png","./images/dice4.png","./images/dice5.png","./images/dice6.png"];

b1=document.querySelector("img.img1");
b1.setAttribute("src",arr[randomnumber1-1]);

b2=document.querySelector("img.img2");
b2.setAttribute("src",arr[randomnumber2-1]);

h=document.querySelector("h1");

if(randomnumber1>randomnumber2){
    h.innerHTML="Player 1 WINS";
}
else if(randomnumber1<randomnumber2){
    h.innerHTML="Player 2 WINS";
}
else{
    h.innerHTML="DRAW";
}