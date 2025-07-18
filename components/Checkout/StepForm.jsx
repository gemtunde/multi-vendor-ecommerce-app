import React from "react";
import PersonalDetailsForm from "./StepForms/PersonalDetailsForm";
import ShippingDetailsForm from "./StepForms/ShippingDetailsForm";
import PaymentMethodForm from "./StepForms/PaymentMethodForm";
//import OrderSummary from "./StepForms/orderSummary";
import SummaryDetails from "./StepForms/SummaryDetails";
import { useSelector } from "react-redux";

export default function StepForm() {
  //const [currentStep, setCurrentStep] = React.useState(4);
  const currentStep = useSelector((store) => store.checkout.currentStep);

  function renderFormByStep(step) {
    switch (step) {
      case 1:
        return <PersonalDetailsForm />;
      case 2:
        return <ShippingDetailsForm />;
      case 3:
        return <PaymentMethodForm />;
      case 4:
        return <SummaryDetails />;
      default:
        return <div>Unknown Step</div>;
    }
  }
  return <div>{renderFormByStep(currentStep)}</div>;
}
