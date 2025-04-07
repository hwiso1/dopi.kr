const rainContainer = document.querySelector('.rain-container');

function createDrop() {
  const drop = document.createElement('div');
  drop.classList.add('drop');

  // 랜덤 위치, 길이, 속도 설정
  drop.style.left = `${Math.random() * 100}vw`; // 화면의 100% 범위 내에서 랜덤 위치
  drop.style.height = `${30 + Math.random() * 100}px`; // 랜덤한 길이 (30px ~ 130px)
  drop.style.animationDuration = `${1.5 + Math.random() * 3}s`; // 랜덤 속도 (1.5s ~ 4.5s)
  drop.style.animationDelay = `${Math.random() * 2}s`; // 랜덤 딜레이 추가

  rainContainer.appendChild(drop);

  // 일정 시간 후 제거
  setTimeout(() => {
    drop.remove();
  }, 4000); // 비가 떨어진 후 4초 뒤에 제거
}

// 일정 간격으로 비 생성 (interval을 빠르게 설정)
setInterval(createDrop, 50);  // 50ms마다 새로운 비 방울 추가
