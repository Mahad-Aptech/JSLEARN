alert(`The website is work in progress`);

function checkAge() {
  var age = document.getElementById("ageinput").value;

  if (age >= 18) {
    document.getElementById("result").innerText = "YOU CAN DRIVE.";
  } else {
    document.getElementById("result").innerText = "YOU CANT DRIVE.";
  }
}

function numCheck() {
  var num = document.getElementById("numinput").value;

  if (num % 2 === 0) {
    document.getElementById("result1").innerText = "EVEN!";
  } else {
    document.getElementById("result1").innerText = "ODD!";
  }
}

function gradeCheck() {
  var grade = parseInt(document.getElementById("gradeinput").value);

  if (grade >= 90) {
    document.getElementById("results2").innerText = "GRADE A+";
  } else if (grade >= 80) {
    document.getElementById("results2").innerText = "GRADE A";
  } else if (grade >= 70) {
    document.getElementById("results2").innerText = "GRADE B";
  } else if (grade >= 60) {
    document.getElementById("results2").innerText = "GRADE C";
  } else if (grade >= 50) {
    document.getElementById("results2").innerText = "GRADE D";
  } else if (grade >= 40) {
    document.getElementById("results2").innerText = "GRADE E";
  } else {
    document.getElementById("results2").innerText = "GRADE F";
  }
}
