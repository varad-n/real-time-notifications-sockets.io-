import { useState } from "react";
import "./App.css"
import Navbar from "./components/navbar/Navbar";
import Card from "./components/card/Card";

const App = () => {
  const  [username, setUsername] = useState("")
  const  [user, setUser] = useState("");

  console.log(user)

  return(
  <div className="container">
    {user ? (
      <>
        <Navbar />
        <Card />
      </>
    ) : (
  <div className="login">
    <input type="text" placeholder="username" onChange={(e)=>setUsername(e.target.value)} />
    <button onClick={() => setUser(username)}>Login</button>
  </div>
)}
  </div>
  );
};


export default App;