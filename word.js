let cnt =0; // 클릭 횟수 초기화
const maxClicks =10; // 최대 클릭 가능 횟수

//id가 'word'인 버튼 클릭

document.getElementById('word').addEventListener('click', function(){
    cnt++;
    if(cnt > maxClicks) { // 최대 클릭 가능 횟수를 초과하면
        removeEventListener // 이벤트 제거
        return; // 함수 종료
    }

    //JSON 파일에서 키 불러오기
    const json = {"key" : "value"};
    const data = JSON.parse(json);
    const key = data.key;

    //key 값을 박스에 노출
    const box = document.getElementById('box');
    box.textContent = key;
    box.style.display = 'block';

    //hide버튼 클릭시 박스를 숨기도록 설정
    const hideButton = document.getElementById('hide');
    hideButton.addEventListener('click',function() {
        box.style.display = 'none';
    });
});

    document.getElementById('mean').addEventListener('click',function() {
        cnt++; 
        if(cnt > maxClicks) {
            removeEventListener();
            return;
        }
        
        //JSON파일에서 값 불러오기
        const json = {"key": "value"};
        const data = JSON.parse(json);
        const value = data.value;

        //value값을 박스에 노출
        const box = document.getElementById('box');
        box.textContent = value;
        box.style.display = 'block';

        //'hide' 버튼 클릭 시 박스가 숨기도록 설정
        const hideButton = document.getElementById('hide');
        hideButton.addEventListener('click', function(
            box.style.display = 'none';
        ));
    });

