import { useState } from "react";

export default function App() {
  return (
    <div>
      <Hello />
    </div>
  );
}

function Hello() {
  const [counter] = useState(1);
  const [counter1] = useState(100.0);
  const [active] = useState(true);
  const [user] = useState({ id: 1, name: "Dnyaneshwar" });

  return (
    <div>
      <h1>{user.name}</h1>
    </div>
  );
}