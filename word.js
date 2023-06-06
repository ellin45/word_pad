let cnt = 0; // 클릭 횟수 초기화
const maxClicks = 10; // 최대 클릭 가능 횟수
let keys = [];
let wordClicked = false;

//'word'인 버튼 클릭
document.getElementById('word').addEventListener('click', function () {
  if(wordClicked) return; // mean이 먼저 클릭되면 word 클릭을 무시
  cnt++;
  if (cnt > maxClicks) {
    document.getElementById('word').removeEventListener('click', this); // 이벤트 제거
    return; // 함수 종료
  }

  //JSON 파일에서 키 불러오기
  fetch('english_word.json')
    .then(response => response.json())
    .then(data => {
      keys = Object.keys(data); 
      //key값을 박스에 노출
      const box = document.getElementById('box1');
      box.textContent = keys[cnt - 1];
      box.style.display = 'block';
      wordClicked = true;
      
    });
});

//id가 'mean'인 버튼 클릭
document.getElementById('mean').addEventListener('click', function () {
  if (!wordClicked || cnt > maxClicks) { //word가 클릭되지 않거나 cnt가 maxClick보다 크면
    document.getElementById('mean').removeEventListener('click', this);
    return;
  }

  //JSON파일에서 데이터 불러오기
  fetch('english_word.json')
    .then(response => response.json())
    .then(data => {
        //value값을 박스에 노출
        const box = document.getElementById('box2');
        box.textContent = data[keys[cnt-1]];
        box.style.display = 'block';
        wordClicked = false; // 'mean'클릭 후 'word' 클릭 가능
    });
});
