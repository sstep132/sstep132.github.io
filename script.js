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
<!-- REFERENCES -->
<!-- Title: The Birth of The World Wide Web -->
<!-- Author: Reece Woodard -->
<!-- Date Accessed: July 7, 2026 -->
<!-- Availability: https://reecewoodard.github.io/IT3203/quiz.html -->
<!-- I enhanced the original JavaScript quiz by preventing page reloads during submission,
<!--adding validation for empty responses, supporting multiple-answer questions, implementing
<!--case-insensitive text matching, and creating a visual star-rating system to improve
<!-- the user experience and feedback provided to users.
<!-- Also used https://www.w3schools.com/howto/howto_css_star_rating.asp to configure the star portion
*/
function gradeQuiz(e) {
  /*passing the event in to stop the page from reloading*/
            if (e) e.preventDefault();
            let score = 0;
            const total = 5;
            let resultText = "";

            /*checks to see if the value for q1 = d. adds results to resultText string depending on q1.value.*/
            const q1 = document.querySelector('input[name="q1"]:checked');
            if (q1 && q1.value === "d") { score++; resultText += "<br>Question 1 is correct!!!<br>"; }
            else { resultText += "<br>Question 1 is incorrect. The correct answer is Hypertext Transfer Protocol.)<br>"; }

            /*checks to see if the value for q2 = b. adds results to resultText string depending on q2.value.*/
            const q2 = document.querySelector('input[name="q2"]:checked');
            if (q2 && q2.value === "b") { score++; resultText += "Question 2 is correct!!!<br>"; }
            else { resultText += "Question 2 is incorrect. The correct answer is False.<br>"; }

            /*checks to what values were checked then looks through the list to see which were included.*/
            /*it then compares those values to see if they were correct and adds the appropriate string to resultText.*/
            const q3Answers = Array.from(document.querySelectorAll('input[name="q3"]:checked')).map(cb => cb.value);
            if (q3Answers.includes("b") && q3Answers.includes("d") && !q3Answers.includes("a") && !q3Answers.includes("c")) {
                score++; resultText += "Question 3 is correct!!!<br>";
            } else {
                resultText += "Question 3 is incorrect. B and D are correct.<br>";
            }

            /*checks to what values were checked then looks through the list to see which were included.*/
            /*it then compares those values to see if they were correct and adds the appropriate string to resultText.*/
            const q4Answers = Array.from(document.querySelectorAll('input[name="q4"]:checked')).map(cb => cb.value);
            if (!q4Answers.includes("a") && q4Answers.includes("b") && q4Answers.includes("c") && q4Answers.includes("d")) {
                score++; resultText += "Question 4 is correct!!!<br>";
            } else {
                resultText += "Question 4 is incorrect. B, C and D are correct.<br>";
            }

            /*Converts the input to lowercase and trims any extra space. If the box is empty, an alert is raised, appropriate string then added to resultText*/
            const q5 = document.querySelector('input[name="q5"]').value.toLowerCase().trim();
            if (q5 === "") {
              alert("Please answer Question 5!!!")
              return;
            }
            if (q5 === "client") { score++; resultText += "Question 5 is correct!!!<br>"; }
            else { resultText += "Question 5 is incorrect. The answer is client.<br>"; }
         
          /* to add stars to show score. For each point they get a star full star and 5 minus score empty stars*/
            let stars = '<span class="fa fa-star checked"></span>'.repeat(score) + '<span class="fa fa-star"></span>'.repeat(5-score);
  
            
            /*to set the percentage*/
            const percentage = total > 0 ? Math.round((score / total) * 100) : 0;
            
            /*this makes the score display as a rounded percentage*/
            resultText += `<br><strong>Total Score: ${percentage}% (${score}/${total})</strong><br>`;
            
            resultText += score >= 3 ? "<br><span style='color:green'>Congratulations! You Passed!</span>" : "<span style='color:red'>Sorry. You Failed.</span><br>";
            resultText += `<br>Stars: ${stars}<br>`;

            document.getElementById("result").innerHTML = resultText;
        }
