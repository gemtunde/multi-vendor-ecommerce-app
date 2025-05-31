import FormHeader from "@/components/backoffice/FormHeader";
import NewCouponForm from "@/components/backoffice/Forms/NewCouponForm";
import React from "react";

export default function NewCoupon() {
  return (
    <div>
      <FormHeader title="New Coupon" />
      <NewCouponForm />
    </div>
  );
}
