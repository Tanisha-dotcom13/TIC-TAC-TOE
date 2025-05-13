let msg = document.querySelector(".win-msg");
let mybox = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#rebtn");

let turnX = true;  

mybox.forEach((box) =>{                                            
    box.addEventListener(("click"), () => {             
        if(turnX){
            box.innerText = "X";
            turnX = false;                           
        }else{                                     
            box.innerText = "O";
            turnX = true;                               
        }
        box.disabled = true;
        checkWin();
    });
}); 

 const boxDisable = () => {
    mybox.forEach((box) => {
        box.disabled = true;
    });
 };
  
const winArr = [                  
    [0, 1, 2],
    [0, 4, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

const checkWin = () => {
    winArr.forEach((pattern) => {
        const [a,b,c] = pattern;

        const val1 = mybox[a].innerText;
        const val2 = mybox[b].innerText;
        const val3 = mybox[c].innerText;


        if(val1 != "" && val1 == val2 && val2 == val3){
        showWin(val1); 
        boxDisable();
        }
    }
)}

const showWin = (winner) => {
msg.innerText = `Winner is ${winner}`;
msg.classList.remove("hide"); 
};
 
resetbtn.addEventListener(("click"), () => {
    mybox.forEach((box) => {
        box.disabled  = false;
        box.innerText = "";
        msg.classList.add("hide");
    });
});