import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CardContent } from "@/components/ui/card";

const StepOne = ({ onNext, onChange }) => {
  return (
    <CardContent>
      <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
      <Input name="name" placeholder="Full Name" onChange={onChange} />
      <Input name="age" type="number" placeholder="Age" onChange={onChange} />
      <Input name="location" placeholder="Location" onChange={onChange} />
      <Input name="dob" type="date" onChange={onChange} />
      <Button onClick={onNext} className="w-full mt-4">
        Next button
      </Button>
    </CardContent>
  );
};

export default StepOne;