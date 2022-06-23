import React from "react";
import FirstStep from "modules/FirstStep";
import { Layout } from "components";
import "./App.css";

function App() {
  const [currentStep, setStep] = React.useState(1);
  return (
    <div className="App">
      <Layout currentStep={currentStep}>
        <FirstStep />
      </Layout>
    </div>
  );
}

export default App;
