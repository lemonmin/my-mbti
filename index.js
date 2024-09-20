const questions = [
  {
    id: 1,
    text: '당신은 새로운 사람을 만나면 자신을 소개하는 것을 좋아하나요?',
    yes: 'E',
    no: 'I',
  },
  {
    id: 2,
    text: '당신은 자주 계획을 세우는 편인가요?',
    yes: 'J',
    no: 'P',
  },
  {
    id: 3,
    text: '당신은 논쟁이나 불화를 싫어하나요?',
    yes: 'F',
    no: 'T',
  },
  {
    id: 4,
    text: '당신은 새로운 경험을 추구하나요?',
    yes: 'N',
    no: 'S',
  },
  {
    id: 5,
    text: '당신은 복잡한 문제를 해결하는 것을 좋아하나요?',
    yes: 'T',
    no: 'F',
  },
  {
    id: 6,
    text: '당신은 대부분의 사람들이 당신을 좋아하는 편인가요?',
    yes: 'E',
    no: 'I',
  },
  {
    id: 7,
    text: '어떤 일을 처리할 때, 빠르게 결정하는 것이 중요한가요?',
    yes: 'P',
    no: 'J',
  },
  {
    id: 8,
    text: '당신은 자신이 하는 일에 대해 열정을 느끼나요?',
    yes: 'J',
    no: 'P',
  },
  {
    id: 9,
    text: '당신은 대부분의 상황에서 논리적으로 생각하나요?',
    yes: 'T',
    no: 'F',
  },
  {
    id: 10,
    text: '당신은 쉽게 스트레스를 받나요?',
    yes: 'N',
    no: 'S',
  },
  {
    id: 11,
    text: '당신은 대부분의 시간을 집에서 보내는 것을 좋아하나요?',
    yes: 'I',
    no: 'E',
  },
  {
    id: 12,
    text: '새로운 아이디어나 가능성을 찾아보는 것이 즐겁나요?',
    yes: 'N',
    no: 'S',
  },
];

const additionalQuestions = [
  // E vs I 관련 질문 5개
  {
    id: 13,
    text: "모임에서 새로운 사람들을 만나면 기분이 좋아지나요?",
    yes: "E",
    no: "I"
  },
  {
    id: 14,
    text: "큰 그룹에서 대화를 주도하는 편인가요?",
    yes: "E",
    no: "I"
  },
  {
    id: 15,
    text: "여러 사람과 함께하는 활동을 선호하나요?",
    yes: "E",
    no: "I"
  },
  {
    id: 16,
    text: "한 번에 많은 사람들과 소통하는 것이 어렵지 않나요?",
    yes: "E",
    no: "I"
  },
  {
    id: 17,
    text: "혼자 보내는 시간보다는 사람들과 함께 있는 시간이 더 행복한가요?",
    yes: "E",
    no: "I"
  },

  // S vs N 관련 질문 5개
  {
    id: 18,
    text: "직관보다는 확실한 사실에 의존하는 편인가요?",
    yes: "S",
    no: "N"
  },
  {
    id: 19,
    text: "세부적인 부분에 집중하는 것이 더 편한가요?",
    yes: "S",
    no: "N"
  },
  {
    id: 20,
    text: "미래보다는 현재의 문제를 해결하는 것에 더 집중하나요?",
    yes: "S",
    no: "N"
  },
  {
    id: 21,
    text: "아이디어보다는 실질적인 해결책을 선호하나요?",
    yes: "S",
    no: "N"
  },
  {
    id: 22,
    text: "상상력보다는 실제 상황에 집중하는 편인가요?",
    yes: "S",
    no: "N"
  },

  // T vs F 관련 질문 5개
  {
    id: 23,
    text: "논리적인 분석이 감정보다 더 중요하다고 생각하나요?",
    yes: "T",
    no: "F"
  },
  {
    id: 24,
    text: "결정을 내릴 때 감정보다는 이성에 더 의존하나요?",
    yes: "T",
    no: "F"
  },
  {
    id: 25,
    text: "문제를 해결할 때 감정보다는 객관적인 사실을 따르나요?",
    yes: "T",
    no: "F"
  },
  {
    id: 26,
    text: "갈등 상황에서 논리적 설득이 감정적인 접근보다 효과적이라고 생각하나요?",
    yes: "T",
    no: "F"
  },
  {
    id: 27,
    text: "결정을 내릴 때 사람들의 감정보다 사실에 근거한 판단을 선호하나요?",
    yes: "T",
    no: "F"
  },

  // J vs P 관련 질문 5개
  {
    id: 28,
    text: "계획된 일정을 따르는 것이 편안한가요?",
    yes: "J",
    no: "P"
  },
  {
    id: 29,
    text: "마감 기한을 정해 놓고 일을 하는 것이 더 효과적이라고 생각하나요?",
    yes: "J",
    no: "P"
  },
  {
    id: 30,
    text: "일을 처리할 때 즉흥적으로 하기보다는 미리 계획하는 것을 좋아하나요?",
    yes: "J",
    no: "P"
  },
  {
    id: 31,
    text: "예상하지 못한 변화가 생기면 스트레스를 받는 편인가요?",
    yes: "J",
    no: "P"
  },
  {
    id: 32,
    text: "결정을 내릴 때 시간표나 계획에 맞춰 움직이는 것이 더 편한가요?",
    yes: "J",
    no: "P"
  }
];

