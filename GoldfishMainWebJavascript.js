(function() {
         /*use an array to store questions*/const myQuestions = [
         {
         question: "How long did the world's longest living goldfish live?",
         answers: {
           a: "43 years",
           b: "45 years",
           c: "46 years"
         },
         correctAnswer: "a"
         },
         {
         question: "About how large can a goldfish grow?",
         answers: {
           a: "8-18 inches",
           b: "3-4 inches",
           c: "10-15 inches"
         },
         correctAnswer: "a"
         },
         {
         question: "How many gallons does one fancy goldfish need?",
         answers: {
           a: "5 gallons",
           b: "30 gallons",
           c: "20 gallons",
           d: "25 gallons"
         },
         correctAnswer: "c"
         },
         {question: "How many gallons does one common goldfish need?",
         answers: {
           a: "5 gallons",
           b: "30 gallons",
           c: "20 gallons",
           d: "25 gallons"
         },
         correctAnswer: "b"
         },
         {question: "What is not a goldfish type?",
         answers: {
           a: "Shubunkin",
           b: "Veiltail",
           c: "Oranda",
           d: "Dragonfly"
         },
         correctAnswer: "d"
         },
         {question: "What goldfish disease is known for small white dots over the goldfish?",
         answers: {
           a: "Dropsy",
           b: "Ick",
           c: "Ulcers",
           d: "Anchor Worm"
         },
         correctAnswer: "b"
         },
         {question: "What should you do to the tank before adding goldfish?",
         answers: {
           a: "cycle it",
           b: "wash well with soap",
           c: "empty it",
           d: "wash well with hydrogen perioxide"
         },
         correctAnswer: "a"
         },
         {question: "Why must I let the water sit for some time before using it?",
         answers: {
           a: "The water will have more bacteria",
           b: "To avoid ammonia",
           c: "To allow chlorine to evaporate",
           d: "To avoid high nitrate levels"
         },
         correctAnswer: "c"
         },
          {question: "What is a GOOD sign when choosing a goldfish?",
         answers: {
           a: "clamped fins",
           b: "eating",
           c: "missing scales",
           d: "twitching and scratching"
         },
         correctAnswer: "b"
         },
         {
         question: "What is a Goldfish",
         answers: {
           a: "carnivore",
           b: "herbivore",
           c: "omnivore",
           d: "decomposer",
         },
         correctAnswer: "c"
         }
         ];


         function buildQuiz() {
         /*have a place to store output*/
         const output = [];

         /*for each question*/
         myQuestions.forEach((currentQuestion, questionNumber) => {
         /*store list of answer choices*/
         const answers = [];

         /*store answer*/
         for (letter in currentQuestion.answers) {
           /*add html radio button to get answer*/
           answers.push(
             `<label>
                <input type="radio" name="question${questionNumber}" value="${letter}">
                 ${letter} :
                 ${currentQuestion.answers[letter]}
              </label>`
           );
         }
         /*add this question and output to display*/
         output.push(
           `<div class="slide">
              <div class="question"> ${currentQuestion.question} </div>
              <div class="answers"> ${answers.join("")} </div>
            </div>`
         );
         });
         /*Combine and put on page*/
         quizContainer.innerHTML = output.join("");
         }
         /*function to display*/
         function showResults() {
         /*Gather answers*/
         const answerContainers = quizContainer.querySelectorAll(".answers");
         /*Keep track of how many correct*/
         let numCorrect = 0;
         /*for each question*/
          myQuestions.forEach((currentQuestion, questionNumber) => {
         //find selected answer
         const answerContainer = answerContainers[questionNumber];
         const selector = `input[name=question${questionNumber}]:checked`;
         const userAnswer = (answerContainer.querySelector(selector) || {}).value;
          if (userAnswer === currentQuestion.correctAnswer) {
           //if answer is correct, add
           numCorrect++;
            //if correct, then green
         answerContainers[questionNumber].style.color = "lightgreen";
         }
           //if blank or incorrect
          else {
         //color the question and answer red
         answerContainers[questionNumber].style.color = "red";
         }
         });
         //show the number correct out of how many
         resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
         }
         //function that allows slides to be shown
         function showSlide(n) {
         // hide current slide
         slides[currentSlide].classList.remove("active-slide");
           //show new slide
         slides[n].classList.add("active-slide");
           //update slides
         currentSlide = n;
         /*if on first slide, do not display previous button*/
         if (currentSlide === 0) {
         previousButton.style.display = "none";
         } else {
         previousButton.style.display = "inline-block";
         }
         /*if on last slide, do not display next button and display submit buttton*/
         if (currentSlide === slides.length - 1) {
         nextButton.style.display = "none";
         submitButton.style.display = "inline-block";
         }
           /*otherwise show next button and do not show submit button*/
          else {
         nextButton.style.display = "inline-block";
         submitButton.style.display = "none";
         }
         }
         //moving to the next slide
         function showNextSlide() {
         showSlide(currentSlide + 1);
         }
         //moving to previous slide
         function showPreviousSlide() {
         showSlide(currentSlide - 1);
         }

         const quizContainer = document.getElementById("quiz");
         const resultsContainer = document.getElementById("results");
         const submitButton = document.getElementById("submit");
         //display quiz right away
         buildQuiz();
         const previousButton = document.getElementById("previous");
         const nextButton = document.getElementById("next");
         const slides = document.querySelectorAll(".slide");
         let currentSlide = 0;
         showSlide(0);
         //shows results
         submitButton.addEventListener("click", showResults);
          //moves to previous slide
         previousButton.addEventListener("click", showPreviousSlide);
           //moves to next slide
         nextButton.addEventListener("click", showNextSlide);
         })();