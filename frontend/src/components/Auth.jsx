import { useState } from "react";

export default function Auth({ onAuth }) {
  const [isSignup, setIsSignup] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const submit = () => {
    if (!username) return;

    localStorage.setItem("user", JSON.stringify({ username }));
    onAuth({ username });
  };

  return (
    <div className="card">
      <h1>✨ AstroVibe</h1>
      <p>{isSignup ? "Create your cosmic profile" : "Welcome back"}</p>

      <input
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={submit}>
        {isSignup ? "Create Account" : "Sign In"}
      </button>

      <span className="link" onClick={() => setIsSignup(!isSignup)}>
        {isSignup ? "Already have an account?" : "New here?"}
      </span>
    </div>
  );
}