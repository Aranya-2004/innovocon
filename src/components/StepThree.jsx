import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CardContent } from "@/components/ui/card";
import { FaMapMarkerAlt } from "react-icons/fa";

const StepThree = ({ onNext, onBack, onChange }) => {
  return (
    <CardContent className="bg-gradient-to-b from-purple-50 to-purple-100 rounded-xl p-6">
      <h2 className="text-2xl font-bold mb-4 text-purple-900 animate-fadeIn">Location</h2>
      <div className="space-y-4">
        <Button 
          onClick={() => alert("Fetching Location...")} 
          className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg flex items-center justify-center gap-2 transition-all hover:shadow-lg"
        >
          <FaMapMarkerAlt className="animate-bounce" /> Fetch My Location
        </Button>
        <Input 
          name="manualLocation" 
          placeholder="Enter Location Manually" 
          onChange={onChange} 
          className="border-purple-300 focus:border-purple-500 rounded-lg p-3 mt-4"
        />
      </div>
      <div className="flex gap-4 mt-6">
        <Button 
          onClick={onBack} 
          className="flex-1 bg-gray-600 hover:bg-gray-700 text-white py-3 rounded-lg text-lg transition-transform hover:scale-105"
        >
          Back
        </Button>
        <Button 
          onClick={onNext} 
          className="flex-1 bg-purple-700 hover:bg-purple-800 text-white py-3 rounded-lg text-lg transition-transform hover:scale-105"
        >
          Next
        </Button>
      </div>
    </CardContent>
  );
};

export default StepThree;