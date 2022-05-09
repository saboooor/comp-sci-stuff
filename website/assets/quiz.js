// Evaluates the quiz answers
function evalQuiz() {
    // These are all the Ids for the input elements, with their answers assigned
    const Ids = {
        shape: { answers: ['circle'] },
        base: { answers: ['dough', 'bread', 'flour'] },
        topping: { answers: ['pepperoni', 'sausage'] },
        side: { answers: ['garlic', 'garlic sauce'] }
    };

    // This is a counter for the amount of right answers
    let rightAnswers = 0;

    // This is to check if all the fields are filled
    let allFields = true;

    // Get the Ids from the Ids object's keys and iterate through them
    Object.keys(Ids).forEach(Id => {
        // Get the element's value
        const value = document.getElementById(Id).value;

        // If the value is blank, set allFields to false
        if (!value) return allFields = false;

        // Set the result element to either right or wrong
        document.getElementById(`${Id}result`).innerText = Ids[Id].answers.some(answer => value == answer) ? "Right!" : "Wrong!";

        // If right, add to rightAnswers
        if (Ids[Id].answers.some(answer => value == answer)) rightAnswers++;
    });

    // If allFields is false, one or more fields aren't filled in yet, return and show an alert
    if (!allFields) return alert("Please fill all fields!");

    // Set the result 
    document.getElementById('quizresult').innerText = `( ${rightAnswers} / ${Object.keys(Ids).length} ) ${rightAnswers/Object.keys(Ids).length*100}%`;
}