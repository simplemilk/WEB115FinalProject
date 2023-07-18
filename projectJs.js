function generateMealPlan() {

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var goal = document.getElementById('goal').value;


    if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        return;
    }


    var mealPlan = [];
    for (var i = 0; i < 7; i++) {
        var breakfast = document.getElementById('breakfast' + (i + 1)).value;
        var snack = document.getElementById('snack' + (i + 1)).value;
        var lunch = document.getElementById('lunch' + (i + 1)).value;
        var dinner = document.getElementById('dinner' + (i + 1)).value;

        mealPlan.push({
            day: getDayOfWeek(i),
            breakfast: breakfast,
            snack: snack,
            lunch: lunch,
            dinner: dinner
        });
    }


    var mealPlanPage = `
        <!DOCTYPE html>
        <html>
        <head>
        <title>Meal Plan</title>
        <style>
        body {}
        </style>
        </head>
        <body>
        `;

    mealPlanPage += `<h1>Weekly Meal Plan for ${name}</h1>
        <h2>Goal for the Week:</h2>
        <p>${goal}</p>
        `;


    for (var j = 0; j < mealPlan.length; j++) {
        var dayPlan = mealPlan[j];
        mealPlanPage += `<h2>${dayPlan.day}</h2>
        <p> Breakfast:
            ${dayPlan.breakfast}</p>
        <p> Snack:
            ${dayPlan.snack}</p>
        <p> Lunch:
            ${dayPlan.lunch}</p>
        <p> Dinner and Snack:
            ${dayPlan.dinner}</p>
        `;
    }

    mealPlanPage +=
        '</body>\n</html>';

    var mealPlanWindow = window.open('', '_blank');
    mealPlanWindow.document.open();
    mealPlanWindow.document.write(mealPlanPage);
    mealPlanWindow.document.close();
}

function clearMealPlan() {
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('goal').value = '';

    for (var i = 1; i <= 7; i++) {
        document.getElementById('breakfast' + i).value = '';
        document.getElementById('snack' + i).value = '';
        document.getElementById('lunch' + i).value = '';
        document.getElementById('dinner' + i).value = '';

    }
}

function validateEmail(email) {

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function getDayOfWeek(index) {

    var days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    return days[index];
}