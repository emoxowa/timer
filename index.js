const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const resetButton = document.querySelector("#resetButton");
const timerEl = document.querySelector('span');

const formatTime = (seconds) => {
  const hh = Math.floor(seconds / 3600).toString().padStart(2, "0");
  const mm = Math.floor((seconds % 3600) / 60).toString().padStart(2, "0");
  const ss = (seconds % 60).toString().padStart(2, "0");

  return `${hh}:${mm}:${ss}`;
};

const createTimerAnimator = () => {
  let interval;

  return {
    start: (seconds) => {
      if (interval) {
        clearInterval(interval);
      }

      let time = seconds;
      timerEl.textContent = formatTime(time);

      interval = setInterval(() => {
        time--;
        if (time < 0) {
          clearInterval(interval);
          timerEl.textContent = "Time is Up";
        } else {
          timerEl.textContent = formatTime(time);
        }
      }, 1000);
    },

    reset: () => {
      if (interval) {
        clearInterval(interval);
      }
      timerEl.textContent = "00:00:00";
    },
  };
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener("input", () => {
  inputEl.value = inputEl.value.replace(/\D/g, "");
});

buttonEl.addEventListener("click", () => {
  const seconds = Number(inputEl.value);
  animateTimer.start(seconds);
  inputEl.value = "";
});

resetButton.addEventListener("click", () => {
  animateTimer.reset();
});