"use client";

import { useState } from "react";
import Link from "next/link";

export default function SignupPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    setSuccess("");

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    if (!formData.name || !formData.email || !formData.password) {
      setError("Please complete all fields.");
      return;
    }

    setLoading(true);

    try {
      // Replace this with your signup API integration when ready.
      console.log("Signup data:", formData);
      setSuccess("Your account has been created. You can now sign in.");
      setFormData({ name: "", email: "", password: "", confirmPassword: "" });
    } catch (err) {
      setError("Unable to create account. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-xl bg-white border border-slate-200 rounded-[28px] shadow-xl shadow-slate-200/50 p-8 sm:p-10">
        <div className="text-center space-y-3 mb-8">
          <p className="text-sm uppercase tracking-[0.4em] text-cyan-600 font-semibold">
            Create Account
          </p>
          <h1 className="text-3xl sm:text-4xl font-semibold text-slate-900">
            Start your adventure with Wanderlust
          </h1>
          <p className="text-sm sm:text-base text-slate-500 max-w-xl mx-auto">
            Join today and discover the best travel packages, destinations, and exclusive offers.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100 outline-none transition"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100 outline-none transition"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-slate-700 mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Create a password"
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100 outline-none transition"
            />
          </div>

          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-slate-700 mb-2">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm your password"
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100 outline-none transition"
            />
          </div>

          {error && (
            <div className="rounded-2xl bg-rose-50 border border-rose-100 px-4 py-3 text-sm text-rose-700">
              {error}
            </div>
          )}
          {success && (
            <div className="rounded-2xl bg-emerald-50 border border-emerald-100 px-4 py-3 text-sm text-emerald-700">
              {success}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-2xl bg-cyan-600 px-4 py-3 text-white font-semibold shadow-lg shadow-cyan-500/20 transition hover:bg-cyan-700 disabled:cursor-not-allowed disabled:bg-slate-300"
          >
            {loading ? "Creating account..." : "Create Account"}
          </button>
        </form>

        <div className="flex items-center gap-3 py-6">
          <span className="h-px flex-1 bg-slate-200"></span>
          <span className="text-sm text-slate-400 uppercase tracking-[0.25em]">Or sign up with</span>
          <span className="h-px flex-1 bg-slate-200"></span>
        </div>

        <button
          type="button"
          className="flex w-full items-center justify-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
        >
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M22.5 12.24c0-.76-.07-1.5-.22-2.22H12v4.2h6.24c-.27 1.48-1.08 2.73-2.3 3.57v2.98h3.72c2.18-2.01 3.44-4.96 3.44-8.53Z" fill="#4285F4" />
            <path d="M12 23c2.96 0 5.44-.98 7.26-2.66l-3.72-2.98c-1.04.7-2.35 1.12-3.54 1.12-2.72 0-5.02-1.84-5.84-4.34H2.86v2.72C4.64 20.92 8.03 23 12 23Z" fill="#34A853" />
            <path d="M6.16 13.37a7.02 7.02 0 0 1 0-4.72V5.93H2.86a11.96 11.96 0 0 0 0 12.13l3.3-2.69Z" fill="#FBBC05" />
            <path d="M12 4.5c1.61 0 3.05.56 4.18 1.65l3.12-3.12C17.44 1.21 14.96.23 12 .23 8.03.23 4.64 2.31 2.86 5.93l3.3 2.72C6.98 6.34 9.28 4.5 12 4.5Z" fill="#EA4335" />
          </svg>
          Sign Up With Google
        </button>

        <p className="mt-6 text-center text-sm text-slate-500">
          Already have an account?{' '}
          <Link href="/login" className="font-semibold text-cyan-600 hover:text-cyan-700">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}
