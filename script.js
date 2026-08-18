const questions = [
  {
    question: "Kas ir hipervizors?",
    options: [
      "Programma vai sistēma, kas veido virtuālos datorus",
      "Datora pele",
      "Interneta pārlūks",
    ],
    answer: 0,
  },
  {
    question: "Cik īstu datoru vajag, lai ar hipervizoru darbinātu vairākas virtuālās mašīnas?",
    options: ["Vienu spēcīgu datoru", "Desmit datorus", "Nevienu datoru"],
    answer: 0,
  },
  {
    question: "Ko dara virtuālā mašīna?",
    options: [
      "Tā uzvedas kā atsevišķs dators",
      "Tā ir tikai ekrāna bilde",
      "Tā izslēdz internetu",
    ],
    answer: 0,
  },
  {
    question: "Kāpēc hipervizors ir noderīgs?",
    options: [
      "Jo tas palīdz vienā datorā veikt vairākus darbus",
      "Jo tas padara tastatūru skaļāku",
      "Jo tas vienmēr salabo salūzušu monitoru",
    ],
    answer: 0,
  },
  {
    question: "Kur bieži izmanto hipervizorus?",
    options: ["Datu centros un uzņēmumos", "Tikai ledusskapjos", "Tikai printeros"],
    answer: 0,
  },
  {
    question: "Ko hipervizors sadala starp virtuālajām mašīnām?",
    options: ["Datora resursus", "Skolas zvanu laikus", "Krāsainos zīmuļus"],
    answer: 0,
  },
  {
    question: "Kas notiek, ja viena virtuālā mašīna apstājas?",
    options: [
      "Citas virtuālās mašīnas var turpināt strādāt",
      "Visa pasaule apstājas",
      "Dators uzreiz pazūd",
    ],
    answer: 0,
  },
  {
    question: "Kur atrodas 1. tipa hipervizors?",
    options: [
      "Tieši virs datora aparatūras",
      "Skolas somā",
      "Tikai mākoņos debesīs",
    ],
    answer: 0,
  },
  {
    question: "Kur darbojas 2. tipa hipervizors?",
    options: [
      "Kā programma parastā operētājsistēmā",
      "Tikai uz kalkulatora",
      "Tikai televizorā",
    ],
    answer: 0,
  },
  {
    question: "Kāds ir galvenais lapas salīdzinājums par hipervizoru?",
    options: [
      "Sporta zāle, ko sadala vairākās daļās",
      "Saldējums, kas kūst saulē",
      "Lietussargs lietainā dienā",
    ],
    answer: 0,
  },
];

const quizForm = document.querySelector("#quiz-form");
const resultBox = document.querySelector("#quiz-result");
const checkButton = document.querySelector("#check-answers");
const resetButton = document.querySelector("#reset-quiz");

function renderQuiz() {
  quizForm.innerHTML = questions
    .map(
      (item, index) => `
        <fieldset class="card quiz-question" data-question="${index}">
          <legend class="quiz-legend">${index + 1}. ${item.question}</legend>
          <div class="quiz-options">
            ${item.options
              .map(
                (option, optionIndex) => `
                  <label class="quiz-option">
                    <input type="radio" name="question-${index}" value="${optionIndex}" />
                    <span>${option}</span>
                  </label>
                `,
              )
              .join("")}
          </div>
        </fieldset>
      `,
    )
    .join("");
}

function clearState() {
  resultBox.textContent = "";
  resultBox.className = "quiz-result";

  document.querySelectorAll(".quiz-question").forEach((questionCard) => {
    questionCard.classList.remove("correct", "incorrect");
  });
}

function checkAnswers() {
  let score = 0;
  clearState();

  questions.forEach((item, index) => {
    const selected = quizForm.querySelector(`input[name="question-${index}"]:checked`);
    const questionCard = quizForm.querySelector(`[data-question="${index}"]`);

    if (selected && Number(selected.value) === item.answer) {
      score += 1;
      questionCard.classList.add("correct");
    } else {
      questionCard.classList.add("incorrect");
    }
  });

  resultBox.textContent = `Tu ieguvi ${score} no ${questions.length} punktiem.`;

  if (score === questions.length) {
    resultBox.classList.add("is-success");
  } else if (score >= 7) {
    resultBox.classList.add("is-warning");
  } else {
    resultBox.classList.add("is-error");
  }
}

function resetQuiz() {
  quizForm.reset();
  clearState();
}

renderQuiz();
checkButton.addEventListener("click", checkAnswers);
resetButton.addEventListener("click", resetQuiz);
