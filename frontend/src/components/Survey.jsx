export default function Survey({ onSubmit, user }) {
  const [focus, setFocus] = useState("");
  const [mood, setMood] = useState("");

  const submit = () => {
    if (!focus || !mood) return;
    onSubmit({ focus, mood });
  };

  return (
    <div className="card">
      <h2>Hi {user.username} 🌙</h2>
      <p>Let’s tune into your energy</p>

      <h4>Main focus</h4>
      <div className="options">
        {["Career", "Love", "Self‑Growth"].map((f) => (
          <button
            key={f}
            className={focus === f ? "selected" : ""}
            onClick={() => setFocus(f)}
          >
            {f}
          </button>
        ))}
      </div>

      <h4>Current mood</h4>
      <div className="options">
        {["Hopeful", "Stressed", "Curious"].map((m) => (
          <button
            key={m}
            className={mood === m ? "selected" : ""}
            onClick={() => setMood(m)}
          >
            {m}
          </button>
        ))}
      </div>

      <button onClick={submit}>Reveal My Horoscope ✨</button>
    </div>
  );
}