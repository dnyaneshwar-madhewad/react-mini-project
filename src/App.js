import { useState } from "react";
import {
  BrowserRouter,
  Link,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      {/** Link is Secondary */}
      <Link to="/">Login | </Link>
      <Link to="/register">Register </Link>

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/welcome-home" element={<WelcomeHome />} />
      </Routes>
    </BrowserRouter>
  );
}

function Login() {
  // SPECIAL FUNCTION :: HOOKS :: use...
  let navigate = useNavigate();

  const authenticate = () => {
    // ....
    navigate("/welcome-home");
  };

  return (
    <div>
      <h1>Login Page</h1>
      <div>
        <div>
          <input type="text" placeholder="Enter Username" />
        </div>
        <div>
          <input type="password" placeholder="Enter Password" />
        </div>
        <div>
          <input type="button" value="Login to App" onClick={authenticate} />
        </div>
      </div>
    </div>
  );
}

function Register() {
  return <div>Reigster Page</div>;
}

function WelcomeHome() {
  return (
    <div>
      <h1>Welcome home</h1>
    </div>
  );
}