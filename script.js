const divs = document.querySelectorAll("div");

function toPlay(e) {
   const key = e.target.getAttribute("data-key");
   const audio = document.querySelector(`audio[data-key="${key}"]`);

   if (!audio) return;

   divs.forEach((item) => {
      item.classList.remove("playing");
   });

   e.target.classList.add("playing");

   audio.currentTime = 0.1;
   audio.play();

   console.log(e.target);
}

divs.forEach((item) => {
   item.addEventListener("click", toPlay);
});

// const divs = document.querySelectorAll("div");

// function toPlay(targetDiv) {
//    divs.forEach((item) => {
//       item.classList.remove("playing");
//    });
//    targetDiv.classList.add("playing");
// }

// function playSound(e) {
//    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
//    const div = document.querySelector(`div[data-key="${e.keyCode}"]`);

//    if (!audio || !div) return;

//    audio.currentTime = 0;
//    audio.play();

//    toPlay(div);

//    setTimeout(() => {
//       div.classList.remove("playing");
//    }, 200);
// }

// window.addEventListener("keydown", playSound);