// 기존의 questions 배열과 새로운 additionalQuestions 배열을 결합한 후, 각 카테고리에 맞는 질문을 추출
const allQuestions = [
  ...questions, 
  ...additionalQuestions
];

// E/I, S/N, F/T, J/P 지표별로 질문을 나누기
const eiQuestions = allQuestions.filter(q => q.yes === "E" || q.no === "I");
const snQuestions = allQuestions.filter(q => q.yes === "S" || q.no === "N");
const tfQuestions = allQuestions.filter(q => q.yes === "T" || q.no === "F");
const jpQuestions = allQuestions.filter(q => q.yes === "J" || q.no === "P");

// 각 지표 그룹에서 한 질문씩 순차적으로 섞어 배열을 만드는 함수
function shuffleQuestions() {
  const shuffled = [];
  const maxLength = Math.max(eiQuestions.length, snQuestions.length, tfQuestions.length, jpQuestions.length);

  for (let i = 0; i < maxLength; i++) {
    if (eiQuestions[i]) shuffled.push(eiQuestions[i]);
    if (snQuestions[i]) shuffled.push(snQuestions[i]);
    if (tfQuestions[i]) shuffled.push(tfQuestions[i]);
    if (jpQuestions[i]) shuffled.push(jpQuestions[i]);
  }

  return shuffled;
}

// 섞인 질문 배열을 생성
const mixedQuestions = shuffleQuestions();

// 현재 보여지는 질문의 인덱스
let currentQuestionIndex = 0;

// 각 질문에 대한 답변을 저장하는 배열
const answers = [];

// "예" 버튼 클릭 시 실행되는 함수
function onYesButtonClick() {
  // 현재 질문에 대한 답변을 answers 배열에 저장
  answers[currentQuestionIndex] = mixedQuestions[currentQuestionIndex].yes;

  // 다음 질문으로 이동
  currentQuestionIndex++;

  // 마지막 질문일 경우 결과 페이지로 이동
  if (currentQuestionIndex === mixedQuestions.length) {
    calculateResult();
    return;
  }

  // 다음 질문으로 이동한 후, 해당 질문을 보여줌
  const nextQuestion = mixedQuestions[currentQuestionIndex];
  const questionElement = document.getElementById('question');
  const questionNumberElement = document.getElementById('question-number');

  questionElement.textContent = nextQuestion.text;
  questionNumberElement.textContent = `질문 ${currentQuestionIndex + 1}`;
}

// "아니오" 버튼 클릭 시 실행되는 함수
function onNoButtonClick() {
  // 현재 질문에 대한 답변을 answers 배열에 저장
  answers[currentQuestionIndex] = mixedQuestions[currentQuestionIndex].no;

  // 다음 질문으로 이동
  currentQuestionIndex++;

  // 마지막 질문일 경우 결과 페이지로 이동
  if (currentQuestionIndex === mixedQuestions.length) {
    calculateResult();
    return;
  }

  // 다음 질문으로 이동한 후, 해당 질문을 보여줌
  const nextQuestion = mixedQuestions[currentQuestionIndex];
  const questionElement = document.getElementById('question');
  const questionNumberElement = document.getElementById('question-number');

  questionElement.textContent = nextQuestion.text;
  questionNumberElement.textContent = `질문 ${currentQuestionIndex + 1}`;
}

// 페이지 로드 시, 첫 번째 질문을 보여줌
const firstQuestion = mixedQuestions[0];
const questionElement = document.getElementById('question');
const questionNumberElement = document.getElementById('question-number');

questionElement.textContent = firstQuestion.text;
questionNumberElement.textContent = `질문 ${currentQuestionIndex + 1}`;

// "예" 버튼과 "아니오" 버튼에 이벤트 부여
const yesButton = document.getElementById('yes-button');
const noButton = document.getElementById('no-button');

yesButton.addEventListener('click', onYesButtonClick);
noButton.addEventListener('click', onNoButtonClick);

function calculateResult() {
  // MBTI 지표별 응답 개수를 저장할 객체 생성
  const result = {
    E: 0,
    I: 0,
    N: 0,
    S: 0,
    T: 0,
    F: 0,
    P: 0,
    J: 0,
  };

  // 각 질문의 응답에 따라 결과 객체에 값을 추가
  for (let i = 0; i < mixedQuestions.length; i++) {
    const userAnswer = answers[i];
    result[userAnswer]++;
  }

  // MBTI 지표 중에서 더 많이 선택된 알파벳을 찾아서 결과 문자열 생성
  let mbtiResult = '';
  mbtiResult += result.E > result.I ? 'E' : 'I';
  mbtiResult += result.N > result.S ? 'N' : 'S';
  mbtiResult += result.F > result.T ? 'F' : 'T';
  mbtiResult += result.P > result.J ? 'P' : 'J';

  // 결과 값을 로컬 스토리지에 저장하고 result.html로 이동
  localStorage.setItem('mbti_result', mbtiResult);
  location.href = 'result.html';
}
