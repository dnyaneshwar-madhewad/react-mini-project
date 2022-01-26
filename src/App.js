export default function App() {
  return (
    <div>
      <Hello />
      <Hello name="rahul" />
      <Hello id="2" name="Dnyaneshwar" />
    </div>
  );
}

/*function Hello() {
  return <h1>Hello!  </h1>;
}*/

/*function Hello(p1) {
  return <h1>Hello! {p1.name} </h1>;
}*/

// with descruting
function Hello({ name, id }) {
  return <h1>Hello! {name} </h1>;
}