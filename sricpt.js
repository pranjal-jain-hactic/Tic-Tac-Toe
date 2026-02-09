let boxes = document.querySelectorAll(".box");
let resetbutton = document.querySelector("#reset-btn");
let turn0 = true ;
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msgText = document.querySelector("#msg");
const winpatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],  ];

    const resetGame = () =>{
        turn0 = true;
        enableBoxes();
        msgContainer.classList.add("hide");
    };




    boxes.forEach((box) =>{
        box.addEventListener("click", () =>{
            console.log("Box was clicked");
            
         if(turn0 == true){
            box.innerText= "O";
            turn0 = false;
         }else{
            box.innerText= "X";
            turn0 = true;
         }
         box.disabled = true;
         checkWinner();
        });
    });

    const disableBoxes = () =>{
        for(let box of boxes){
            box.disabled= true;
        }
    }
    const enableBoxes = () =>{
        for(let box of boxes){
            box.disabled= false;
            box.innerText= "";
        }
    }
const showWinner = (winner) =>{
    msgText.innerText = "Congratulations! " + winner + " is the winner.";
    msgContainer.classList.remove("hide");
    disableBoxes();
}





const checkWinner = () =>{
    for (const pattern of winpatterns){
        let pos1value = boxes[pattern[0]].innerText;
        let pos2value = boxes[pattern[1]].innerText;
        let pos3value = boxes[pattern[2]].innerText;
        if(pos1value !== "" && pos1value === pos2value && pos2value === pos3value){
            showWinner(pos1value);
            return;
        }
    }
};

 newGameBtn.addEventListener("click", resetGame);
 resetbutton.addEventListener("click", resetGame);
