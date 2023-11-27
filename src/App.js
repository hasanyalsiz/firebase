import { register } from "./firebase";
import React, { useState } from "react";
import { Toaster } from "react-hot-toast";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = await register(email, password);
    console.log(user);
  };

  return (
    <div className="App">
      <Toaster position="top-right" />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="E-posta adresi"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />{" "}
        <br />
        <input
          type="password"
          placeholder="parola"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />{" "}
        <br />
        <button disabled={!email || !password} type="submit">
          Kayıt ol
        </button>
      </form>
    </div>
  );
}

export default App;
