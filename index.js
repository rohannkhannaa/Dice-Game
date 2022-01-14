var n1 = Math.floor(Math.random()*6)+1 ;
var source1 = "images/dice"+n1+".png";
var n2 = Math.floor(Math.random()*6)+1 ;
var source2 = "images/dice"+n2+".png";
document.querySelector("img.img1").setAttribute("src", source1);
document.querySelector("img.img2").setAttribute("src", source2);
if(n1>n2)
{
    document.querySelector("h1").innerHTML="🚩Player 1 wins !!";
}
else if (n2>n1)
{
    document.querySelector("h1").innerHTML="Player 2 wins 🚩!!";
}else{
    document.querySelector("h1").innerHTML="Tie !!";
}