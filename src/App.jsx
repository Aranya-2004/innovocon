
import React, { useState } from "react";
import StepOne from "./components/StepOne";
import StepTwo from "./components/StepTwo";
import StepThree from "./components/StepThree";
import StepFour from "./components/StepFour";
import { Card } from "./components/ui/card";


const App = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});

  const handleNext = () => setStep(step + 1);
  const handleBack = () => setStep(step - 1);
  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <Card className="w-full max-w-lg p-6 shadow-xl rounded-2xl">
        {step === 1 && <StepOne onNext={handleNext} onChange={handleChange} />}
        {step === 2 && (
          <StepTwo onNext={handleNext} onBack={handleBack} onChange={handleChange} />
        )}
        {step === 3 && (
          <StepThree onNext={handleNext} onBack={handleBack} onChange={handleChange} />
        )}
        {step === 4 && <StepFour onBack={handleBack} />}
      </Card>
    </div>
  );
};

export default App;
