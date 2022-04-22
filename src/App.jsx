import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const [count, setCount] = useState(0);
  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();
  console.log(user);
  return (
    <div className="App">
      {isAuthenticated ? (
        <button onClick={() => logout({ returnTo: "http://localhost:3000/" })}>
          Log Out
        </button>
      ) : (
        <button onClick={() => loginWithRedirect()}>Log In</button>
      )}
    </div>
  );
}

export default App;
