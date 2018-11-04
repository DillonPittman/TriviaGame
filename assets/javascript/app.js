// var questions = [{
//   question: "What was the first burger of the day?",
//   answers:["New Bacon-ings","Foot Feta-ish Burger","The Child Molester","Tunami"],
//   correctAnswer: "New Bacon-ings",
//   image: "https://media.giphy.com/media/l0Hlx6jKwLPAd4PAc/giphy.gif"
// },{
//   question: "Which character is voiced by a woman?",
//   answers:["Tina Belcher","Linda Belcher","Louise Belcher","Gene Belcher"],
//   correctAnswer: "Louise Belcher",
//   image: "https://media.giphy.com/media/3og0IGQGmdZN41qC7S/source.gif"
// },{
//   question: "Which character does H. Jon Benjamin NOT voice?",
//   answers:["Bob Blecher","Jimmy Jr.","Marshmallow","Peter Pescadero"],
//   correctAnswer: "Marshmallow",
//   image: "https://i.gifer.com/3zjz.gif"
// },{
//   question: "Who voiced Bob's father in the episode, Bob Fires The Kids?",
//   answers:["Kevin Kline","Jeffrey Tambor","Bill Hader","Stephen Collins"],
//   correctAnswer: "Bill Hader",
//   image: "http://i.imgur.com/ueVi4RT.jpg"
// },{
//   question: "Stacy Micelli ended the argument between Gale and Linda about which celebrity?",
//   answers:["Delta Burke","Scott Bakula","Carly Simon","Cindi Lauper"],
//   correctAnswer: "Delta Burke",
//   image: "https://media.giphy.com/media/3ohzdZbPlInTwbUg2k/source.gif"
// },{
//   question: "How much is a burger of the day?",
//   answers:["$4.85","$5.50","$5.95","$6.15"],
//   correctAnswer: "$5.95",
//   image: "https://i.imgur.com/yVS1DMe.gif"
// },{
//   question: "Which is NOT the name of one of Gale's cats?",
//   answers:["Pinkeye","Mr.Business","Dr. Paula Hutchison","Jean Paw'd Van Damme"],
//   correctAnswer: "Dr. Paula Hutchison",
//   image: "https://66.media.tumblr.com/2d43a5f287d95275127173251aa74ab0/tumblr_olshc2bsHQ1so18vqo1_500.gif"
// },{
//   question: "In the episode, The Unnatural, Tina has coffee for the first time and rappidly suggests several burger of the day ideas. Which is NOT one of those ideas?",
//   answers:["Woulda, Coulda, Gouda","As Gouda As It Gets","Gouda Gouda Two Shoes (It comes with shoes)","Gouda To The Last Drop"],
//   correctAnswer: "Gouda To The Last Drop",
//   image: "https://media.giphy.com/media/8eOXrYL5FjLlm/giphy.gif"
// },{
//   question: "Which Pesto twin is older?",
//   answers:["Andy","Ollie","Jimmy Jr."],
//   correctAnswer: "Ollie",
//   image: "https://media.giphy.com/media/l0HlQERuMdJ0pbszu/giphy.gif"
// }];

// var card = $("#quiz-area");
// var countStartNumber = 30;

// // Variable to hold our setInterval
// var timer;

// var game = {

//   questions: questions,
//   currentQuestion: 0,
//   counter: countStartNumber,
//   correct: 0,
//   incorrect: 0,

//   countdown: function() {
//     game.counter--;
//     $("#counter-number").text(game.counter);
//     if (game.counter === 0) {
//       console.log("TIME UP");
//       game.timeUp();
//     }
//   },

//   loadQuestion: function() {

//     timer = setInterval(game.countdown, 1000);

//     card.html("<h2>" + questions[this.currentQuestion].question + "</h2>");

//     for (var i = 0; i < questions[this.currentQuestion].answers.length; i++) {
//       card.append("<button class='answer-button' id='button' data-name='" + questions[this.currentQuestion].answers[i]
//       + "'>" + questions[this.currentQuestion].answers[i] + "</button>");
//     }
//   },

//   nextQuestion: function() {
//     game.counter = countStartNumber;
//     $("#counter-number").text(game.counter);
//     game.currentQuestion++;
//     game.loadQuestion();
//   },

//   timeUp: function() {

//     clearInterval(timer);

//     $("#counter-number").html(game.counter);

//     card.html("<h2>Out of Time!</h2>");
//     card.append("<h3>The Correct Answer was: " + questions[this.currentQuestion].correctAnswer);
//     card.append("<img src='" + questions[this.currentQuestion].image + "' />");

//     if (game.currentQuestion === questions.length - 1) {
//       setTimeout(game.results, 3 * 1000);
//     }
//     else {
//       setTimeout(game.nextQuestion, 3 * 1000);
//     }
//   },

//   results: function() {

//     clearInterval(timer);

//     card.html("<h2>All done, heres how you did!</h2>");

//     $("#counter-number").text(game.counter);

//     card.append("<h3>Correct Answers: " + game.correct + "</h3>");
//     card.append("<h3>Incorrect Answers: " + game.incorrect + "</h3>");
//     card.append("<h3>Unanswered: " + (questions.length - (game.incorrect + game.correct)) + "</h3>");
//     card.append("<br><button id='start-over'>Start Over?</button>");
//   },

//   clicked: function(e) {
//     clearInterval(timer);
//     if ($(e.target).attr("data-name") === questions[this.currentQuestion].correctAnswer) {
//       this.answeredCorrectly();
//     }
//     else {
//       this.answeredIncorrectly();
//     }
//   },

//   answeredIncorrectly: function() {

//     game.incorrect++;

//     clearInterval(timer);

//     card.html("<h2>Nope!</h2>");
//     card.append("<h3>The Correct Answer was: " + questions[game.currentQuestion].correctAnswer + "</h3>");
//     card.append("<img src='" + questions[game.currentQuestion].image + "' />");

//     if (game.currentQuestion === questions.length - 1) {
//       setTimeout(game.results, 3 * 1000);
//     }
//     else {
//       setTimeout(game.nextQuestion, 3 * 1000);
//     }
//   },

//   answeredCorrectly: function() {

//     clearInterval(timer);

//     game.correct++;

//     card.html("<h2>Correct!</h2>");
//     card.append("<img src='" + questions[game.currentQuestion].image + "' />");

//     if (game.currentQuestion === questions.length - 1) {
//       setTimeout(game.results, 3 * 1000);
//     }
//     else {
//       setTimeout(game.nextQuestion, 3 * 1000);
//     }
//   },

//   reset: function() {
//     this.currentQuestion = 0;
//     this.counter = countStartNumber;
//     this.correct = 0;
//     this.incorrect = 0;
//     this.loadQuestion();
//   }
// };

// // CLICK EVENTS

// $(document).on("click", "#start-over", function() {
//   game.reset();
// });

// $(document).on("click", ".answer-button", function(e) {
//   game.clicked(e);
// });

// $(document).on("click", "#start", function() {
//   $("#sub-wrapper").prepend("<h2>Time Remaining: <span id='counter-number'>30</span> Seconds</h2>");
//   game.loadQuestion();
// });