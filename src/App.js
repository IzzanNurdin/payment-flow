import React from "react";
import FirstStep from "modules/FirstStep";
import { Layout } from "components";
import "./App.css";
import SecondStep from "modules/SecondStep";

function App() {
  const [currentStep, setStep] = React.useState(1);

  const handleChangeStep = (step) => {
    setStep(step);
    localStorage.setItem("currentStep", step);
  };

  React.useEffect(() => {
    if (localStorage.getItem("currentStep")) {
      setStep(Number(localStorage.getItem("currentStep")));
    }
  }, []);

  return (
    <div className="App">
      <Layout currentStep={currentStep}>
        {currentStep === 1 ? (
          <FirstStep handleChangeStep={handleChangeStep} />
        ) : currentStep === 2 ? (
          <SecondStep handleChangeStep={handleChangeStep} />
        ) : null}
      </Layout>
    </div>
  );
}

export default App;
