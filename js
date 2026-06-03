function revealBirthday(){

  document.getElementById("pinkWorld").style.display = "none";

  document.getElementById("birthdayScreen")
    .style.display = "flex";
}


/* KNIFE DRAGGING */

const knife = document.getElementById("knife");
const watermelon = document.getElementById("watermelon");

let dragging = false;
let alreadyOpened = false;

knife.addEventListener("mousedown", () => {
  dragging = true;
});

document.addEventListener("mouseup", () => {
  dragging = false;
});

document.addEventListener("mousemove", (e) => {

  if(!dragging || alreadyOpened) return;

  knife.style.left = e.pageX + "px";
  knife.style.top = e.pageY + "px";

  checkCollision();

});


function checkCollision(){

  const knifeRect =
    knife.getBoundingClientRect();

  const melonRect =
    watermelon.getBoundingClientRect();

  if(

    knifeRect.left < melonRect.right &&
    knifeRect.right > melonRect.left &&
    knifeRect.top < melonRect.bottom &&
    knifeRect.bottom > melonRect.top

  ){

    openWatermelon();

  }

}


function openWatermelon(){

  alreadyOpened = true;

  /* hide watermelon screen */

  document.getElementById("watermelonArea")
    .style.display = "none";

  /* show birthday reveal */

  document.getElementById("birthdayContent")
    .style.display = "block";

  /* music */

  document.getElementById("birthdayMusic")
    .play();

  /* confetti */

  confetti({
    particleCount:300,
    spread:180,
    startVelocity:50,
    origin:{ y:0.6 }
  });

}
