var questions = {
  0: {
    question: "What is the most streamed song of Taylor Swift in Spotify? ",
    choicetype: "cNoImage",
    choices: [
      {
        caption: "Enchanted"
      },
      {
        caption: "Lover"
      },
      {
        caption: "All Too Well (10 Minute Version)",
        right: "yes"
      },
      {
        caption: "You Belong With Me"
      }
    ]
  },
  1: {
    question: "Who is the second man who landed on the Moon? ",
    choicetype: "enum",
    qAns: ["buzzaldrin"]
  },
  2: {
    question: "Most Common Mbti Type?",
    choicetype: "cNoImage",
    choices: [
      {
        caption: "INFP"
      },
      {
        caption: "ESTJ"
      },
      {
        caption: "ISFJ",
        right: "yes"
      },
      {
        caption: "ENFP"
      }
    ]
  },
  3: {
    question: "Most Common Blood Type?",
    choicetype: "cNoImage",
    choices: [
      {
        caption: "AB+"
      },
      {
        caption: "B-"
      },
      {
        caption: "O+",
        right: "yes"
      },
      {
        caption: "A-"
      }
    ]
  },
4: {
  question: "Who is the tallest basketball player in NBA history?",
  choicetype: "enum",
  qAns: ["gheorghemuresan"]
  },
5: {
  question: "Who is the smallest olympic swimmer in the world? ",
  choicetype: "enum",
  qAns: ["bradcooper"]
  },
6: {
    question: "What is the most expensive car ever sold as of 2021?",
    choicetype: "cNoImage",
    choices: [
      {
        caption: "Rolls-Royce Boat Tail"
      },
      {
        caption: "Pagani Zonda"
      },
      {
        caption: "Ferrari 250 GTO",
        right: "yes"
      },
      {
        caption: "Bugatti"
      }
    ]
  },
7: {
    question: "What is the most watched Netflix series?",
    choicetype: "cNoImage",
    choices: [
      {
        caption: "Monster: The Jeffrey Dahmer Story"
      },
      {
        caption: "Wednesday"
      },
      {
        caption: "Stranger Things Season 4",
        right: "yes"
      },
      {
        caption: "Bridgerton Season 2"
      }
    ]
  },  
 8: {
    question: "Who was the sixth wife of King Henry VIII?",
    choicetype: "cNoImage",
    choices: [
      {
        caption: "Catherine of Aragon"
      },
      {
        caption: "Anne Boleyn"
      },
      {
        caption: "Jane Seymour"
      },
      {
        caption: "Catherine Parr",
        right: "yes"
      }
    ]
  },  
9: {
    question: "This man copied the homework of his statistics class and solved it without realizing it was two unsolved statistical problems",
    choicetype: "enum",
    qAns: ["georgedantzig"]
  },
10: {
    question: "Who is the tallest man in the world?",
    choicetype: "enum",
    qAns: ["sultankosen"]
  },
11: {
    question: "Who is the shortest woman in the world?",
    choicetype: "enum",
    qAns: ["jyotiamge"]
  },
12: {
    question: "Who has the longest hair in world?",
    choicetype: "enum",
    qAns: ["ashamandela"]
  },
13: {
    question: "What is the age of the oldest person who ever lived?",
    choicetype: "enum",
    qAns: ["122yearsold", "122"]
  },
14: {
    question: "What is the smallest animal?",
    choicetype: "cNoImage",
    choices: [
      {
        caption: "Kitti's Hog-Nosed Bat"
      },
      {
        caption: "Slender Blind Snakes"
      },
      {
        caption: "Paedophryne amauensis",
        right: "yes"
      },
      {
        caption: "Paedocypris"
      }
    ]
  },
15: {
    question: "What do 4 crows mean?",
    choicetype: "enum",
    qAns: ["wealthandprosperity"]
  },
16: {
    question: "What is the weight of a blue whale?",
    choicetype: "cNoImage",
    choices: [
      {
        caption: "100 tons"
      },
      {
        caption: "150 tons"
      },
      {
        caption: "200 tons",
        right: "yes"
      },
      {
        caption: "250 tons"
      }
    ]
  },
17: {
    question: "Who wrote the poem “The Road Not Taken?”",
    choicetype: "cNoImage",
    choices: [
      {
        caption: "Emily Dickinson"
      },
      {
        caption: "Walt Whitman"
      },
      {
        caption: "Robert Frost",
        right: "yes"
      },
      {
        caption: "Edgar Allan Poe"
      }
    ]
  },
18: {
    question: "Who painted the “La Pieta”?",
    choicetype: "enum",
    qAns: ["michelangelo"]
  },
19: {
    question: "How long did the Ottoman Empire Last?",
    choicetype: "cNoImage",
    choices: [
      {
        caption: "300 years"
      },
      {
        caption: "400 years"
      },
      {
        caption: "500 years"
      },
      {
        caption: "600 years",
        right: "yes"
      }
    ]
  },
20: {
    question: "Who was the 31st president of the USA?",
    choicetype: "enum",
    qAns: ["herberthoover"]
  },
21: {
    question: "How many moons does jupiter have?",
    choicetype: "cNoImage",
    choices: [
      {
        caption: "90"
      },
      {
        caption: "91"
      },
      {
        caption: "92",
        right: "yes"
      },
      {
        caption: "93"
      }
    ]
  },
22: {
    question: "Which constellation has the star “Merak?”",
    choicetype: "cNoImage",
    choices: [
      {
        caption: "Orion"
      },
      {
        caption: "Cassiopeia "
      },
      {
        caption: "Ursa Major",
        right: "yes"
      },
      {
        caption: "Ursa Minor"
      }
    ]
  },
23: {
    question: "What number is considered unlucky in Japan?",
    choicetype: "enum",
    qAns: ["4", "four"]
  },
24: {
    question: "Which American state has the most active volcanoes? ",
    choicetype: "cNoImage",
    choices: [
      {
        caption: "California"
      },
      {
        caption: "Hawaii"
      },
      {
        caption: "Alaska",
        right: "yes"
      },
      {
        caption: "Washington"
      }
    ]
  }
}

