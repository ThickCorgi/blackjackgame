// to refere to html variable we need to refer to its id

//declare variable set it equal to html id error
let errorParagraph = document.getElementById("error")
// console.log(errorParagraph)
// console.log(`hello`)

function purchase(){
    console.log('button clicked')
    // errorParagraph.textContent = `Something went wrong, please try again`
    errorParagraph.textContent = `This is textContent`
}


let num1 = 72;
let num2 = 41;
let sumValue = null;
document.getElementById(`num1-el`).textContent = num1;
document.getElementById(`num2-el`).textContent = num2;
let sum = document.getElementById(`sum-el`)

function add(){
    sumValue = num1 + num2
    sum.textContent = "Sum: " + sumValue
}

function subtract(){
    sumValue = num1-num2
    sum.textContent = "Sum: " + sumValue

}

function multiply(){
    sumValue = num1*num2
    sum.textContent = "Sum: " + sumValue

}

function divide(){
    sumValue = num1/num2
    sum.textContent = "Sum: " + sumValue

}
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////


//create 2 variables first and second card
// set their values to ramdon number between 2-11
let min = Math.ceil(1);
let max = Math.floor(12);
let called = false;
let cardDrawn = 0;
let playerFinalSum = null;
let dealerFinalSum = null;

 
let firstCard =  Math.floor(Math.random() * (max - min) + min);
let secondCard =  Math.floor(Math.random() * (max - min) + min);

let dealerHand1 =  Math.floor(Math.random() * (max - min) + min);
let dealerHand2 =  Math.floor(Math.random() * (max - min) + min);

document.getElementById("bJNumber1").textContent = firstCard;
document.getElementById("bJNumber2").textContent = secondCard;
document.getElementById("dealerNumber1").textContent = dealerHand1;
document.getElementById("dealerNumber2").textContent = dealerHand2;
// create variable sum and set it to sum of two cards
let dealerSum = dealerHand1 + dealerHand2;
let blackJackSum = firstCard + secondCard;

document.getElementById("bJSum").textContent = "Sum: " +blackJackSum;
document.getElementById("dealer-Sum").textContent = "Dealer has: " + dealerSum
// console.log(firstCard + " first")
// console.log(secondCard + " second")
// console.log(`sum ` + blackJackSum)

function deal(){
    // generate new numbers
    firstCard =  Math.floor(Math.random() * (max - min) + min);
    secondCard =  Math.floor(Math.random() * (max - min) + min);
    dealerHand1 =  Math.floor(Math.random() * (max - min) + min);
    dealerHand2 =  Math.floor(Math.random() * (max - min) + min);

    //show on website what the two new generated numbers are
    document.getElementById("bJNumber1").textContent = firstCard
    document.getElementById("bJNumber2").textContent = secondCard;
    document.getElementById("dealerNumber1").textContent = dealerHand1;
    document.getElementById("dealerNumber2").textContent = dealerHand2;

    // update bj sum
    blackJackSum = firstCard + secondCard;
    dealerSum = dealerHand1 + dealerHand2

    //show on website what the new sum is
    document.getElementById("bJSum").textContent = "Sum: " +blackJackSum;  
    document.getElementById("dealer-Sum").textContent = "Dealer has: " + dealerSum

    //clear rest of hand as well  
    document.getElementById("drawCard1").textContent = null;
    document.getElementById("drawCard2").textContent = null;
    document.getElementById("drawCard3").textContent = null;
    // document.getElementById("dealerNumber1").textContent = null;
    // document.getElementById("dealerNumber2").textContent = null;


    //resets draw card to 0 so no drawn cards shown
    cardDrawn=0;
    document.getElementById("status").textContent =  null
    // console.log(blackJackSum)
}


