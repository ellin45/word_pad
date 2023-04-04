let cnt = 0; // 클릭 횟수 초기화
const maxClicks = 10; // 최대 클릭 가능 횟수

//id가 'word'인 버튼 클릭
document.getElementById('word').addEventListener('click', function () {
  cnt++;
  if (cnt > maxClicks) {
    document.getElementById('word').removeEventListener('click', this); // 이벤트 제거
    return; // 함수 종료
  }

  //JSON 파일에서 키 불러오기
  fetch('english_word.json')
    .then(response => response.json())
    .then(data => {
      const keys = Object.keys(data);
      const firstKey = keys[0];
      //key값을 박스에 노출
      const box = document.getElementById('box1');
      box.textContent = firstKey;
      box.style.display = 'block';
    });
});

//id가 'mean'인 버튼 클릭
document.getElementById('mean').addEventListener('click', function () {
  cnt++;
  if (cnt > maxClicks) {
    document.getElementById('mean').removeEventListener('click', this);
    return;
  }

  //Ajax를 이용해 JSON파일에서 데이터 불러오기
  fetch('english_word.json')
    .then(response => response.json())
    .then(data => {
      for (let key in data) {
        //value값을 박스에 노출
        const box = document.getElementById('box2');
        box.textContent = data[key];
        box.style.display = 'block';
        break;
      }
    });
});