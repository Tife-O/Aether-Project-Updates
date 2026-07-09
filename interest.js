// interest.js - Updated to Store User Responses


document.addEventListener("DOMContentLoaded", () => {
    const questions = [
        {
            question: "How do you currently engage with your career interests outside of school/work?",
            options: [
                "A) I actively participate in projects, internships, or side hustles.",
                "B) I research and study the field in my free time but don’t take many practical steps.",
                "C) I occasionally explore my interests, but I’m not consistent.",
                "D) I don’t engage much outside of my regular responsibilities."
            ]
        },
        {
            question: "What type of activities do you enjoy the most?",
            options: [
                "A) Solving complex problems and analyzing data",
                "B) Designing and building new things",
                "C) Helping and communicating with people",
                "D) Organizing and managing projects",
                "E) Creating art, music, or content"
            ]
        },
        {
            question: "Which of the following describes your ideal work environment?",
            options: [
                "A) A research lab or tech startup",
                "B) A hands-on workshop or engineering firm",
                "C) A hospital, school, or non-profit organization",
                "D) A corporate office or business setting",
                "E) A creative studio or media company"
            ]
        },
        {
            question: "What motivates you the most in your career?",
            options: [
                "A) Solving real-world problems using technology",
                "B) Inventing and improving physical or digital products",
                "C) Making a direct impact on people’s lives",
                "D) Achieving financial success and career growth",
                "E) Expressing yourself and inspiring others"
            ]
        },
        {
            question: "Which type of project would you enjoy the most?",
            options: [
                "A) Developing a cutting-edge AI model or software application",
                "B) Designing and testing a new robotic system",
                "C) Leading a community outreach or mentoring program",
                "D) Launching a startup or improving a business strategy",
                "E) Writing a book, making a film, or producing music"
            ]
        }
    ];

    let currentQuestionIndex = 0;
    const questionText = document.getElementById("question-text");
    const optionsContainer = document.getElementById("options-container");
    const nextButton = document.getElementById("next-btn");
    const clearBtn = document.getElementById("clear-btn");
    
    let userResponses = [];

    function loadQuestion() {
        const currentQuestion = questions[currentQuestionIndex];
        questionText.innerText = currentQuestion.question;
        optionsContainer.innerHTML = "";

        currentQuestion.options.forEach(option => {
            const button = document.createElement("button");
            button.classList.add("option-btn");
            button.innerText = option;
            button.onclick = () => {
                userResponses[currentQuestionIndex] = option;
                localStorage.setItem("userResponses", JSON.stringify(userResponses));
                nextQuestion();
            };
            optionsContainer.appendChild(button);
        });
    }

    function nextQuestion() {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            loadQuestion();
        } else {
            window.location.href = "search.html";
        }
    }

    loadQuestion();
});

// const savedResults = JSON.parse(localStorage.getItem("userResponses")) || [];

// if (savedResultsExist()) {
//     displaySavedResults();
// }

// document.getElementById("clear-btn").onclick = () => {
//     localStorage.removeItem("userResponses");
//     location.reload(); // simple way to restart the quiz
// };

// function displaySavedResults() {
//     const resultsDiv = document.getElementById("saved-results");
//     const responses = JSON.parse(localStorage.getItem("userResponses"));

//     if (responses && responses.length === questions.length) {
//         resultsDiv.innerHTML = "<h3>Your Previous Answers:</h3><ul>" +
//             responses.map((resp, i) => `<li><strong>Q${i+1}:</strong> ${resp}</li>`).join('') +
//             "</ul>";
//         document.getElementById("quiz-container").style.display = "none"; // hide quiz if completed
//     }
// }

// // Call immediately when DOM loads:
// displaySavedResults();