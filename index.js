var inputini= document.querySelector(".input-initial");
var inputqua =document.querySelector(".input-quantity");
var btnCheck = document.querySelector("#check-btn");
var inputou =document.querySelector(".input-final");
var outputel= document.querySelector("#output");

btnCheck.addEventListener('click',clickhandler);
function calculateProfithandler(initial,quantity,current){
if(initial>current){
    var loss =(initial - current)*quantity;
    var lossPercentage=(loss/initial)*100;
    outputel.innerText=`hey the loss is ${loss} and the loss percentage is ${lossPercentage}`;
}
else if(current>initial){
    var profit=(current - initial)*quantity;
    var profitPercentage=(profit/initial)*100;
    outputel.innerText=`hey the profit is ${profit} and the profit percentage is ${profitPercentage}`;
}
else{
outputel.innerText=`No pain no gain and no gain no
gain`;
}
}


function clickhandler(){
    var ip =  Number( inputini.value);
    var qty=  Number( inputqua.value);
    var curr =Number( inputou.value);
    calculateProfithandler(ip,qty,curr);
}