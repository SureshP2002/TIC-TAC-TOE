const cell=document.querySelectorAll(".cell");
const statustext=document.querySelector("#statustext")
const restarttext=document.querySelector("#rst");
const winConditions = [[0, 1, 2],[3, 4, 5],[6, 7, 8],[0, 3, 6],[1, 4, 7],[2, 5, 8],[0, 4, 8],[2, 4, 6]];
 let options=["","","","","","","","",""];
 let currentplayer="X";
 let running=false;

initializegame();
 function initializegame()
 {
    cell.forEach((box)=>{box.addEventListener("click",cellClicked)})
    restarttext.addEventListener("click",restartgame);
    statustext.textContent=`${currentplayer}'s Turn!`
    running=true;

 }



function cellClicked()
 {
    const index=this.getAttribute("cellIndex");
    if(options[index]!=""|!running)return;

    updatecell(this,index)
    checkWinner();
 }



 function updatecell(cell,index)
 {
    options[index]=currentplayer;
    cell.textContent=currentplayer
 }
 function checkWinner()
 {
    let condi=false;
    for(let i=0;i<winConditions.length;i++)
    {
        let a=options[winConditions[i][0]];
        let b=options[winConditions[i][1]];
        let c=options[winConditions[i][2]];
        if(a==""||b==""||c=="")continue;
        if(a==b&&b==c){
            condi=true;
            break;
        }
    }
    if(condi)
    {
        statustext.textContent=`${currentplayer}'s Wins!`;
        running=false;
    }
    else if(!options.includes(""))
    {
        statustext.textContent=`DRAW!`;
        running=false;
    }
    else
    {
        currentplayer=(currentplayer=="X")?"O":"X";
        statustext.textContent=`${currentplayer}'s Turn!`
    }
 }



 function restartgame()
 {
    currentplayer="X";
    options=["","","","","","","","",""];
    statustext.textContent=`${currentplayer}'s Trun!`
    cell.forEach((c)=>{
        c.textContent="";
    })
    running=true;
 }