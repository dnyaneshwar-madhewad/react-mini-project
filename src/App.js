import { useState } from "react";
import {
  BrowserRouter,
  Link,
  Route,
  Routes,
  useNavigate,
  useParams,
  useLocation,
} from "react-router-dom";

export default function App() {
  let preLoginList = ["/", "/login", "/register", "/forget-password"];
  let location = useLocation();

  return (
    <>
      {/** Link is Secondary */}
      {preLoginList.includes(location.pathname) ? (
        <div>
          <Link to="/login">Login | </Link>
          <Link to="/register">Register |</Link>
        </div>
      ) : (
        <div>
          <Link to="/welcome-home">Home | </Link>
          <Link to="/explore">Expore | </Link>
          <Link to="/messages">Messages </Link>
        </div>
      )}

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forget-password" element={<ForgetPassword />} />

        <Route path="/welcome-home" element={<WelcomeHome />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/messages" element={<Messages />} />
      </Routes>
    </>
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
        <Link to="/forget-password">Forget Password</Link>
      </div>
    </div>
  );
}

function Register() {
  return <div>Reigster Page</div>;
}

function ForgetPassword() {
  return (
    <div>
      <h1>UI For Forget Password</h1>
    </div>
  );
}

function WelcomeHome() {
  let navigate = useNavigate();

  const signOut = () => {
    navigate("/login");
  };

  return (
    <div>
      <h1>Welcome home</h1>
      <button onClick={signOut}>Sign Out</button>
    </div>
  );
}

function Explore() {
  return <h1>Explore Page</h1>;
}

function Messages() {
  return <h1>Messages Page</h1>;
}