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
<!-- so that...--> */
function gradeQuiz() {
            let score = 0;
            const total = 5;
            let resultText = "";

            const q1 = document.querySelector('input[name="q1"]:checked');
            if (q1 && q1.value === "d") { score++; resultText += "Question 1 is correct!!!<br>"; }
            else { resultText += "Question 1 is wrong. The correct answer is Hypertext Transfer Protocol.)<br>"; }

            const q2 = document.querySelector('input[name="q2"]:checked');
            if (q2 && q2.value === "b") { score++; resultText += "Question 2 is correct!!!<br>"; }
            else { resultText += "Question 2 is incorrect. The correct answer is False.<br>"; }

            const q3Answers = Array.from(document.querySelectorAll('input[name="q3"]:checked')).map(cb => cb.value);
            if (q3Answers.includes("b") && q3Answers.includes("d") && !q3Answers.includes("a") && !q3Answers.includes("c")) {
                score++; resultText += "Question 3 is correct!!!<br>";
            } else {
                resultText += "Question 3 is incorrect. B and D are correct.<br>";
            }

            const q4 = document.querySelector('input[name="q4"]').value.trim();
            if (q4 === "1993") { score++; resultText += "Q4: Correct<br>"; }
            else { resultText += "Q4: Incorrect (Answer: 1993)<br>"; }

            const q5Answers = Array.from(document.querySelectorAll('input[name="q5"]:checked')).map(cb => cb.value);
            if (q5Answers.includes("a") && q5Answers.includes("c") && !q5Answers.includes("b")) {
                score++; resultText += "Q5: Correct<br>";
            } else {
                resultText += "Q5: Incorrect (Answer: a and c)<br>";
            }

            resultText += `<br><strong>Total Score: ${score}/${total}</strong><br>`;
            resultText += score >= 3 ? "<span style='color:green'>You Passed!</span>" : "<span style='color:red'>You Failed.</span>";

            document.getElementById("result").innerHTML = resultText;
        }
