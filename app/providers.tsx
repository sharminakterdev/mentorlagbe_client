"use client";
import { Toaster } from "sonner";
import { AuthProvider } from "./lib/auth";
export default function Providers({ children }: { children: React.ReactNode }) {
  return <AuthProvider>{children}<Toaster position="top-right" richColors /></AuthProvider>;
}
