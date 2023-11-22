// Getting and Setting the elements and colors needed

const boxes = document.querySelector(".boxes");
const colors = ["aqua","red","blueviolet","chartreuse","coral","gold","green","hotpink"];
const colorList = [...colors,...colors];
// console.log(colorList);
const boxLength = colorList.length;
// console.log(boxLength);

//Initializing the main elements of the Game state

let revealCount = 0;
let activeBox = null;
let waitingTime = false;



//Function to display the boxes in the webpage
function buildBoxes(color){
    const element = document.createElement("div");
    element.classList.add("box");
    element.setAttribute("data-color",color); //used for mapping the color
    element.setAttribute("data-revealed","false");//used to check revelaed boxes

    //adding event listerners for click event
    element.addEventListener("click",()=>{
        const revealed = element.getAttribute("data-revealed");
        //display the boxes
        if(waitingTime || revealed ==="true" || element == activeBox){
            return;
        }
        element.style.backgroundColor = color;

        //checking the active box
        if(!activeBox){
            activeBox = element;
            return;
        }


    //Logic for Matching Color and winning condition
    const colorMatch = activeBox.getAttribute("data-color")
        if (colorMatch ===color){
            activeBox.setAttribute("data-revealed","true");
            activeBox.setAttribute("data-revealed","true");
            waitingTime=false;
            activeBox=null;
            waitingTime=false;
            revealCount +=2;
            if(revealCount===boxLength){
                alert("congratulations...you Won!🤩🪄Refresh to play again...");
            }
            return;
        }




        //change the waiting time to true and using settimeout for transition
        waitingTime = true;
        setTimeout(()=>{
            element.style.backgroundColor=null;
            activeBox.style.backgroundColor=null;
            waitingTime=null;
            activeBox=null;
        },1000);


    });

    return element;
}





//Building the Boxes for the game
for (let i=0; i<boxLength; i++){
    //this is the place where the colors are randomly displayed
    const randomIndex = Math.floor(Math.random() * colorList.length);
    const color = colorList[randomIndex];
    const box = buildBoxes(color);

    //using splice method to avoid 3 repated calls
    colorList.splice(randomIndex,1);
    
    //console.log(color);
    boxes.append(box);
}
