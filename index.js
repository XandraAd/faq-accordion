function toggleAnswer(index) {
     var questions = document.querySelectorAll(".question-answer .question");
     var answers = document.querySelectorAll(".question-answer .answer");
     var dropdowns = document.querySelectorAll(".arrow");
  
     questions.forEach(function(question, i) {
       if (i === index) {
         var answer = answers[i];
         var dropdown = dropdowns[i];
  
         if (answer.style.display === "block") {
           answer.style.display = "none";
           dropdown.classList.remove("rotate");
           question.classList.remove("bold");
           
           
        } else {
           answer.style.display = "block";
           dropdown.classList.add("rotate");
           question.classList.add("bold");
          
           
           
         }
       } else {
         answers[i].style.display = "none";
         dropdowns[i].classList.remove("rotate");
         question.classList.remove("bold");
         
         
       }
     });
   }
