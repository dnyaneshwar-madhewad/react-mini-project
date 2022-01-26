export default function App() {
  return (
    <div>
      <Hello id="1" name="Dnyaneshwar" />
      <Hello id="2" name="sachin" />
      <Hello id="2" name="virat" />
    </div>
  );
}

// Hello();
// Hello(1);
// Hello(1, 2);
// <Hello />
function Hello(p1) {
  console.log(p1);

  return <h1>Hello! {p1.name} </h1>;
}