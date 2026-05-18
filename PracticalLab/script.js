function calculateResult() {
    let n = document.getElementById("subjects").value;
    let total = 0;

    if (n <= 0 || n === "") {
        alert("Enter valid number of subjects");
        return;
    }

    let highest = -Infinity;
    let lowest = Infinity;

    for (let i = 1; i <= n; i++) {
        let marks = prompt("Enter marks for subject " + i + ":");
        marks = Number(marks);

        if (marks < 0 || marks > 100 || isNaN(marks)) {
            alert("Invalid marks");
            return;
        }

        total += marks;

        if (marks > highest) highest = marks;
        if (marks < lowest) lowest = marks;
    }

    let average = total / n;

    let grade;
    if (average >= 90) grade = "A+";
    else if (average >= 75) grade = "A";
    else if (average >= 60) grade = "B";
    else if (average >= 50) grade = "C";
    else grade = "F";

    let result = (average >= 40) ? "Pass" : "Fail";

    let division;
    if (average >= 60) division = "First Division";
    else if (average >= 50) division = "Second Division";
    else if (average >= 40) division = "Third Division";
    else division = "No Division";

    document.getElementById("result").innerHTML =
        "Total: " + total + "<br>" +
        "Average: " + average.toFixed(2) + "<br>" +
        "Highest: " + highest + "<br>" +
        "Lowest: " + lowest + "<br>" +
        "Grade: " + grade + "<br>" +
        "Division: " + division + "<br>" +
        "Result: " + result;
}