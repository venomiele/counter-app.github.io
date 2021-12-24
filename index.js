let count=document.querySelector(".count");
let add=document.querySelector(".add");
let resetCount=document.querySelector(".reset");
let sub=document.querySelector(".subtract");
let random=document.querySelector(".random");


add.addEventListener("click", () => {
  count.innerHTML++;
  setColor();
})
sub.addEventListener("click", () => {
  count.innerHTML--;
  setColor();
})
resetCount.addEventListener("click", () => {
  count.innerHTML=0;
  setColor();
}) 
random.addEventListener("click", () =>{
                        count.innerHTML=Math.floor(Math.random()*100+1)
                        })

function setColor() {
  if(count.innerHTML>0) {
    count.style.color=" yellow";
  }else if (count.innerHTML<0) {
    count.style.color="orangered"
  } else {
    count.style.color="white";
  }
}

function specialColor() {
  count.style.color="orange";
}