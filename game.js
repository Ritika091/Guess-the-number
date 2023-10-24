const jsConfetti = new JSConfetti()
let y=Math.floor(Math.random()*100)+1;
// console.log(y)
document.getElementById('attempts').innerText="Number of attempts: 0"
let c=0
let num=[]
function guess(){
    if(c<6){
    let x=document.getElementById('no_input').value;
    // console.log(x)
    if(x.length==0){
        alert("Enter a value")
        window.location.reload();
    }
    else if(x<1 || x>100){
        alert("Enter a valid number from 1 to 100")
        window.location.reload();
    }
    else{
        num.push(x);
        document.getElementById('number_guessed').textContent=num
    }
    
     if(x==y){
        c++
        document.getElementById('winner').innerText="Congratulations! You won the game"
        jsConfetti.addConfetti()
        document.getElementById('attempts').innerText=`Number of attempts: ${c}`;
        document.getElementById('equality').innerText="GREAT JOB !! guessed number is same as the number"
        c=0
    }
    else if(x>y){
        c++;
        document.getElementById('attempts').innerText=`Number of attempts: ${c}`;
        document.getElementById('equality').innerText="OOPS!! SORRY, guessed number is higher than the number"
    }
    else if(x<y){
        c++;
        document.getElementById('attempts').innerText=`Number of attempts: ${c}`;
        document.getElementById('equality').innerText="OOPS!! SORRY, guessed number is lower than the number"
    }
    }
    if( c==6){
        alert("Sorry you lose the game, try again :)")
        window.location.reload()
    }
   
}

document.getElementById('submit_input').onclick=guess;

