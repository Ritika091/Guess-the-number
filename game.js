const jsConfetti = new JSConfetti()
let y=Math.floor(Math.random()*100)+1;
console.log(y)
let attempt=document.getElementById('attempts')
let guess_no= document.getElementById('number_guessed')
let equal=document.getElementById('equality')
let win=document.getElementById('winner')
let submit=document.getElementById('submit_input')

attempt.innerText="Number of attempts: 0"
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
        guess_no.textContent=num
    }
    
     if(x==y){
        c++
        win.innerText="Congratulations! You won the game"
        jsConfetti.addConfetti()
        attempt.innerText=`Number of attempts: ${c}`;
        equal.innerText="GREAT JOB !! guessed number is same as the number"
        submit.disabled=true
        c=0
    }
    else if(x>y){
        c++;
       attempt.innerText=`Number of attempts: ${c}`;
       equal.innerText="OOPS!! SORRY, guessed number is higher than the number"
    }
    else if(x<y){
        c++;
        attempt.innerText=`Number of attempts: ${c}`;
        equal.innerText="OOPS!! SORRY, guessed number is lower than the number"
    }
    }
    if( c==6){
        alert("Sorry you lose the game, try again :)")
        window.location.reload()
    }
   
}

submit.onclick=guess;

