let employees = [];

function addEmployee() {
    let name = document.getElementById("name").value;
    let id = document.getElementById("id").value;
    let salary = Number(document.getElementById("salary").value);
    let department = document.getElementById("department").value;

    if (!name || !id || !salary || !department) {
        alert("Fill all fields");
        return;
    }

    let emp = {
        name: name,
        id: id,
        salary: salary,
        department: department
    };

    employees.push(emp);
    alert("Employee Added");
}

function displayEmployees() {
    let output = "";

    for (let emp of employees) {
        output += `Name: ${emp.name}, ID: ${emp.id}, Salary: ${emp.salary}, Dept: ${emp.department}<br>`;
    }

    document.getElementById("result").innerHTML = output || "No records";
}

function filterSalary() {
    let filtered = employees.filter(emp => emp.salary > 50000);

    let output = "";
    for (let emp of filtered) {
        output += `${emp.name} - ${emp.salary}<br>`;
    }

    document.getElementById("result").innerHTML = output || "No employees found";
}

function totalSalary() {
    let total = 0;

    for (let emp of employees) {
        total += emp.salary;
    }

    document.getElementById("result").innerHTML = "Total Salary: " + total;
}

function averageSalary() {
    if (employees.length === 0) {
        document.getElementById("result").innerHTML = "No data";
        return;
    }

    let total = 0;
    for (let emp of employees) {
        total += emp.salary;
    }

    let avg = total / employees.length;

    document.getElementById("result").innerHTML = "Average Salary: " + avg.toFixed(2);
}

function countDepartment() {
    let dept = prompt("Enter department to count:");
    let count = 0;

    for (let emp of employees) {
        if (emp.department.toLowerCase() === dept.toLowerCase()) {
            count++;
        }
    }

    document.getElementById("result").innerHTML =
        "Employees in " + dept + ": " + count;
}