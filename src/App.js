import React from "react";
import { Layout } from "components";
import "./App.css";
import FirstStep from "modules/FirstStep";
import SecondStep from "modules/SecondStep";
import ThirdStep from "modules/ThirdStep";

function App() {
  const [currentStep, setStep] = React.useState(1);

  const handleChangeStep = (step) => {
    setStep(step);
    localStorage.setItem("currentStep", step);
  };

  React.useEffect(() => {
    if (!localStorage.getItem("cost")) {
      localStorage.setItem("cost", 500000);
    }
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
        ) : currentStep === 3 ? (
          <ThirdStep handleChangeStep={handleChangeStep} />
        ) : null}
      </Layout>
    </div>
  );
}

export default App;
