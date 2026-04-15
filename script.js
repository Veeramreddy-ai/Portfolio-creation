
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



const items = document.querySelectorAll(".faq-item");

items.forEach(item => {
    const question = item.querySelector(".faq-question");

    question.addEventListener("click", () => {

       
        items.forEach(i => i.classList.remove("active"));

       
        item.classList.add("active");

    });
});
