"use client";
//import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import SubmitButton from "../FormInputs/SubmitButton";
import TextInput from "../FormInputs/TextInput";
import { makePostRequest } from "@/lib/apiRequest";
//import { FaGithub, FaGoogle } from "react-icons/fa";

export default function RegisterForm({ role = "USER" }) {
  //const router = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const [emailErr, setEmailErr] = useState("");

  const router = useRouter();
  function redirect() {
    // router.push("/login");
    if (role === "USER") {
      router.push("/login");
    } else {
      router.push(`/verify-email`);
      //  router.push(`/onboarding/${response.data.id}`);
    }
  }
  async function onSubmit(data) {
    console.log("USER", data);
    makePostRequest(setIsLoading, "api/users", data, "User", reset, redirect);
    try {
      setIsLoading(true);
      const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
      const response = await fetch(`${baseUrl}/api/users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const responseData = await response.json();
      console.log("resp", response);
      console.log("responseData---->><>>>>", responseData);

      if (response.ok) {
        setIsLoading(false);
        toast.success("User Created Successfully");
        reset();
        role === "USER" ? router.push("/login") : router.push("/verify-email");
      } else {
        setIsLoading(false);
        if (response.status === 409) {
          setEmailErr("User with this Email already exists");
          toast.error("User with this Email already exists");
        } else {
          // Handle other errors
          console.error("Server Error:", responseData.message);
          toast.error("Oops Something Went wrong");
        }
      }
    } catch (error) {
      setIsLoading(false);
      console.error("Network Error:", error);
      toast.error("Something Went wrong, Please Try Again");
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-slate-600 dark:border-gray-700 mx-auto my-3"
    >
      <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
        {role !== "USER" && (
          <TextInput
            label="Role"
            name="role"
            register={register}
            errors={errors}
            defaultValue={role}
            disabled
            //className="full"
          />
        )}
        <TextInput
          label="Fullname"
          name="name"
          register={register}
          errors={errors}
          //className="full"
        />

        <TextInput
          label=" Email Address"
          name="email"
          register={register}
          errors={errors}
          //className="full"
        />

        <TextInput
          label="Password"
          name="password"
          register={register}
          type="password"
          errors={errors}
          //className="full"
        />
      </div>
      <SubmitButton
        disabled={!isValid}
        isLoading={isLoading}
        buttonTitle="Register"
        loadingButtonTitle="Creating user, please wait..."
      />
      {/* {loading ? (
        <button
          disabled
          type="button"
          className="w-full text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800 inline-flex items-center"
        >
          <svg
            aria-hidden="true"
            role="status"
            className="inline w-4 h-4 mr-3 text-white animate-spin"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="#E5E7EB"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentColor"
            />
          </svg>
          Creating please wait...
        </button>
      ) : (
        <button
          type="submit"
          className="w-full text-white bg-purple-600 hover:bg-purple-700 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800"
        >
          Sign Up
        </button>
      )} */}
      {/* <div className="flex items-center ">
        <div className="w-full bg-slate-500 h-[1px]"></div>
        <span className="mx-2">or</span>
        <div className="w-full bg-slate-500 h-[1px]"></div>
      </div> */}
      {/* <div className="">
        <button
          type="button"
          onClick={() => signIn("google")}
          className="w-full text-slate-950 bg-white hover:bg-slate-50 focus:ring-4 focus:outline-none focus:ring-slate-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center justify-center flex items-center dark:focus:ring-slate-100 me-2 mb-4 border border-slate-200"
        >
          <FaGoogle className="mr-2 text-red-600 w-4 h-4" />
          Sign up with Google
        </button>
        <button
          type="button"
          onClick={() => signIn("github")}
          className="w-full justify-center text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mb-2"
        >
         
          <FaGithub className="mr-2 w-4 h-4" />
          Sign up with Github
        </button>
      </div> */}
      <div className="">
        <p className="text-sm mt-2 font-light text-gray-500 dark:text-gray-400">
          Already have an account?{" "}
          <Link
            href="/login"
            className="font-medium text-purple-600 hover:underline dark:text-purple-500"
          >
            Login
          </Link>
        </p>
        {role === "USER" && (
          <p className="text-sm mt-2 font-light text-gray-500 dark:text-gray-400">
            Are you a farmer?{" "}
            <Link
              href="/register-farmer"
              className="font-medium text-purple-600 hover:underline dark:text-purple-500"
            >
              Register as Farmer
            </Link>
          </p>
        )}
      </div>
    </form>
  );
}
