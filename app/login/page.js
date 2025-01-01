
"use client";
import React from "react";
import { signIn } from "next-auth/react";

export default function Loginpage() {
  const handleGoogleSignIn = () => {
    signIn("google");
  };

  const handleCredentialsSignIn = async (e) => {
    e.preventDefault();
    const { email, password } = e.target.elements;
    const res = await signIn("credentials", {
      redirect: false,
      username: email.value,
      password: password.value,
    });
    if (res?.error) {
      console.log("Error: ", res.error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center mb-6">Sign In</h2>
        {/* Google Sign-In Button */}
        <button
          onClick={handleGoogleSignIn}
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg mb-4 hover:bg-blue-600"
        >
          Sign in with Google
        </button>

        <div className="text-center mb-4">or</div>

        {/* Credentials Sign-In Form */}
        <form onSubmit={handleCredentialsSignIn}>
          <input
            name="email"
            placeholder="Email"
            type="text"
            required
            className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            name="password"
            placeholder="Password"
            type="password"
            required
            className="w-full px-4 py-2 mb-6 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
          >
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
}
