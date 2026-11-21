"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Navbar } from "../components";
import { useAuth } from "../lib/auth";

export default function SignUp(){
 const router=useRouter();const {signUp}=useAuth();
 async function submit(e:React.FormEvent<HTMLFormElement>){
  e.preventDefault();const form=new FormData(e.currentTarget);const role=String(form.get("role")) as "student"|"tutor";
  try{await signUp(String(form.get("name")),String(form.get("email")),String(form.get("password")),role);toast.success("Account created successfully");router.push(role==="tutor"?"/dashboard/tutor":"/dashboard/student")}catch(error){toast.error(error instanceof Error?error.message:"Sign up failed")}
 }
 return <><Navbar/><main className="auth-wrap"><div className="auth-side"><div><span className="eyebrow" style={{color:"#dff4a4"}}>Join MentorLagbe</span><h1>Learn, teach and grow together.</h1><p style={{color:"#c3d0d5",lineHeight:1.7}}>Create a student or tutor profile and start today.</p></div></div><div className="auth-form"><form className="form-box" onSubmit={submit}><h1>Create account</h1><div className="field"><label>Full name</label><input name="name" required placeholder="Your full name"/></div><div className="field"><label>Email</label><input name="email" type="email" required placeholder="you@example.com"/></div><div className="field"><label>Password</label><input name="password" type="password" required minLength={6} placeholder="Minimum 6 characters"/></div><div className="field"><label>I want to join as</label><select name="role" required><option value="student">Student</option><option value="tutor">Tutor</option></select></div><button className="btn btn-primary" style={{width:"100%"}}>Create Account</button><p style={{textAlign:"center",fontSize:14}}>Already have an account? <Link href="/sign-in" style={{color:"var(--brand)",fontWeight:700}}>Sign in</Link></p></form></div></main></>
}
