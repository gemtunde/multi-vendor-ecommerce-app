import React from "react";

export default function SelectInput({
  label,
  name,
  register,
  errors,
  isRequired = true,
  className = "sm:col-span-2",
  options = [],
  multiple = false,
}) {
  return (
    <div className={className}>
      <label
        htmlFor={name}
        className="block text-sm font-medium leading-6 text-slate-900 dark:text-slate-100"
      >
        {label}
      </label>
      <div className="mt-2">
        <select
          {...register(`${name}`, { required: isRequired })}
          // {...register(`${name}`)}
          id={name}
          name={name}
          className="block dark:bg-transparent  w-full rounded-md border-0 py-3 text-slate-900 dark:text-white dar shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-400 sm:text-sm sm:leading-6"
          multiple={multiple}
          //className="block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
        >
          <option value="">Please Select</option>
          {options.map((option, i) => {
            return (
              <option key={i} value={option.id}>
                {option.title}
              </option>
            );
          })}
        </select>
        {errors[`${name}`] && (
          <span className="text-sm text-red-600 ">{label} is required</span>
        )}
      </div>
    </div>
  );
}
