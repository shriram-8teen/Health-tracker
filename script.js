document.getElementById('health-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const age = parseInt(document.getElementById('age').value);
    const height = parseInt(document.getElementById('height').value);
    const weight = parseInt(document.getElementById('weight').value);
    const sleep = parseInt(document.getElementById('sleep').value);
    const workingHours = parseInt(document.getElementById('working-hours').value);
    const pressure = parseInt(document.getElementById('pressure').value);
    const diet = document.getElementById('diet').value;
    const calories = parseInt(document.getElementById('calories').value);

    const standardCalories = 2500; // Example standard value
    let feedbackMessage = "";

    // Physical health feedback
    feedbackMessage += calories > standardCalories
        ? `You are consuming more calories (${calories}) than the recommended value (${standardCalories}). Consider reducing portions or increasing physical activity.<br>`
        : `Your calorie consumption (${calories}) is within the healthy range. Great job!<br>`;

    feedbackMessage += sleep < 7
        ? "You should aim for at least 7 hours of sleep for better mental and physical health.<br>"
        : "Your sleep pattern looks healthy. Keep it up!<br>";

    feedbackMessage += workingHours > 8
        ? "Working too much can cause burnout. Try to limit your working hours.<br>"
        : "Your working hours are within a balanced range.<br>";

    feedbackMessage += pressure > 7
        ? "You are under high work pressure. Consider practicing stress management techniques like meditation or exercise.<br>"
        : "Your work pressure seems manageable. Keep finding ways to relax.<br>";

    feedbackMessage += diet === "vegetarian"
        ? "As a vegetarian, make sure you're getting enough protein from sources like beans, lentils, and tofu.<br>"
        : "As a non-vegetarian, focus on lean meats and avoid excessive red meat consumption.<br>";

    feedbackMessage += "Your health is of concern. Remember, physical health + mental health = true wealth!<br>";

    document.getElementById('feedback').innerHTML = feedbackMessage;
});
