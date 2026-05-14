"use client";

import { useState } from "react";
import Link from "next/link";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }

    setLoading(true);
    try {
      // Replace with real auth integration
      console.log({ email, password, remember });
      setError("");
      // simulate success
    } catch (err) {
      setError("Unable to sign in. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md bg-white border border-slate-200 rounded-[28px] shadow-xl shadow-slate-200/50 p-8 sm:p-10">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-semibold text-slate-900">Welcome Back</h1>
          <p className="mt-3 text-sm sm:text-base text-slate-500">
            Resume your adventure with Wanderlust
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
              Email Address
            </label>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 flex items-center gap-3">
              
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full bg-transparent outline-none text-slate-900 placeholder:text-slate-400"
              />
            </div>
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-slate-700 mb-2">
              Password
            </label>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 flex items-center gap-3">
              
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full bg-transparent outline-none text-slate-900 placeholder:text-slate-400"
              />
            </div>
          </div>

          <div className="flex items-center justify-between gap-4 text-sm text-slate-500">
            <label className="inline-flex items-center gap-2">
              <input
                type="checkbox"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
                className="h-4 w-4 rounded border-slate-300 text-cyan-600 focus:ring-cyan-500"
              />
              Remember me
            </label>
            <Link href="/forgot-password" className="text-cyan-600 hover:text-cyan-700">
              Forgot password?
            </Link>
          </div>

          {error && (
            <div className="rounded-2xl bg-rose-50 border border-rose-100 px-4 py-3 text-sm text-rose-700">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-2xl bg-cyan-600 px-4 py-3 text-white font-semibold shadow-lg shadow-cyan-500/20 transition hover:bg-cyan-700 disabled:cursor-not-allowed disabled:bg-slate-300"
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>

        <div className="flex items-center gap-3 py-6 text-sm text-slate-400">
          <span className="h-px flex-1 bg-slate-200"></span>
          <span className="font-medium uppercase tracking-[0.25em]">Or continue with</span>
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
          Don't have an account?{' '}
          <Link href="/signup" className="font-semibold text-cyan-600 hover:text-cyan-700">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}
