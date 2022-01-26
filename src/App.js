export default function App() {
  return (
    <div>
      <Hello />
      <Hello />
      <Hello />
      <World />
      <World />
    </div>
  );
}

// JSX :: REACT COMPOANT
// Hello();
// Hello();
// <Hello />
function Hello() {
  return <h1>Hello! </h1>;
}

// World();
// <World />
// JSX => X => XML
function World() {
  return <h1>World!</h1>;
}