const questionNum = 10; //declare number of questions

  /* function for starting the quiz */
  function startQuiz() {
    const main = document.getElementById("qContainer");
    document.getElementById("startQuiz").style.display = "none";
    document.getElementById("mainQuiz").style.display = "flex";
    
      const selectedQuestions = getRandom(questions, questionNum);
      
      for (let j = 0; j < selectedQuestions.length; j++) { // for looping each question
        const qDiv = document.createElement("div");
        qDiv.classList.add("question");
        
        qDiv.innerHTML = "<p>" + questions[selectedQuestions[j]].question + "</p>";
        
        const choices = document.createElement("div");
        if (questions[selectedQuestions[j]].choicetype !== "enum") { // to seperate choicetype enum which uses a different approach
        let column;
        for (let k = 0; k < questions[selectedQuestions[j]].choices.length; k++) { // for looping each of the choices per question
          if (questions[selectedQuestions[j]].choicetype == "cNoImage") {
            choices.classList.add("cNoImage");
              if (k == 0 || k == 2) {
                column = document.createElement("div");
                column.classList.add("column");
              }
              const textChoice = document.createElement("div");
              textChoice.classList.add("textChoice");
              textChoice.classList.add("selected");
              textChoice.innerHTML = "<p>" + questions[selectedQuestions[j]].choices[k].caption + "</p>";
              if (questions[selectedQuestions[j]].choices[k].right == "yes") {
                textChoice.classList.add("right");
              }
              column.appendChild(textChoice);
              if (k == 1 || k == 3) {
                choices.appendChild(column);
              }
          }
        }
      } else if (questions[selectedQuestions[j]].choicetype == "enum") { // if the question is an enumeration type question but has no snippet
        choices.classList.add("enum");
        const input = document.createElement("input");
        input.setAttribute("type", "text");
        input.setAttribute("placeholder", "Answer")
        input.classList.add("questionInput");
        choices.appendChild(input);
      }
        qDiv.appendChild(choices); 
        main.appendChild(qDiv);
        main.style.display = "block";
        document.getElementById("tradQuiz").style.justifyContent = "flex-start";
      }
    randomizeDivOrder();
    eventListeners();
    randomBgColor();
    document.getElementById("submitQuiz").style.display = "block";
  }
  
  /* random numbers generator */
  function getRandom(questions, questionNum) {
    var selectedQuestions = [];
    var similar;
    var questionList = Object.keys(questions);
  
    /* the loop below randomly selects questions from the questions list */
    for (let i = 0; i < questionNum && questionList.length > 0; i++) {
      var random = Math.floor(Math.random() * questionList.length);
      similar = false;
      for (let j = 0; j < selectedQuestions.length; j++) { //checks for repetition in random numbers
        if (selectedQuestions[j] == random) {
          similar = true;
          break;
        }
      }
      if (similar == false) {
        selectedQuestions.push(random); //if the number was not repeated, it gets pushed into the array
      } else {
        i--; //decrements the loop by 1 if there was a repeated number
      }
    }
  return selectedQuestions;
  }
  