//called variable for drawCard ()
function drawCard(){
    //random number generated from min to max 
    let num = Math.floor(Math.random() * (max - min) + min)
    // console.log(num + " num");
    //has a card been drawn after two cards are places?
    if(cardDrawn===0){
        //new card drawn is num generated above from min to max
        document.getElementById("drawCard1").textContent = num;
        //update bJSum on website
        document.getElementById("bJSum").textContent = num+blackJackSum;
        //incremenet cardDrawn by1
         cardDrawn++;
        //  update blackJackSum
        blackJackSum +=num
        //update message id="question"
        if(blackJackSum===21){
            // console.log(`you win with a blackjack 21`)
            document.getElementById("question").textContent = "You win with a blackjack 21"
            document.getElementById("status").textContent = "21! Player Wins"
        
        } else if(blackJackSum<21) {
            // console.log('do you want to draw another card?')
            document.getElementById("question").textContent = "Draw card or Stay?"
        } else if(blackJackSum>21){
            // console.log(`Oh no! you drew too much :(`)
            document.getElementById("question").textContent = "Over 21, you lose. Try again"
            document.getElementById("status").textContent = "Bust Dealer Wins"
            
        }
         
    } else if (cardDrawn===1){
        document.getElementById("drawCard2").textContent = num;
        document.getElementById("bJSum").textContent = num+blackJackSum;
        // update blackJackSum
        blackJackSum +=num
        // update message id="question"
        if(blackJackSum===21){
            // console.log(`you win with a blackjack 21`)
            document.getElementById("question").textContent = "You win with a blackjack 21"
            document.getElementById("status").textContent = "21! Player Wins"
        
        } else if(blackJackSum<21) {
            // console.log('do you want to draw another card?')
            document.getElementById("question").textContent = "Draw card or Stay?"
        } else if(blackJackSum>21){
            // console.log(`Oh no! you drew too much :(`)
            document.getElementById("question").textContent = "Over 21, you lose. Try again"
            document.getElementById("status").textContent = "Bust Dealer Wins"
            
        }
        cardDrawn++
    } else if(cardDrawn===2){
        document.getElementById("drawCard3").textContent = num;
        document.getElementById("bJSum").textContent = num+blackJackSum;
        // update blackJackSum
        blackJackSum +=num
        // update message id="question"
        if(blackJackSum===21){
            // console.log(`you win with a blackjack 21`)
            document.getElementById("question").textContent = "You win with a blackjack 21"
            document.getElementById("status").textContent = "21! Player Wins"
        
        } else if(blackJackSum<21) {
            // console.log('do you want to draw another card?')
            document.getElementById("question").textContent = "Draw card or Stay?"
        } else if(blackJackSum>21){
            // console.log(`Oh no! you drew too much :(`)
            document.getElementById("question").textContent = "Over 21, you lose. Try again"
            document.getElementById("status").textContent = "Bust Dealer Wins"
            
        }
        cardDrawn++
    } else if(!blackJackSum>=21){
        document.getElementById("bJSum").textContent = num+blackJackSum;
        // update blackJackSum
        blackJackSum +=num
    } else {
    document.getElementById("question").textContent = "Stop it. Reset the game and try again"
    }

    // console.log(blackJackSum)
    
    // blackJackSum = document.getElementById("bJSum")

}

if(blackJackSum===21){
    // console.log(`you win with a blackjack 21`)
    document.getElementById("question").textContent = "You win with a blackjack 21"
    document.getElementById("status").textContent = "21! Player Wins"


} else if(blackJackSum<21) {
    // console.log('do you want to draw another card?')
    document.getElementById("question").textContent = "Draw card or Stay?"
} else if(blackJackSum>21){
    // console.log(`Oh no! you drew too much :(`)
    document.getElementById("question").textContent = "Over 21, you lose. Try again"
    document.getElementById("status").textContent = "Bust Dealer Wins"
    
}

function stay(){
    playerFinalSum = blackJackSum;
    console.log("playerFinalSum is " + playerFinalSum)
    dealerFinalSum = dealerSum
    //players final sum is less 21 and dealerfinal sum is less then 17 
    // then we need to drawcard for dealer
   console.log("dealer sum is " + dealerSum)
    if(playerFinalSum>21){
        
    }
}


