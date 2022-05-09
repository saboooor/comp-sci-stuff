function evalQuiz() {
    const Ids = {
        shape: { answers: ['circle'] },
        base: { answers: ['dough', 'bread', 'flour'] },
        topping: { answers: ['pepperoni', 'sausage'] },
        side: { answers: ['garlic', 'garlic sauce'] }
    };
    let rightAnswers = 0;
    let allFields = true;
    Object.keys(Ids).forEach(Id => {
        const value = document.getElementById(Id).value;
        if (!value) return allFields = false;
        document.getElementById(`${Id}result`).innerText = Ids[Id].answers.some(answer => value == answer) ? "Right!" : "Wrong!";
        if (Ids[Id].answers.some(answer => value == answer)) rightAnswers++;
    });
    if (!allFields) return alert("Please fill all fields!");
    document.getElementById('quizresult').innerText = `( ${rightAnswers} / ${Object.keys(Ids).length} ) ${rightAnswers/Object.keys(Ids).length*100}%`;
}