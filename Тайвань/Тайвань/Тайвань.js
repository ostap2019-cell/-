console.log("Скрипт успешно подключился")

const correctAnswers = {
  1: 'сильно',
  2: 'более-50',
  3: 'геополитическая-напряжённость',
  4: null,      // значение не важно — вопрос будет всегда засчитан
  5: null       // для q5 логика остаётся прежней
};
document.getElementById('checkBtn').addEventListener('click', () => {
  let score = 0;
  const resultDiv = document.getElementById('result');
  resultDiv.innerHTML = '';
  // Сброс стилей подсветки у всех радиокнопок
  document.querySelectorAll('input[type="radio"]').forEach(radio => {
    if (radio.parentElement) {
      radio.parentElement.style.color = '';
      radio.parentElement.style.fontWeight = '';
    }
  });
  const errors = [];
  Object.keys(correctAnswers).forEach(questionName => {
    const correctValue = correctAnswers[questionName];
    let isCorrect = false;
    // ВАЖНО: q4 всегда правильный
    if (questionName === '4') {
      isCorrect = true;
      score++;
      return; // пропускаем дальнейшую обработку этого вопроса
    }
    if (questionName === '5') {
      // Обработка текстового поля
      const input = document.getElementById(questionName);
      if (!input) {
        errors.push(`Вопрос ${questionName}: элемент не найден.`);
        return;
      }
      const userValue = (input.value || '').trim().toLowerCase();
      if (!userValue) {
        errors.push(`Вопрос ${questionName}: вы не ввели ответ.`);
        return;
      }
      if (correctValue !== null) {
        isCorrect = userValue === correctValue;
      } else {
        isCorrect = true;
      }
    } else {
      // Обработка радиокнопок (1, 2, 3)
      const selectedRadio = document.querySelector(`input[name="${questionName}"]:checked`);
      if (!selectedRadio) {
        errors.push(`Вопрос ${questionName}: вы не выбрали ответ.`);
        return;
      }
      const userValue = selectedRadio.value;
      isCorrect = userValue === correctValue;
      // Подсветка выбранного варианта
      if (selectedRadio.parentElement) {
        selectedRadio.parentElement.style.color = isCorrect ? 'green' : 'red';
        selectedRadio.parentElement.style.fontWeight = 'bold';
      }
    }
    if (isCorrect) {
      score++;
    }
  });
  // Вывод всех ошибок (если есть)
  let outputHtml = '';
  if (errors.length > 0) {
    outputHtml += '<p style="color:blue; font-weight:bold;">Есть незаполненные/некорректные вопросы:</p>';
    errors.forEach(err => {
      outputHtml += `<p style="color:blue">${err}</p>`;
    });
  }
  // Итоговый счёт
  const totalQuestions = Object.keys(correctAnswers).length;
  outputHtml += `<p><strong>Ваш результат: ${score} из ${totalQuestions}</strong></p>`;
  resultDiv.innerHTML = outputHtml;
});
