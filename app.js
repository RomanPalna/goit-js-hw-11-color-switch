const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const refs = {
    body: document.querySelector('.js-switcher'),
    startBtn: document.querySelector('.js-start'),
    stopBtn: document.querySelector('.js-stop')
}



refs.startBtn.addEventListener('click', () => {
    const promises = colors.map(color => color)
    Promise.race(promises).then(({color}) => console.log(color))
})


function switchColors (color) {
    return new Promise((resolve) => {
        const time = randomIntegerFromInterval(500, 1000)

        setTimeout(() => {
            resolve({color, time})
}, time)
   })
}

switchColors('Mango')