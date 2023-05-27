const showAnswersButton = document.querySelectorAll('.show-answers-button');

showAnswersButton.forEach(button => {
    button.addEventListener('click', () => {
        const answer = button.nextElementSibling;

        answers.classList.toggle('hidden');
        if (button.textContent === 'Показать ответ'){
            button.textContent = 'Скрыть ответ';
        }else {
            button.textContent = 'показать ответ';
        }
    })
})