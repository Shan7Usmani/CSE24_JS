function Student({ name, age, course }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Course: {course}</p>
      <hr />
    </div>
  );
}

function App() {
  return (
    <div>
      <h1>Student Details</h1>

      <Student name="Shan" age={19} course="CSE24" />
      <Student name="Aman" age={20} course="CSE13" />
      <Student name="Sara" age={21} course="CSE26" />

    </div>
  );
}

export default App;