import React, { useState } from "react";

// .............
import { Card } from "@/components/ui/card";
import StepOne from "./components/StepOne";
import StepTwo from "./components/StepTwo";
import StepThree from "./components/StepThree";
import StepFour from "./components/StepFour";
import Navbar from "./components/navBar1";
import WelcomeMessage from "./components/WelcomeMessege1";


// ........

// Import your animation styles here or include them in your global CSS


// ...................
function App() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({});

  const handleNext = () => {
    setCurrentStep(currentStep + 1);
  };

  const handleBack = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };


  // ..............

  return (
    <div className="app-container">
      <Navbar />
      <div className="container mx-auto max-w-2xl mt-8">
        <WelcomeMessage />
        <Card className="app-card">
          <div className="bg-purple-800 p-4 text-white text-center">
            <h1 className="text-2xl font-bold">Slum Connect</h1>
            <div className="flex justify-center mt-2">
              {[1, 2, 3, 4].map((step) => (
                <div 
                  key={step} 
                  className={`w-8 h-8 rounded-full flex items-center justify-center mx-2 transition-all
                    ${step === currentStep ? 'bg-white text-purple-900 scale-110' : 'bg-purple-600 text-white'}`}
                >
                  {step}
                </div>
              ))}
            </div>
          </div>
          
          {currentStep === 1 && (
            <StepOne onNext={handleNext} onChange={handleChange} />
          )}
          {currentStep === 2 && (
            <StepTwo onNext={handleNext} onBack={handleBack} onChange={handleChange} />
          )}
          {currentStep === 3 && (
            <StepThree onNext={handleNext} onBack={handleBack} onChange={handleChange} />
          )}
          {currentStep === 4 && (
            <StepFour onBack={handleBack} />
          )}
        </Card>
      </div>
    </div>
  );
}

export default App;