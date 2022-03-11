import React, { useRef, useState } from "react";

export function RegisterForm(props) {

  const name = useRef("");
  const email = useRef("");
  const password = useRef("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    props.registerFormData({
      name: name.current.value,
      email: email.current.value,
      password: password.current.value,
    });
  };

  return (
    <form
      onSubmit={handleFormSubmit}
      className="max-w-lg border rounded-lg mx-auto"
    >
      <div className="flex flex-col gap-4 p-4 md:p-8">
      <div>
          <label
            htmlFor="name"
            className="inline-block text-sm sm:text-base mb-2"
          >
            Name
          </label>
          <input
            type="text"
            ref={name}
            name="name"
            className="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="inline-block text-sm sm:text-base mb-2"
          >
            Email
          </label>
          <input
            type="text"
            ref={email}
            name="email"
            className="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
          />
        </div>

        <div>
          <label
            htmlFor="password"
            className="inline-block text-gray-800 text-sm sm:text-base mb-2"
          >
            Password
          </label>
          <input
            type="password"
            ref={password}
            name="password"
            className="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
          />
        </div>

        <button type="submit" className="block bg-gray-800 hover:bg-gray-700 active:bg-gray-600 focus-visible:ring ring-gray-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">
          Register
        </button>
      </div>

    </form>
  );
}
