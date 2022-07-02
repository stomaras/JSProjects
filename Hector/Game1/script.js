function Student(name, score) {
  this.name = name;
  this.score = score;
}

let rows = document.querySelectorAll("#score > table > tbody > tr > td");
let students = [];
for (let index = 0; index < rows.length; index = index + 2) {
  let student = new Student(
    rows[index].innerText,
    parseFloat(rows[index + 1].innerText)
  );
  students.push(student);
}

// Average ...
let sum = 0;

for (let stu of students) {
  sum += stu.score;
}

let avg = sum / students.length;

// The Best ...
let maxName = students[0].name;
let maxScore = students[0].score;

for (let stu of students) {
  if (stu.score > maxScore) {
    maxScore = stu.score;
    maxName = stu.name;
  }
}

document.getElementById("AverageScore").innerText = "The Average : " + avg;
document.getElementById("TheBest").innerText =
  "The Best : " + maxName + " with score : " + maxScore;
