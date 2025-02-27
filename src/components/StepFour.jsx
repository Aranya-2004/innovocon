import React from "react";
import { Button } from "@/components/ui/button";
import { CardContent } from "@/components/ui/card";
import { FaPhone, FaCamera, FaVideo, FaSignature } from "react-icons/fa";

const StepFour = ({ onBack }) => {
  return (
    <CardContent className="bg-gradient-to-b from-purple-50 to-purple-100 rounded-xl p-6">
      <h2 className="text-2xl font-bold mb-4 text-purple-900 animate-fadeIn">SOS & Report Issue</h2>
      
      <Button 
        className="w-full bg-red-600 hover:bg-red-700 text-white py-4 rounded-lg text-lg flex items-center justify-center gap-3 transition-all hover:shadow-lg mb-4"
      >
        <FaPhone className="animate-pulse" /> SOS (Call Police)
      </Button>
      
      <textarea
        name="issue"
        placeholder="Describe your issue"
        className="w-full p-4 mt-2 border border-purple-300 focus:border-purple-500 rounded-lg min-h-32"
      ></textarea>
      
      <div className="flex gap-4 mt-4">
        <Button 
          className="flex-1 bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg flex items-center justify-center gap-2 transition-transform hover:scale-105"
        >
          <FaCamera /> Upload Image
        </Button>
        <Button 
          className="flex-1 bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg flex items-center justify-center gap-2 transition-transform hover:scale-105"
        >
          <FaVideo /> Upload Video
        </Button>
      </div>
      
      <div className="mt-6 bg-black bg-opacity-10 p-4 rounded-lg">
        <h3 className="text-xl font-bold text-purple-800 animate-pulse">Support Slum People</h3>
        <Button 
          className="w-full mt-2 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg flex items-center justify-center gap-2 transition-all hover:shadow-lg"
        >
          <FaSignature /> Sign Petition
        </Button>
      </div>
      
      <div className="flex gap-4 mt-6">
        <Button 
          onClick={onBack} 
          className="flex-1 bg-gray-600 hover:bg-gray-700 text-white py-3 rounded-lg text-lg transition-transform hover:scale-105"
        >
          Back
        </Button>
        <Button 
          className="flex-1 bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg text-lg transition-transform hover:scale-105"
        >
          Submit
        </Button>
      </div>
    </CardContent>
  );
};

export default StepFour;