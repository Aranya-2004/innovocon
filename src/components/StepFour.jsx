import React from "react";
import { Button } from "@/components/ui/button";
import { CardContent } from "@/components/ui/card";
import { FaPhone, FaCamera, FaVideo } from "react-icons/fa";

const StepFour = ({ onBack }) => {
  return (
    <CardContent>
      <h2 className="text-2xl font-bold mb-4">SOS & Report Issue</h2>
      <Button className="w-full bg-red-500 text-white flex items-center gap-2">
        <FaPhone /> SOS (Call Police)
      </Button>
      <textarea
        name="issue"
        placeholder="Describe your issue"
        className="w-full p-2 mt-2 border rounded"
      ></textarea>
      <div className="flex gap-2 mt-2">
        <Button className="flex items-center gap-2">
          <FaCamera /> Upload Image
        </Button>
        <Button className="flex items-center gap-2">
          <FaVideo /> Upload Video
        </Button>
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-bold">Support Slum People</h3>
        <Button className="w-full mt-2 bg-blue-500 text-white">Sign Petition</Button>
      </div>
      <Button onClick={onBack} className="mr-2 mt-4">
        Back
      </Button>
      <Button>Submit</Button>
    </CardContent>
  );
};

export default StepFour;