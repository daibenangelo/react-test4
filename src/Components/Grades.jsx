/*
This functional component would take 2 arguments. (1) Score (2) Total score
(score/total score) * 50 + 50
*/

let school = "Saint Louis University";

function getGrade(s, t) {
  return (s / t) * 50 + 50;
}

function greet() {
  let x = prompt("Enter a word");
  alert(x);
}

const Grades = function ({ score, total }) {
  return (
    <>
      <h1>Grades</h1>
      <p>
        Score: <span>{score}</span>
      </p>
      <p>
        Total: <span>{total}</span>
      </p>
      <h2>
        Final grade: <span>{getGrade(score, total)}</span>
      </h2>
      <button onClick={greet}>Show</button>
      <p>{school}</p>
    </>
  );
};

export default Grades;

// const Grades = function () {
//   return <h1>Grades</h1>;
// };

// export default Grades;
