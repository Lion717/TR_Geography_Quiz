  const quizData = [{
      question: "Aşağıdaki yer şekillerinden hangisinin oluşumunda iç kuvvetlerin doğrudan etkili olduğu söylenebilir?",
      a: "Çukurova Deltası",
      b: "Toros Dağları",
      c: " Çarşamba Ovası",
      d: "Damlataş Mağarası",
      correct: "b",
    },
    {
      question: "Kimyasal tortul kayaçların yaygın olarak bulunduğu bir alanda aşağıda verilen yer şekillerinden hangisinin daha kolay oluşması beklenir?",
      a: "Kırgıbayır",
      b: "Falez",
      c: "Lapya",
      d: "Tombolo",
      correct: "c",
    },
    {
      question: "Büyük su kütlelerinin tabanında ya da kenarlarında kumtanelerinin doğal bir çimento yardımıyla birleşmesi sonucunda kum taşı oluşmaktadır. Kum taşı oluşum özelliklerine göre aşağıdaki kayaç türlerinden hangisi içerisinde yer alır?",
      a: "Fiziksel tortul",
      b: "Dış püskürük",
      c: "Başkalaşım",
      d: "Organik tortul",
      correct: "a",
    },
    {
      question: "Püskürük ve tortul kayaçlar yüksek sıcaklık ve basınç altında kalarak değişime uğrarlar. Bu şekilde oluşan kayaçlara başkalaşım kayaçları denilmektedir. Aşağıda verilen kayaçlardan hangisi bu şekilde oluşmuştur?",
      a: "Konglomera",
      b: "Andezit",
      c: "Gabro",
      d: "Mermer",
      correct: "d",
    },
   {
      question: "Aşağıda verilen yeryüzü şekillerinden hangisinin oluşumu üzerinde akarsularım hem aşındırma hem de biriktirme faaliyetleri etkili olmuştur?",
      a: "Taraça",
      b: "Dev Kazanı",
      c: "Çentik Vadi",
      d: "Delta Ovası",
      correct: "a",
    },
    {
      question: "Bir akarsuyun boyuna profilinin eğimi kısa mesafede büyük oranda artıyor ise bu akarsu üzerinde aşağıda verilen yer şekillerinden hangisinin oluşması beklenir?",
      a: "Menderes",
      b: "Dev kazanı",
      c: "Traverten",
      d: " Irmak adası",
      correct: "b",
    },
    {
      question: "Rüzgâr aşındırma ve biriktirme kuvvetinin etkili olduğu yerlerin ortak özellikleri arasında aşağıdakilerden hangisi gösterilemez?",
      a: "Bitki örtüsü cılızdır.",
      b: "Hava genellikle bulutsuzdur.",
      c: "Yağış rejimi düzensizdir.",
      d: "Toprak yılın büyük bölümünde donmuş haldedir.",
      correct: "d",
		},
		{
      question: "Aşağıda verilen kıyı tiplerinden hangisi Türkiye’de görülmez?",
      a: "Boyuna kıyı",
      b: "Ria tipi kıyı",
      c: "Haliçli kıyı",
      d: "Dalmaçya tipi kıyı",
      correct: "c",
		},
		{
      question: "I. Tombolo	- II. Kumsal	- III. Falez		Yukarıda verilen yer şekillerinden hangileri dalgaların biriktirme faaliyetleri sonucunda oluşmuştur?",
      a: "Yalnız I.",
      b: "I ve II.",
      c: "I ve III.",
      d: " II ve III.",
      correct: "b",
		},
    {
      question: "I. Mağara	-	II. Sarkıt	-	III. Lapya	-	IV. Dolin	-	V. Traverten		Türkiye’de görülen yukarıdaki yer şekillerinden hangileri karstik birikim şekillerindendir?",
      a: "I ve II.",
      b: "I ve IV",
      c: "II ve V.",
      d: "IV ve V.",
      correct: "c",
		},
 ];

  const quiz = document.getElementById("quiz");
  const answerElements = document.querySelectorAll(".answer");
  const questionElement = document.getElementById("question");
  const a_text = document.getElementById("a_text");
  const b_text = document.getElementById("b_text");
  const c_text = document.getElementById("c_text");
  const d_text = document.getElementById("d_text");
  const submitButton = document.getElementById("submit");

  let currentQuiz = 0;
  let score = 0;

  const deselectAnswers = () => {
    answerElements.forEach((answer) => (answer.checked = false));
  };

  const getSelected = () => {
    let answer;
    answerElements.forEach((answerElement) => {
      if (answerElement.checked) answer = answerElement.id;
    });
    return answer;
  };

  const loadQuiz = () => {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
    questionElement.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
  };

  loadQuiz();

  submitButton.addEventListener("click", () => {
    const answer = getSelected();
    if (answer) {
      if (answer === quizData[currentQuiz].correct) score++;
      currentQuiz++;
      if (currentQuiz < quizData.length) loadQuiz();
      else {
        quiz.innerHTML = `  
                    <h2>${quizData.length} sorudan ${score} tanesini bildin. Tebrikler.</h2>  
                    <button onclick="history.go(0)">Baştan Başla</button>  
                    `
      }
    }
  });
