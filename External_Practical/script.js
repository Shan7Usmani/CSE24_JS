function calculateResult() {
  let m1 = Number(document.getElementById("m1").value);
  let m2 = Number(document.getElementById("m2").value);
  let m3 = Number(document.getElementById("m3").value);
  let m4 = Number(document.getElementById("m4").value);
  let m5 = Number(document.getElementById("m5").value);

  let total = m1 + m2 + m3 + m4 + m5;
  let per = total / 5;
  let classm = "Fail";

  let grade = "F";
  if (per >= 90) {
    grade = "A+";
    classm = "First Class";
  } else if (per >= 80) {
    grade = "A";
    classm = "First Class";
  } else if (per >= 70) {
    grade = "B+";
    classm = "Second Class";
  } else if (per >= 60) {
    grade = "B";

    classm = "Second Class";
  } else if (per >= 50) {
    grade = "C+";
    classm = "Third Class";
  } else if (per >= 35) {
    grade = "C";
    classm = "Third Class";
  }

  let status = "Pass";
  if (m1 < 35 || m2 < 35 || m3 < 35 || m4 < 35 || m5 < 35) {
    grade = "F";
    status = "Fail";
    classm = "Fail";
    alert("Failed");
  }
  else{
    alert("Pass with Distinction : "+ classm)
  }

  document.getElementById("result").innerHTML =
    "Total: " +
    total +
    "/500<br>" +
    "Percentage: " +
    per.toFixed(2) +
    "%<br>" +
    "Grade: " +
    grade +
    "<br>" +
    "Status: " +
    status +
    "<br>" +
    "Distinction: " +
    classm;
}

function resetForm() {
  document.getElementById("m1").value = "";
  document.getElementById("m2").value = "";
  document.getElementById("m3").value = "";
  document.getElementById("m4").value = "";
  document.getElementById("m5").value = "";
  document.getElementById("result").innerHTML = "";
}
