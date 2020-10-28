const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const refs = {
  body: document.querySelector('.js-switcher'),
  startBtn: document.querySelector('.js-start'),
  stopBtn: document.querySelector('.js-stop'),
};

refs.startBtn.addEventListener('click', () => {
  timer.start();
});

refs.stopBtn.addEventListener('click', () => {
  timer.stop();
});

const timer = {
  timerId: null,
  isActive: false,

  start() {
    if (this.isActive) {
      return;
    }
    refs.startBtn.setAttribute('disabled', 'disabled');
    refs.stopBtn.removeAttribute('disabled');
    this.isActive = true;
    this.timerId = setInterval(() => {
      const promises = colors.map(switchColors);
      Promise.race(promises).then(
        ({ color }) => (refs.body.style.backgroundColor = color),
      );
    }, 1000);
  },

  stop() {
    this.isActive = false;
    clearInterval(this.timerId);
    refs.startBtn.removeAttribute('disabled');
    refs.stopBtn.setAttribute('disabled', 'disabled');
  },
};

function switchColors(color) {
  return new Promise(resolve => {
    const time = randomIntegerFromInterval(500, 1000);

    setInterval(() => {
      resolve({ color });
    }, time);
  });
}

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
