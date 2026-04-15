
const questions = document.querySelectorAll(".faq-flex  div");
const answers = document.querySelectorAll(".answer");

questions.forEach((q, index) => {
    q.addEventListener("mouseenter", () => {
        
        
        questions.forEach(item => item.classList.remove("active"));
        answers.forEach(ans => ans.classList.remove("active"));

        q.classList.add("active");
        answers[index].classList.add("active");
    });
});
