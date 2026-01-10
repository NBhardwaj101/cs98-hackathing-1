export default function Horoscope({ user, surveyData, onRestart }) {
  const { focus, mood } = surveyData;

  const horoscopeMap = {
    Career: "An opportunity is aligning — trust your instincts.",
    Love: "Connection deepens when you lead with honesty.",
    "Self‑Growth": "This is a powerful moment for reflection."
  };

  return (
    <div className="card">
      <h2>🔮 Your Horoscope</h2>
      <p><strong>Focus:</strong> {focus}</p>
      <p><strong>Mood:</strong> {mood}</p>

      <div className="horoscope">
        {horoscopeMap[focus]}
      </div>

      <button onClick={onRestart}>Try Again</button>
    </div>
  );
}