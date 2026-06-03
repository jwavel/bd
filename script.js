function revealBirthday() {

  document.getElementById("pinkWorld").style.display = "none";

  document.getElementById("birthdayScreen")
    .style.display = "flex";
}

/* WAIT FOR PAGE TO LOAD */

window.addEventListener("DOMContentLoaded", () => {

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

    if (!dragging || alreadyOpened) return;

    knife.style.left = e.pageX + "px";
    knife.style.top = e.pageY + "px";

    checkCollision();

  });

  function checkCollision() {

    const knifeRect =
      knife.getBoundingClientRect();

    const melonRect =
      watermelon.getBoundingClientRect();

    if (

      knifeRect.left < melonRect.right &&
      knifeRect.right > melonRect.left &&
      knifeRect.top < melonRect.bottom &&
      knifeRect.bottom > melonRect.top

    ) {

      openWatermelon();

    }

  }

  window.openWatermelon = function () {

    alreadyOpened = true;

    document.getElementById("watermelonArea")
      .style.display = "none";

    document.getElementById("birthdayContent")
      .style.display = "block";

    document.getElementById("birthdayMusic")
      .play();

    confetti({
      particleCount: 300,
      spread: 180,
      startVelocity: 50,
      origin: { y: 0.6 }
    });

  };

});
