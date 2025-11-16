yourScore=0;
compScore=0;
let choice=document.querySelectorAll(".choice");
let msg=document.querySelector(".notice p");
let you=document.querySelector("#you");
let comp=document.querySelector("#comp");
const playGround=(userChoice)=>{
const compChoice=compPlay();
console.log("Computer chooses ",compChoice);
let userWin=true;
if(userChoice===compChoice){
    console.log("The game is draw!");
    msg.innerText="The game is draw!";
    msg.style.backgroundColor="black";
}
else {
    if(userChoice==="rock"){
        userWin=compChoice==="paper"?false:true;
    }
    else if(userChoice==="paper"){
        userWin=compChoice==="scissor"?false:true;
    }
    else{
        userWin=compChoice==="rock"?false:true;
    }

    printMsg(userWin);
    scoreBoard(userWin);
}


}
const scoreBoard=(userWin)=>{
if(userWin){
    yourScore+=1;
    //console.log(yourScore);
    you.innerText=yourScore;
}
else{
    compScore+=1;
    //console.log(compScore);
    comp.innerText=compScore;
}
}

const printMsg=(win)=>{
    if(win){
        console.log("You are the winner!");
        msg.innerText="You are the winner!";
        msg.style.backgroundColor="green";
       }
       else{
        console.log("You lose!");
        msg.innerText="You lose!";
        msg.style.backgroundColor="red";
       }
}

const compPlay=()=>{
   arr=["rock","paper","scissor"];

   const k=Math.floor(Math.random()*3);
 
   return arr[k];




}

choice.forEach((ch)=>{
    ch.addEventListener("click",()=>{
       userChoice=ch.getAttribute("id");
       console.log("User chooses ",userChoice);
       playGround(userChoice);
       
    })
})