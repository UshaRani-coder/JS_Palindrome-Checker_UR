let userInput = document.querySelector("input");
let result = document.querySelector(".result");
let button = document.querySelector("button");

function getInput(){
 let inpString = userInput.value.toLowerCase();
 let split = inpString.split("");
 for(let i=0; i<split.length; i++){
    if(split[i] === split[split.length - i - 1] && split[split.length/2 - 1] === split[split.length/2] ){
        result.textContent = "Yes! It's a palindrome :)";   
    }
    
    else{
        result.textContent="No! It's not a palindrome :(";    
    }
 }    
}
