const truck = document.querySelector(".truck");
const bomb = document.querySelector(".boom");
const bridge_part_one = document.querySelector(".bridge_middle-one");
const bridge_part_two = document.querySelector(".bridge_middle-two");
const message = document.querySelector(".final_text");
const startMessage = document.querySelector(".start_text");

function explosion() {
  bomb.style.display = "block";
  setTimeout(() => {
    bomb.style.display = "none";
  }, 400);
}

truck.addEventListener("click", () => {
  let start = Date.now();

  startMessage.style.display = "none";
  let timer = setInterval(function () {
    let timePassed = Date.now() - start;

    if (timePassed >= 1500) {
      clearInterval(timer);
      truck.style.display = "none";
      bridge_part_one.style.rotate = "30deg";
      bridge_part_one.style.top = "0";
      bridge_part_one.style.rotate = "30deg";
      bridge_part_two.style.top = "-10px";
      bridge_part_two.style.rotate = "-30deg";
      message.style.display = "flex";

      setTimeout(() => {
        message.style.display = "none";
      }, 5000);

      explosion();
      return;
    }

    draw(timePassed);
  }, 5);

  function draw(timePassed) {
    truck.style.left = timePassed / 5 + "px";
  }
});
