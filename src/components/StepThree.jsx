import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CardContent } from "@/components/ui/card";
import { FaMapMarkerAlt } from "react-icons/fa";

const StepThree = ({ onNext, onBack, onChange }) => {
  return (
    <CardContent>
      <h2 className="text-2xl font-bold mb-4">Location</h2>
      <Button onClick={() => alert("Fetching Location...")} className="flex items-center gap-2">
        <FaMapMarkerAlt /> Fetch My Location
      </Button>
      <Input name="manualLocation" placeholder="Enter Location Manually" onChange={onChange} />
      <Button onClick={onBack} className="mr-2">
        Back
      </Button>
      <Button onClick={onNext}>Next</Button>
    </CardContent>
  );
};

export default StepThree;