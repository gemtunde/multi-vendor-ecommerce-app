"use client";
import CheckoutBanner from "@/components/Checkout/CheckoutBanner";
import StepForm from "@/components/Checkout/StepForm";
import Steps from "@/components/Checkout/Steps";
import { ChevronRight, ShoppingBag } from "lucide-react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

export default function Checkout() {
  const steps = [
    {
      id: 1,
      name: "Personal Information",
      fields: ["firstName", "lastName", "email"],
    },
    {
      id: 2,
      name: "Shipping Address",
      fields: ["firstName", "lastName", "email"],
    },
    {
      id: 3,
      name: "Payment Method",
      fields: ["firstName", "lastName", "email"],
    },
    {
      id: 4,
      name: "Confirmation",
    },
  ];
  const [currentStep, setCurrentStep] = useState(0);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    trigger,
    formState: { errors, isValid },
  } = useForm();

  async function handleNextStep() {
    const fields = steps[currentStep].fields;
    const isValid = await trigger(fields, { shouldFocus: true });
    if (!isValid) return;
    if (currentStep < steps.length - 1) {
      if (currentStep < steps.length - 2) {
        await handleSubmit(processForm)();
      }
      setCurrentStep((step) => step + 1);
    }
  }
  function handlePrevStep() {
    if (currentStep > 0) {
      setCurrentStep((step) => step - 1);
    }
  }
  function renderButton() {
    if (currentStep > 3) {
      return null;
    } else if (currentStep === 3) {
      return (
        <div className="">
          <button
            type="submit"
            className="inline-flex items-center justify-center w-full px-6 py-4 text-sm font-bold text-white transition-all duration-200 bg-gray-900 border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:bg-gray-700"
          >
            Complete Checkout
          </button>
        </div>
      );
    } else {
      return (
        <div className="flex items-center gap-4 mt-6">
          {/* <button
            disabled={!isValid}
            onClick={handlePrevStep}
            type="button"
            className="inline-flex items-center justify-center w-full px-6 py-4 text-sm font-bold text-white transition-all duration-200 bg-red-900 border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:bg-gray-700 disabled:bg-gray-500"
          >
            Prev Step
          </button> */}
          <button
            disabled={!isValid}
            onClick={handleNextStep}
            type="button"
            className="inline-flex items-center justify-center w-full px-6 py-4 text-sm font-bold text-white transition-all duration-200 bg-green-900 border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:bg-gray-700 disabled:bg-gray-500"
          >
            Next Step
          </button>
        </div>
      );
    }
  }
  async function processForm(data) {
    //Call api
    console.log(data);
    reset();
  }
  return (
    <section className="py-12 bg-gray-50 sm:py-16 lg:py-20">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-2xl mx-auto">
          <Steps steps={steps} />

          <div className="mt-6 overflow-hidden bg-white rounded-lg shadow md:mt-10">
            <div className="px-4 py-6 sm:px-8 sm:py-10">
              {/* Banner */}
              <CheckoutBanner />
              {/* Banner end */}
              {/* Form Start*/}
              {/* <form onSubmit={handleSubmit(processForm)}>
                {currentStep >= 0 && (
                  <section className={currentStep === 0 ? "block" : "hidden"}>
                    <p className="mt-6 text-base font-bold text-gray-900">
                      Personal Information
                    </p>
                    <div className="grid grid-cols-1 mt-6 sm:grid-cols-2 gap-x-6 gap-y-5">
                      <div>
                        <label for=""> First name </label>
                        <div className="mt-2">
                          <input
                            type="text"
                            name=""
                            id=""
                            {...register("firstName", { required: true })}
                            placeholder=""
                            className="block w-full px-4 py-3 text-sm font-normal text-gray-900 placeholder-gray-500 bg-white border border-gray-300 rounded-md caret-gray-900 focus:ring-gray-900 focus:border-gray-900"
                          />
                          {errors.firstName?.message && (
                            <p className="mt-2 text-sm text-red-400">
                              {errors.firstName?.message}
                            </p>
                          )}
                        </div>
                      </div>

                      <div>
                        <label for=""> Last name </label>
                        <div className="mt-2">
                          <input
                            type="text"
                            name=""
                            id=""
                            {...register("lastName", { required: true })}
                            placeholder=""
                            className="block w-full px-4 py-3 text-sm font-normal text-gray-900 placeholder-gray-500 bg-white border border-gray-300 rounded-md caret-gray-900 focus:ring-gray-900 focus:border-gray-900"
                          />
                          {errors.lastName?.message && (
                            <p className="mt-2 text-sm text-red-400">
                              {errors.lastName?.message}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="sm:col-span-2">
                        <label for=""> Email address </label>
                        <div className="mt-2">
                          <input
                            type="email"
                            name=""
                            id=""
                            {...register("email", { required: true })}
                            placeholder=""
                            className="block w-full px-4 py-3 text-sm font-normal text-gray-900 placeholder-gray-500 bg-white border border-gray-300 rounded-md caret-gray-900 focus:ring-gray-900 focus:border-gray-900"
                          />
                          {errors.email?.message && (
                            <p className="mt-2 text-sm text-red-400">
                              {errors.email?.message}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </section>
                )}
                {currentStep >= 1 && (
                  <section className={currentStep === 0 ? "block" : "hidden"}>
                    <p className="mt-6 text-base font-bold text-gray-900">
                      Shipping Address
                    </p>
                    <div className="grid grid-cols-1 mt-6 sm:grid-cols-2 gap-x-6 gap-y-5">
                      <div>
                        <label for=""> First name </label>
                        <div className="mt-2">
                          <input
                            type="text"
                            name=""
                            id=""
                            {...register("firstName", { required: true })}
                            placeholder=""
                            className="block w-full px-4 py-3 text-sm font-normal text-gray-900 placeholder-gray-500 bg-white border border-gray-300 rounded-md caret-gray-900 focus:ring-gray-900 focus:border-gray-900"
                          />
                          {errors.firstName?.message && (
                            <p className="mt-2 text-sm text-red-400">
                              {errors.firstName?.message}
                            </p>
                          )}
                        </div>
                      </div>

                      <div>
                        <label for=""> Last name </label>
                        <div className="mt-2">
                          <input
                            type="text"
                            name=""
                            id=""
                            {...register("lastName", { required: true })}
                            placeholder=""
                            className="block w-full px-4 py-3 text-sm font-normal text-gray-900 placeholder-gray-500 bg-white border border-gray-300 rounded-md caret-gray-900 focus:ring-gray-900 focus:border-gray-900"
                          />
                          {errors.lastName?.message && (
                            <p className="mt-2 text-sm text-red-400">
                              {errors.lastName?.message}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="sm:col-span-2">
                        <label for=""> Email address </label>
                        <div className="mt-2">
                          <input
                            type="email"
                            name=""
                            id=""
                            {...register("email", { required: true })}
                            placeholder=""
                            className="block w-full px-4 py-3 text-sm font-normal text-gray-900 placeholder-gray-500 bg-white border border-gray-300 rounded-md caret-gray-900 focus:ring-gray-900 focus:border-gray-900"
                          />
                          {errors.email?.message && (
                            <p className="mt-2 text-sm text-red-400">
                              {errors.email?.message}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </section>
                )}
                {currentStep >= 2 && (
                  <section className={currentStep === 0 ? "block" : "hidden"}>
                    <p className="mt-6 text-base font-bold text-gray-900">
                      Payment Method
                    </p>
                    <div className="grid grid-cols-1 mt-6 sm:grid-cols-2 gap-x-6 gap-y-5">
                      <div>
                        <label for=""> First name </label>
                        <div className="mt-2">
                          <input
                            type="text"
                            name=""
                            id=""
                            {...register("firstName", { required: true })}
                            placeholder=""
                            className="block w-full px-4 py-3 text-sm font-normal text-gray-900 placeholder-gray-500 bg-white border border-gray-300 rounded-md caret-gray-900 focus:ring-gray-900 focus:border-gray-900"
                          />
                          {errors.firstName?.message && (
                            <p className="mt-2 text-sm text-red-400">
                              {errors.firstName?.message}
                            </p>
                          )}
                        </div>
                      </div>

                      <div>
                        <label for=""> Last name </label>
                        <div className="mt-2">
                          <input
                            type="text"
                            name=""
                            id=""
                            {...register("lastName", { required: true })}
                            placeholder=""
                            className="block w-full px-4 py-3 text-sm font-normal text-gray-900 placeholder-gray-500 bg-white border border-gray-300 rounded-md caret-gray-900 focus:ring-gray-900 focus:border-gray-900"
                          />
                          {errors.lastName?.message && (
                            <p className="mt-2 text-sm text-red-400">
                              {errors.lastName?.message}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="sm:col-span-2">
                        <label for=""> Email address </label>
                        <div className="mt-2">
                          <input
                            type="email"
                            name=""
                            id=""
                            {...register("email", { required: true })}
                            placeholder=""
                            className="block w-full px-4 py-3 text-sm font-normal text-gray-900 placeholder-gray-500 bg-white border border-gray-300 rounded-md caret-gray-900 focus:ring-gray-900 focus:border-gray-900"
                          />
                          {errors.email?.message && (
                            <p className="mt-2 text-sm text-red-400">
                              {errors.email?.message}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </section>
                )}
                {currentStep >= 3 && (
                  <section className={currentStep === 0 ? "block" : "hidden"}>
                    <p className="mt-6 text-base font-bold text-gray-900">
                      Confirmation
                    </p>
                    <div className="grid grid-cols-1 mt-6 sm:grid-cols-2 gap-x-6 gap-y-5">
                      <h2>Her is all the Data that have been saved</h2>
                    </div>
                  </section>
                )}
                {renderButton()}
                <pre>{JSON.stringify(watch(), null, 2)}</pre>
              </form> */}
              <StepForm />
              {/* Form  End*/}

              {/* Navigation Buttons */}
              <div className="grid grid-cols-1 mt-6 sm:grid-cols-2 gap-x-6 gap-y-5">
                {/* Prev */}
                {/* <div className="">
                  <button
                    onClick={handlePrevStep}
                    type="button"
                    className="inline-flex items-center justify-center w-full px-6 py-4 text-sm font-bold text-white transition-all duration-200 bg-gray-900 border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:bg-gray-700"
                  >
                    Prev Step
                  </button>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
