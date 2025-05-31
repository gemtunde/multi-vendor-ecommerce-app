import React from "react";
import FormHeader from "@/components/backoffice/FormHeader";
import NewCouponForm from "@/components/backoffice/Forms/NewCouponForm";
import { getData } from "@/lib/getData";

export default async function UpdateCoupon({ params: { id } }) {
  const coupon = await getData(`coupons/${id}`);
  console.log("CoUPoNS*****", coupon);
  return (
    <div>
      <FormHeader title={`Update ${coupon.title} Coupon`} />
      <NewCouponForm updateCoupon={coupon} />
    </div>
  );
}
