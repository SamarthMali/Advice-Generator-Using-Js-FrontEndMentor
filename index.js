const adviceID = document.querySelector("#advice-id");
const adviceText = document.querySelector("#advice-text");
const diceBtn = document.querySelector("#btn");

// fetch API fucntion 
const  adviceGenerator = async () => {
try{
    const res  = await fetch("https://api.adviceslip.com/advice")
    const data = await res.json();
    adviceID.innerHTML = `Advice # ${data.slip.id}`
    adviceText.innerHTML = data.slip.advice
}catch(err){
    console.log(err);
    adviceText.innerHTML=err.message;
}
};
diceBtn.addEventListener("click",adviceGenerator);
adviceGenerator();


