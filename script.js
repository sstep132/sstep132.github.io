/*
Source: W3Schools Start Page Template
URL: https://www.w3schools.com/w3css/tryw3css_templates_start_page.htm
*/

/*To make navigation menu work on small screens*/
function myFunction() {
  var x = document.getElementById("navDemo");
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else { 
    x.className = x.className.replace(" w3-show", "");
  }
}
/*
<!-- REFERENCE -->
<!-- Title: The Birth of The World Wide Web -->
<!-- Author: Reece Woodard -->
<!-- Date Accessed: July 7, 2026 -->
<!-- Availability: https://reecewoodard.github.io/IT3203/quiz.html -->
<!-- I used this code as a reference for the design of the quiz on this page. I modified it -->
<!-- so that the questions are different and --> */
function gradeQuiz(e) {
  /*passing the event in to stop the page from reloading*/
            if (e) e.preventDefault();
            let score = 0;
            const total = 5;
            let resultText = "";

            const q1 = document.querySelector('input[name="q1"]:checked');
            if (q1 && q1.value === "d") { score++; resultText += "<br>Question 1 is correct!!!<br>"; }
            else { resultText += "<br>Question 1 is incorrect. The correct answer is Hypertext Transfer Protocol.)<br>"; }

            const q2 = document.querySelector('input[name="q2"]:checked');
            if (q2 && q2.value === "b") { score++; resultText += "Question 2 is correct!!!<br>"; }
            else { resultText += "Question 2 is incorrect. The correct answer is False.<br>"; }

            const q3Answers = Array.from(document.querySelectorAll('input[name="q3"]:checked')).map(cb => cb.value);
            if (q3Answers.includes("b") && q3Answers.includes("d") && !q3Answers.includes("a") && !q3Answers.includes("c")) {
                score++; resultText += "Question 3 is correct!!!<br>";
            } else {
                resultText += "Question 3 is incorrect. B and D are correct.<br>";
            }

            const q4Answers = Array.from(document.querySelectorAll('input[name="q4"]:checked')).map(cb => cb.value);
            if (!q4Answers.includes("a") && q4Answers.includes("b") && q4Answers.includes("c") && q4Answers.includes("d")) {
                score++; resultText += "Question 4 is correct!!!<br>";
            } else {
                resultText += "Question 4 is incorrect. B, C and D are correct.<br>";
            }
  
            const q5 = document.querySelector('input[name="q5"]').value.toLowerCase().trim();
            if (q5 === "") {
              alert("Please answer Question 5!!!")
              return;
            }
            if (q5 === "client") { score++; resultText += "Question 5 is correct!!!<br>"; }
            else { resultText += "Question 5 is incorrect. The answer is client.<br>"; }
         /* to add stars to show score. For each point they get a yellow star */
            let stars = "";
            if (score === 5) {
              stars = "\u2B50\u2B50\u2B50\u2B50\u2B50";
            }
            else if (score === 4) {
              stars = "\u2B50\u2B50\u2B50\u2B50\u2606";  
            }
            else if (score === 3) {
              stars = "\u2B50\u2B50\u2B50\u2606\u2606";  
            }
            else if (score === 2) {
              stars = "\u2B50\u2B50\u2606\u2606\u2606";  
            }
            else if (score === 1) {
              stars = "\u2B50\u2606\u2606\u2606\u2606";  
            }
  
            

            resultText += `<br><strong>Total Score: ${score}/${total}</strong><br>`;
            resultText += score >= 3 ? "<br><span style='color:green'>You Passed!</span>" : "<span style='color:red'>You Failed.</span><br>";
            resultText += `<br>Stars: ${stars}<br>`;

            document.getElementById("result").innerHTML = resultText;
        }
