// 초기 데이터
const dataDay = [16, 20, 10, 22, 31];  // 일별 데이터
const dataWeek = [20, 15, 8, 27, 30];  // 주별 데이터
const dataMonth = [5, 13, 29, 21, 25];  // 월별 데이터

// 초기 그래프 데이터 (일별 데이터로 시작)
let currentData = dataDay;

// HTML에서 canvas 요소 찾기
const ctx = document.getElementById('myChart').getContext('2d');

// 탭 활성화 함수
function setActiveTab(tabId) {
  const tabs = document.querySelectorAll('.tab');
  tabs.forEach(tab => tab.classList.remove('tab_on'));
  document.getElementById(tabId).classList.add('tab_on');
}

// 모든 탭 버튼 요소 선택
const tabButtons = document.querySelectorAll('.tab-btn');

// 탭 버튼 클릭 이벤트 처리
tabButtons.forEach(button => {
  button.addEventListener('click', () => {
    // 모든 탭 버튼의 tab_on 클래스 제거
    tabButtons.forEach(btn => btn.classList.remove('tab_on'));

    // 클릭한 버튼에 tab_on 클래스 추가
    button.classList.add('tab_on');

    // 차트 업데이트 (기존 코드)
    const newData = button.id === 'day-tab' ? dataDay :
      button.id === 'week-tab' ? dataWeek : dataMonth;
    const label = button.textContent; // 탭 이름을 레이블로 사용
    updateChart(newData, label);
  });
});

// 차트 객체 생성 (일별 데이터로 초기화)
let myChart = new Chart(ctx, {
  type: 'bar', // 막대그래프
  data: {
    labels: ['10.22(화)', '10.23(수)', '10.24(목)', '10.25(금)', '10.26(토)'], // X축 라벨
    datasets: [{
      label: '', // 데이터셋 레이블
      data: currentData, // 그래프에 표시할 데이터
      backgroundColor: currentData.map((value, index) => {
        // 마지막 데이터인 경우 다른 색상 반환
        return index === currentData.length - 1 ? 'rgba(0, 77, 64, 1)' : 'rgba(217, 242, 156, 1)';
      }),
      borderRadius: 10,
    }]

  },
  options: {
    responsive: true, // 반응형 크기 조정
    plugins: {
      legend: {
        display: false // 범례 전체 숨기기
      }
    },
    scales: {
      // X축의 세로줄 그리드 비활성화
      x: {
        grid: {
          display: false // X축의 세로줄(그리드) 비활성화
        },
        ticks: {
          display: true // X축 레이블 표시
        }
      },
      // Y축 값은 숨기고, Y축의 가로줄 그리드는 보이도록 설정
      y: {
        beginAtZero: true, // Y축 0부터 시작
        display: true,    // Y축 값과 레이블 숨기기
        grid: {
          display: true    // Y축의 가로줄(그리드)은 보이도록 유지
        },
        ticks: {
          display: false   // Y축 값 숨기기
        }
      }
    }
  }
});

// 탭 버튼 클릭 이벤트 처리
document.getElementById('day-tab').addEventListener('click', function () {
  updateChart(dataDay, '일간통계');
});

document.getElementById('week-tab').addEventListener('click', function () {
  updateChart(dataWeek, '주간통계');
});

document.getElementById('month-tab').addEventListener('click', function () {
  updateChart(dataMonth, '월간통계');
});

// 그래프 업데이트 함수
function updateChart(newData, label) {
  // 기존 차트 삭제
  myChart.destroy();

  // 새로운 차트 생성
  myChart = new Chart(ctx, {
    type: 'bar', // 막대그래프
    data: {
      labels: getLabels(label), // 날짜 레이블을 선택한 기간에 맞게 변경
      datasets: [{
        label: `${label}간의 값`, // 데이터셋 레이블
        data: newData, // 새로운 데이터
        backgroundColor: currentData.map((value, index) => {
          // 마지막 데이터인 경우 다른 색상 반환
          return index === currentData.length - 1 ? 'rgba(0, 77, 64, 1)' : 'rgba(217, 242, 156, 1)';
        }),
        borderRadius: 10,
      }]
    },
    options: {
      responsive: true, // 반응형 크기 조정
      plugins: {
        legend: {
          display: false // 범례 전체 숨기기
        }
      },
      animation: {
        duration: 1000, // 애니메이션 지속 시간 (1초)
        easing: 'easeOutQuart', // 애니메이션 효과
        onComplete: function () {
          console.log('애니메이션 완료');
        }
      },
      scales: {
        // X축의 세로줄 그리드 비활성화
        x: {
          grid: {
            display: false // X축의 세로줄(그리드) 비활성화
          },
          ticks: {
            display: true // X축 레이블 표시
          }
        },
        // Y축 값과 라벨은 숨기고, Y축의 가로줄(그리드)은 유지
        y: {
          beginAtZero: true, // Y축 0부터 시작
          display: true,    // Y축 값과 레이블 숨기기
          grid: {
            display: true    // Y축의 가로줄(그리드)은 유지
          },
          ticks: {
            display: false   // Y축 값 숨기기
          }
        }
      }
    }
  });
}

// 선택된 기간에 맞는 레이블을 반환하는 함수
function getLabels(period) {
  if (period === '일간통계') {
    return ['10.22(화)', '10.23(수)', '10.24(목)', '10.25(금)', '10.26(토)'];
  } else if (period === '주간통계') {
    return ['10월 1주', '10월 2주', '10월 3주', '10월 4주', '10월 5주'];
  } else if (period === '월간통계') {
    return ['6월', '7월', '8월', '9월', '10월'];
  }
}
