import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CardContent } from "@/components/ui/card";

const StepTwo = ({ onNext, onBack, onChange }) => {
  return (
    <CardContent>
      <h2 className="text-2xl font-bold mb-4">Verification</h2>
      <Input name="aadhaar" placeholder="Aadhaar No" onChange={onChange} />
      <Input name="mobile" type="tel" placeholder="Mobile No" onChange={onChange} />
      <Input name="email" type="email" placeholder="Email ID" onChange={onChange} />
      <Input name="photo" type="file" accept="image/*" />
      <Input name="policeStation" placeholder="Nearest Police Station" onChange={onChange} />
      <Button onClick={onBack} className="mr-2">
        Back
      </Button>
      <Button onClick={onNext}>Next</Button>
    </CardContent>
  );
};

export default StepTwo;