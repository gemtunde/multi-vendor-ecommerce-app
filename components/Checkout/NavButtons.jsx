import { setCurrentStep } from "@/redux/slices/checkoutSlice";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function NavButtons() {
  // const currentStep = 1;
  const currentStep = useSelector((store) => store.checkout.currentStep);
  const dispatch = useDispatch();

  const handlePreviousStep = () => {
    dispatch(setCurrentStep(currentStep - 1));
  };

  return (
    <div className="flex justify-between items-center w-full mt-6">
      {currentStep > 1 && (
        <button
          className="flex items-center  px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
          onClick={handlePreviousStep}
        >
          <ChevronLeft className="w-5 h-5 mr-2" />
          <span>Previous</span>
        </button>
      )}
      {currentStep < 4 && (
        <button
          className="flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          onClick={() => console.log("Go to next step")}
        >
          <span>Next</span>
          <ChevronRight className="w-5 h-5 " />
        </button>
      )}
      {currentStep === 4 && (
        <button
          className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
          onClick={() => console.log("Complete Checkout")}
        >
          Complete Checkout
        </button>
      )}
    </div>
  );
}
