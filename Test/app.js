let mybox=document.querySelectorAll(".box");
let rest=document.querySelector(".rst");
let msgcnt=document.querySelector(".msg_cnt");
let newbt =document.querySelector(".new");
let para=document.querySelector("p")
let turnO=true;
const arr=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
let count=0;
mybox.forEach((box)=>{
    box.addEventListener("click",()=>{
       count+=1;
        if(turnO)
        {
            box.innerText="O";
            turnO=false;
            
        }
        else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        box.style.color="#ae2012" 
        let flag=winner(); 
        //console.log(count)
       if(count===9 && flag===0){
        showTie();
        //console.log(5)
       }

        
    })
})


const showTie=()=>{
    msgcnt.classList.remove("hide");
    para.innerText="Tie Break";
   
}
const showWinner=(winner)=>{
    disableall();
    para.innerText=`Hats off winner ${winner}`;
    msgcnt.classList.remove("hide");
}

const winner=()=>{for(let pt of arr){
    let p1=mybox[pt[0]].innerText;
    let p2=mybox[pt[1]].innerText;
    let p3=mybox[pt[2]].innerText;
    
    if(p1!="" && p2!=""&& p3!="")
    {
        if(p1===p2 && p2===p3){
            console.log("Winner", p1);
            showWinner(p1);
            return 1;
            
        }
    }
}
return 0;
};

const resetnew=()=>{
    msgcnt.classList.add("hide");
    count=0;

turnO=true;
    mybox.forEach((box)=>{
        box.innerText="";
        box.disabled=false;


    })
};


newbt.addEventListener("click",resetnew);
rest.addEventListener("click",resetnew);

const disableall=()=>{
    mybox.forEach((box)=>{
        box.disabled=true;
    })
}