import { useState } from "react";
import Auth from "./components/Auth";
import Survey from "./components/Survey";
import Horoscope from "./components/Horoscope";
import "./styles.css";

function App() {
  const [user, setUser] = useState(null);
  const [surveyData, setSurveyData] = useState(null);

  if (!user) {
    return <Auth onAuth={setUser} />;
  }

  if (!surveyData) {
    return <Survey onSubmit={setSurveyData} user={user} />;
  }

  return (
    <Horoscope
      user={user}
      surveyData={surveyData}
      onRestart={() => setSurveyData(null)}
    />
  );
}

export default App;