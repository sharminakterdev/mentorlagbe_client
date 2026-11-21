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

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <Link className="brand" style={{ color: "white" }} href="/">
              <span className="brand-mark">
                <GraduationCap size={22} />
              </span>
              MentorLagbe
            </Link>
            <p style={{ color: "#bdcbd1", lineHeight: 1.7 }}>
              Helping every student find the right tutor and every mentor grow.
            </p>
          </div>
          <div>
            <h4>Explore</h4>
            <Link href="/tuitions">Browse Tuitions</Link>
            <Link href="/pricing">Pro Plans</Link>
            <Link href="/dashboard/student">Dashboard</Link>
          </div>
          <div>
            <h4>Company</h4>
            <Link href="/#how-it-works">How It Works</Link>
            <Link href="/#subjects">Subjects</Link>
            <Link href="/sign-up">Become a Tutor</Link>
          </div>
          <div>
            <h4>Contact</h4>
            <p>hello@mentorlagbe.com</p>
            <p>+880 1700 000000</p>
            <p>Dhaka, Bangladesh</p>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 MentorLagbe. All rights reserved.</span>
          <span>Facebook &nbsp; LinkedIn &nbsp; 𝕏</span>
        </div>
      </div>
    </footer>
  );
}
export type TuitionCardData = {
  _id: string;
  title: string;
  subject: string;
  classLevel: string;
  mode: string;
  monthlyFee: number;
  tutorName: string;
  bannerImage: string;
};
export function TuitionCard({ item }: { item: TuitionCardData }) {
  return (
    <article className="tuition-card">
      <img className="card-image" src={item.bannerImage} alt={item.title} />
      <div className="card-body">
        <h3 className="card-title">{item.title}</h3>
        <div className="card-meta">
          <span className="tag">{item.subject}</span>
          <span className="tag">{item.classLevel}</span>
          <span className="tag">{item.mode}</span>
        </div>
        <p style={{ color: "#73808a", fontSize: 13 }}>by {item.tutorName}</p>
        <div className="card-foot">
          <span className="price">
            ৳{item.monthlyFee.toLocaleString()}{" "}
            <small style={{ color: "#7d898f", fontWeight: 500 }}>
              {" "}
              / month
            </small>
          </span>
          <Link
            className="btn btn-outline"
            style={{ padding: "8px 12px", fontSize: 13 }}
            href={`/tuitions/${item._id}`}
          >
            View <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </article>
  );
}