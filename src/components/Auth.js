import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { auth, googleProvider } from "../config/firebase";

const Auth = () => {
  const [loginScreen, setLoginScreen] = useState(true);

  const description = {
    login: "Login to your account",
    signup: "Signup for an account",
  };

  return (
    <div>
      {loginScreen ? <Login /> : <Signup />}
      <button type="button" onClick={() => setLoginScreen(!loginScreen)}>
        {!loginScreen ? description.login : description.signup}
      </button>
      <GoogleLogin signInType={loginScreen ? "Login" : "Signup"} />
    </div>
  );
};

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginHandler = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      alert(err.message);
      console.log(err);
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={loginHandler}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signupHandler = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Account created successfully!");
    } catch (err) {
      alert(err.message);
      console.log(err);
    }
  };

  return (
    <div>
      <h1>Signup</h1>
      <form onSubmit={signupHandler}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

const GoogleLogin = (props) => {
  const googleLoginHandler = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (err) {
      alert(err.message);
      console.log(err);
    }
  };

  return (
    <button type="button" onClick={googleLoginHandler}>
      {props.signInType} Google
    </button>
  );
};

export default Auth;
