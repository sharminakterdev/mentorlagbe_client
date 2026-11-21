"use client";
import Link from "next/link";
import { useState } from "react";
import { GraduationCap, Menu, X, ArrowRight } from "lucide-react";
import { useAuth } from "./lib/auth";
import { useRouter } from "next/navigation";

export function Navbar() {
  const { user, signOut } = useAuth();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const dashboard =
    user?.role === "admin"
      ? "/dashboard/admin"
      : user?.role === "tutor"
        ? "/dashboard/tutor"
        : "/dashboard/student";
  return (
    <nav className="nav">
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Link className="brand" href="/">
          <span className="brand-mark">
            <GraduationCap size={22} />
          </span>
          MentorLagbe
        </Link>
        <div className="nav-links">
          <Link href="/">Home</Link>
          <Link href="/tuitions">Browse Tuitions</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/#how-it-works">How It Works</Link>
          {user ? (
            <>
              <Link className="btn btn-outline" href="/dashboard/profile">
                Profile
              </Link>
              <Link className="btn btn-primary" href={dashboard}>
                <p className="text-white">{user.name.split(" ")[0]} • {user.role}</p>
              </Link>
              <button
                className="btn btn-outline"
                onClick={() => {
                  signOut();
                  router.push("/");
                }}
              >
                Sign Out
              </button>
            </>
          ) : (
            <>
              <Link className="btn btn-outline" href="/sign-in">
                Sign In
              </Link>
              <Link className="btn btn-primary" href="/sign-up">
                <p className="text-white">Sign Up</p>
              </Link>
            </>
          )}
        </div>
        <button className="mobile-menu btn btn-outline" onClick={() => setOpen(o => !o)} aria-label="Menu">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      {open && (
        <div className="mobile-nav open">
          <Link href="/" onClick={() => setOpen(false)}>Home</Link>
          <Link href="/tuitions" onClick={() => setOpen(false)}>Browse Tuitions</Link>
          <Link href="/pricing" onClick={() => setOpen(false)}>Pricing</Link>
          <Link href="/#how-it-works" onClick={() => setOpen(false)}>How It Works</Link>
          {user ? (
            <>
              <Link href="/dashboard/profile" onClick={() => setOpen(false)}>Profile</Link>
              <Link href={dashboard} onClick={() => setOpen(false)}>Dashboard</Link>
              <a href="#" onClick={e => { e.preventDefault(); signOut(); router.push("/"); setOpen(false); }}>Sign Out</a>
            </>
          ) : (
            <>
              <Link href="/sign-in" onClick={() => setOpen(false)}>Sign In</Link>
              <Link href="/sign-up" onClick={() => setOpen(false)}>Sign Up</Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
}

