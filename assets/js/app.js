const container = document.querySelector("#container");
const text = document.querySelector("#text");

const total_time = 7500;
const breathe_time = (total_time / 5) * 2;
const hold_time = total_time / 5;

const breatheAnimation = () => {
  text.innerText = "Breathe In!";
  container.className = "container grow";

  setTimeout(() => {
    text.innerText = "Hold";

    setTimeout(() => {
      text.innerText = "Breathe Out!";
      container.className = "container shrink";
    }, hold_time);
  }, breathe_time);
};

breatheAnimation();
setInterval(breatheAnimation, total_time);