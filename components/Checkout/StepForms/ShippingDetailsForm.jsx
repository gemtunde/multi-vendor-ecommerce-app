import { Circle, Truck } from "lucide-react";
import { useForm } from "react-hook-form";
import NavButtons from "../NavButtons";
import TextInput from "@/components/FormInputs/TextInput";

export default function ShippingDetailsForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function processData(data) {
    console.log(data);
    // ➜ { streetAddress: "...", city: "...", ..., shippingCost: "8" }
  }

  return (
    <form onSubmit={handleSubmit(processData)}>
      <h2 className="text-xl font-semibold my-4">Shipping Details</h2>
      <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
        <TextInput
          label="Street Address"
          name="streetAddress"
          register={register}
          errors={errors}
        />
        <TextInput
          label="City"
          name="city"
          register={register}
          errors={errors}
        />
        <TextInput
          label="Country"
          name="country"
          register={register}
          errors={errors}
        />
        <TextInput
          label="Zip Code"
          name="zipCode"
          register={register}
          errors={errors}
        />

        <div className="col-span-full">
          <h3 className="mb-5 text-lg font-medium">
            How much do you expect to use each month?
          </h3>

          <ul className="grid w-full gap-6 md:grid-cols-2">
            {/* Option 1 */}
            <li>
              <input
                {...register("shippingCost", {
                  required: "Pick a shipping cost",
                })}
                type="radio"
                id="shippingCost8"
                value="8"
                className="hidden peer"
              />
              <label
                htmlFor="shippingCost8"
                className="inline-flex items-center justify-between w-full p-5 border rounded-lg cursor-pointer
                         peer-checked:border-blue-600 peer-checked:text-blue-600
                         hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <div className="flex gap-2 items-center">
                  <Truck className="w-8 h-8 flex-shrink-0" />
                  <div>
                    <p>UPS</p>
                    <p>
                      Delivery Cost: <span>$8</span>
                    </p>
                  </div>
                </div>
                <Circle className="w-5 h-5 flex-shrink-0" />
              </label>
            </li>

            {/* Option 2 */}
            <li>
              <input
                {...register("shippingCost", {
                  required: "Pick a shipping cost",
                })}
                type="radio"
                id="shippingCost14"
                value="14"
                className="hidden peer"
              />
              <label
                htmlFor="shippingCost14"
                className="inline-flex items-center justify-between w-full p-5 border rounded-lg cursor-pointer
                         peer-checked:border-blue-600 peer-checked:text-blue-600
                         hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <div className="flex gap-2 items-center">
                  <Truck className="w-8 h-8 flex-shrink-0" />
                  <div>
                    <p>UPS</p>
                    <p>
                      Delivery Cost: <span>$14</span>
                    </p>
                  </div>
                </div>
                <Circle className="w-5 h-5 flex-shrink-0" />
              </label>
            </li>
          </ul>
          {errors.shippingCost && (
            <p className="mt-2 text-sm text-red-600">
              {errors.shippingCost.message}
            </p>
          )}
        </div>

        {/* 3️⃣ Make sure the NavButtons component renders a submit button */}
        <NavButtons />
      </div>
    </form>
  );
}
