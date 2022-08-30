import React from "react";

function Input({ type, name, placeholder, value, onChange, label, error }) {
  return (
    <>
      <label className="block uppercase tracking-wide text-gray-500 text-xs font-bold mb-2 md:mb-1">
        {label}
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        error={error}
        className={`input input-bordered w-full max-w-xs gap-3 ${
          error ? "border-red-500" : "border-grey-500"
        }`}
      ></input>
      {error && (
        <label class="label pt-0">
          <span class="label-text-alt">{error}</span>
        </label>
      )}
    </>
  );
}

export default Input;