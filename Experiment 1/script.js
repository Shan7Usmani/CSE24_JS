function calculateResult() {
    let n = document.getElementById("subjects").value;
    let total = 0;

    if (n <= 0 || n === "") {
        alert("Enter valid number of subjects");
        return;
    }

    // Loop for marks input
    for (let i = 1; i <= n; i++) {
        let marks = prompt("Enter marks for subject " + i + ":");
        marks = Number(marks);

        if (marks < 0 || marks > 100 || isNaN(marks)) {
            alert("Invalid marks");
            return;
        }

        total += marks;
    }

    let average = total / n;

    // Grade logic
    let grade;
    if (average >= 90) grade = "A+";
    else if (average >= 75) grade = "A";
    else if (average >= 60) grade = "B";
    else if (average >= 50) grade = "C";
    else grade = "F";

    // Pass/Fail
    let result = (average >= 40) ? "Pass" : "Fail";

    // Display
    document.getElementById("result").innerHTML =
        "Total: " + total + "<br>" +
        "Average: " + average.toFixed(2) + "<br>" +
        "Grade: " + grade + "<br>" +
        "Result: " + result;
}