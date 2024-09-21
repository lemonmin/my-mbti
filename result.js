document.addEventListener('DOMContentLoaded', function () {
  const resultElement = document.getElementById('result');
  const restartButton = document.getElementById('restart-button');

  // 로컬스토리지에서 mbti_result 값 가져오기
  const mbtiResult = localStorage.getItem('mbti_result');

  // 궁합 데이터를 미리 정의
    const mbtiCompatibility = {
        "INTJ": { best: "ENFP", worst: "ESFJ" },
        "INTP": { best: "ENTJ", worst: "ISFJ" },
        "ENTJ": { best: "INTP", worst: "INFP" },
        "ENTP": { best: "INFJ", worst: "ISFP" },
        "INFJ": { best: "ENFP", worst: "ESTP" },
        "INFP": { best: "ENFJ", worst: "ESTJ" },
        "ENFJ": { best: "INFP", worst: "ISTP" },
        "ENFP": { best: "INFJ", worst: "ISTJ" },
        "ISTJ": { best: "ESTP", worst: "ENFP" },
        "ISFJ": { best: "ESFP", worst: "ENTP" },
        "ESTJ": { best: "ISTJ", worst: "INFP" },
        "ESFJ": { best: "ISFJ", worst: "INTJ" },
        "ISTP": { best: "ESTJ", worst: "ENFJ" },
        "ISFP": { best: "ESFJ", worst: "ENTP" },
        "ESTP": { best: "ISTJ", worst: "INFJ" },
        "ESFP": { best: "ISFJ", worst: "INTP" }
    };

  if (mbtiResult) {
    // mbti_result 값이 있을 경우
    resultElement.textContent = `${mbtiResult}입니다!`;

    // 궁합 정보 표시
    const compatibility = mbtiCompatibility[mbtiResult];
    if (compatibility) {
        bestMatchElement.textContent = compatibility.best;
        worstMatchElement.textContent = compatibility.worst;
    } else {
        bestMatchElement.textContent = "정보 없음";
        worstMatchElement.textContent = "정보 없음";
    }
    
  } else {
    // mbti_result 값이 없을 경우
    resultElement.textContent = '아직 테스트를 진행하지 않았습니다!';
    restartButton.textContent = '테스트 하러 가기';
    bestMatchElement.textContent = "정보 없음";
    worstMatchElement.textContent = "정보 없음";
  }
});
