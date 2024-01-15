document.querySelector("h1").onmouseover = event => {
  const letters = "ABCDEFGHLMNOPQRSTUVWXYZ0123456789";
  let iteration = 0;
  const interval = setInterval(() => {
  event.target.innerText = event.target.innerText.split("")
  .map((letter, index) => {
    if(index < iteration){
      return event.target.dataset.value[index];
    }
    return letters[Math.floor(Math.random() * 31)]
  })
    .join("");
    if(iteration >= event.target.dataset.value.length) clearInterval(interval);
    iteration += 1/30;
  }, 30);
}
