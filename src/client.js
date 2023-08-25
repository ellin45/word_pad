let cnt = 0;
const maxClicks = 10;
let keys = [];
let wordClicked = false;

const wordButton = document.getElementById('wordButton');
const meanButton = document.getElementById('meanButton');

const wordData = wordButton.getAttribute('data-word');
const meanData = meanButton.getAttribute('data-mean');


document.getElementById('word').addEventListener('click', function () {
  if (wordClicked) return;
  cnt++;
  if (cnt > maxClicks) {
    document.getElementById('word').removeEventListener('click', this);
  }
});

document.getElementById('mean').addEventListener('click', function () {
  if (!wordClicked || cnt > maxClicks) {
    document.getElementById('mean').removeEventListener('click', this);
    return;
  }
  
});