/* function to randomize the div order using Fisher-Yates */
function randomizeDivOrder() {
  const choices = document.querySelectorAll(".cNoImage"); 
  choices.forEach(choice => { // to randomize the order of all choices
    const column = Array.from(choice.querySelectorAll(".column"));
    if (column.length == 2) {
      column.forEach(column => {
        const random = Math.floor(Math.random() * 2);
        if (random == 1) {
          const textChoice = Array.from(column.querySelectorAll(".textChoice"));
          column.insertBefore(textChoice[1], textChoice[0]);
        }
      });
      const random = Math.floor(Math.random() * 2);
      if (random == 1) {
        choice.insertBefore(column[1], column[0]);
      }
    } else {
    column.forEach(column => {
    const textChoice = Array.from(column.querySelectorAll(".textChoice"));
    for (let i = textChoice.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      column.insertBefore(textChoice[j], textChoice[i]);
    }
  });
  }
  });
}

  /* event listeners for divs so that once a div is clicked, the other three change opacity */
  function eventListeners() {
    const parent = document.querySelectorAll(".question");
  
    parent.forEach((question, index) => {
      const choices = question.querySelectorAll(".cNoImage .textChoice");
  
      choices.forEach(choice => {
        choice.addEventListener("click", () => {  
          choice.classList.add("selected");
          choice.classList.remove("deselected");
          choices.forEach(otherChoice => {
            if (otherChoice !== choice) {
              otherChoice.classList.add("deselected");
              otherChoice.classList.remove("selected");
            }
          });
        });
      });
    });
  };
  
  /* for assigning each div with a random background color */
  function randomBgColor() {
    const colors = ["#FFEBEB", "#ADE4DB", "#6DA9E4", "#F6BA6F", "#C9A7EB", "#6C9BCF", "#AFD3E2", "#ADE4DB", "#FFDEB4", "#FDF7C3", "#FFB4B4", "#EDDBC7", "#FF9494", "#B0DAFF", "#E5BA73", "#FBFACD"];
    const divs = document.querySelectorAll(".question");
  
    divs.forEach(function(div) {
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      div.style.backgroundColor = randomColor;
    });
  }
  
  /* for checking the completion of inputs */
  function checkQuizInput() {
    const questions = document.querySelectorAll(".question");
  
    if (confirm("Are you sure?")) {
      var found;
      questions.forEach(question => {
      const choices = question.querySelectorAll(".textChoice");
      const questionInputs = document.querySelectorAll(".questionInput");

        if (choices.length > 0) { // for questions with text choices
          if (found) {
            return;
          }
          let selected = 0;
          found = false;
  
          choices.forEach(choice => {
            if (choice.classList.contains("selected")) {
              selected++;
            }
          });
          if (selected > 1) { //if more than one choice has class "selected" per question, that means that the question has not been answered yet and the script scrolls to that particular question
            alert("Please fill out all questions.");
            question.scrollIntoView({ behavior: "smooth" });
            found = true;
          }
        }
  
        if (questionInputs.length > 0) { // for questions with enumeration
          if (found) {
            return;
          }
          found = false;
  
          questionInputs.forEach(input => {
            if (input.value == "") {
              alert("Please fill out all questions.");
              input.scrollIntoView({ behavior: "smooth" });
              found = true;
            }
          });
        }
      });
      if (found !== true) { //if all questions are answered, inputs are evaluated
        calculateInput();
      }
    } else {
      return;
    }
  }
  
  /* for calculating input values */
  var score;
  
  function calculateInput() {
    score = 0;
  
    const choices = document.querySelectorAll(".textChoice");
    const questionInputs = document.querySelectorAll(".questionInput");

    choices.forEach(choice => {
      if(choice.classList.contains("selected")) {
        if(choice.classList.contains("right")) {
          score++;
          score++;
        }
      }
    });
  
    questionInputs.forEach(questionInput => {
      var index;
      var search;
      var input = questionInput.value;
      var modInput = "";

      search = questionInput.parentElement.parentElement.querySelector("p").textContent;

      for (let i = 0; i < Object.keys(questions).length; i++) {
        if (questions[i].question == search) {
          index = i;
        }
      }
      
      for (let i = 0; i < input.length; i++) {
        var currentChar = input.charAt(i);
        if (currentChar !== " " && currentChar !== "-") {
          if (!isNaN(currentChar)) {
            modInput += currentChar;
          } else {
            modInput += currentChar.toLowerCase();
          }
        }
      }
  
      for (let i = 0; i < Object.keys(questions[index].qAns).length; i++) {
        if (questions[index].qAns[i] == modInput) {
          score++;
          score++;
        }
      }
    });
    displayResult();
  }
  
  /* for displaying the result on the page */
  function displayResult() {
    document.getElementById("mainQuiz").style.display = "none";
    document.getElementById("results").style.display = "flex";
  
    // to calculate percentages
    var correctPercent = score / 20;
    var wrongPercent = (20 - score) / 20;
  
    // chart with chart.js
    const data = {
      labels: ["Correct", "Wrong"],
      datasets: [{
        label: "  You are",
        data: [correctPercent * 100,  wrongPercent * 100],
        backgroundColor: [
          "#19A7CE", "#FF6969"
        ],
        borderWidth: 8,
        borderColor: "rgba(255,255,255,0.8)",
        hoverOffset: 6
      }]
    };
  
    const config = {
      type: 'doughnut',
      data: data,
      options: {
        borderWidth: 4,
        plugins: {
          tooltip: {
            callbacks: {
              label: function(context) {
                const label = context.dataset.label || " ";
                const value = context.parsed.toFixed(2) + "%";
                const section = context.label || " ";
                return `${label} ${value} ${section}`;
              }
            }
          },
          legend: {
            display: false
          }
        }
      }
    };
  
    var chart = new Chart(
      document.getElementById("chart"),
      config
    );
  
    const ul = document.querySelector("ul");
    // making the ul that stands as a legend for the chart
  
    function populateUl() {
      data.labels.forEach((l, i) => {
        const li = document.createElement("li");
        li.innerHTML = `${l}: <span class="percentage">${data.datasets[0].data[i].toFixed(2)}%</span>`;
        ul.appendChild(li);
      });
    }
    populateUl();
  
    // displaying more result info
    var resH = document.getElementById("resultHeading");
    var resD = document.getElementById("resultDescription");
    var container = document.getElementsByClassName("container")[0];
  
    document.getElementById("youAre").innerHTML = "You are a...";
    if (score < 12) {
      resH.innerHTML = "You Failed :(";
      resD.innerHTML = "You got " + score + " /20. Better luck next time.";
      container.style.backgroundImage = "url('https://i.pinimg.com/564x/1e/c6/9b/1ec69b62a622a99428a2cd9cbafa22ee.jpg')"
    } else if (score <= 20) {
      resH.innerHTML = "You passed! :D";
      resD.innerHTML = "You got " + score + " /20, "
      container.style.backgroundImage = "url('https://i.pinimg.com/564x/30/84/ad/3084ad39d3b054e4643d4c7b9bd22983.jpg')"
    }
  
    var historyInitial = document.getElementById("historyInitial");
    var triviaCont = document.getElementById("fp");
    var triviaScoreCont = document.getElementById("triviaScore");
  
    if (localStorage.getItem("isLoggedIn")) {
      document.getElementById("resetAttemptHistory").style.display = "block";
      let attempts = localStorage.getItem("triviaAttempts");
      attempts++;
      localStorage.setItem("triviaAttempts", attempts);
      var saveData = [resH.innerHTML, score];
      localStorage.setItem("triviaScore" + attempts, JSON.stringify(saveData));
      historyInitial.innerHTML = "View your quiz history below."
  
      for (let i = 1; i < attempts; i++) {
        const key = "triviaScore" + i;
        const array = JSON.parse(localStorage.getItem(key));
  
        const triviaC = document.createElement("p");
        triviaC.innerHTML = array[0];
        triviaCont.appendChild(triviaC);
  
        const triviaPC = document.createElement("p");
        triviaPC.innerHTML = array[1] + "/20";
        triviaScoreCont.appendChild(triviaPC);
      }
    } else {
      historyInitial.innerHTML = "To save the results of your next attempt, sign up or log in."
      triviaCont.style.display = "none";
      triviaScoreCont.style.display = "none";
      document.getElementById("resetAttemptHistory").style.display = "none";
    }
  }
  
  // to completely reset user attempt history
  function resetAttemptHistory() {
    var result = confirm("This will wipe out ALL of your attempt histories, including your current one, for this quiz. This can no longer be undone and your data cannot be recovered. If you would like to do so, please click OK");
    let attempts = localStorage.getItem("triviaAttempts");
    if (result) {
      for (let i = 1; i <= attempts; i++) {
        const key = "triviaScore" + i;
        localStorage.removeItem(key);
      }
      attempts = 0;
      localStorage.setItem("triviaAttempts", 0);
      window.location.reload();
    }
  }