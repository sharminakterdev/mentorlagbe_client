"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Navbar } from "../components";
import { useAuth } from "../lib/auth";

export default function SignIn(){
 const router=useRouter();const {signIn}=useAuth();
 async function submit(e:React.FormEvent<HTMLFormElement>){
  e.preventDefault();const form=new FormData(e.currentTarget);
  try{
   const loggedIn=await signIn(String(form.get("email")),String(form.get("password")));
   toast.success("Signed in successfully");
   router.push(loggedIn.role==="tutor"?"/dashboard/tutor":loggedIn.role==="admin"?"/dashboard/admin":"/dashboard/student");
  }catch(error){toast.error(error instanceof Error?error.message:"Sign in failed")}
 }
 return <><Navbar/><main className="auth-wrap"><div className="auth-side"><div><span className="eyebrow" style={{color:"var(--lime)"}}>Welcome back</span><h1>Continue your learning journey.</h1><p style={{color:"#c3d0d5",lineHeight:1.7}}>Manage applications, tuition posts and mentorship opportunities in one place.</p></div></div><div className="auth-form"><form className="form-box" onSubmit={submit}><h1>Sign in</h1><p style={{color:"#75828b"}}>Welcome back to MentorLagbe</p><div className="field"><label>Email</label><input name="email" type="email" required placeholder="you@example.com"/></div><div className="field"><label>Password</label><input name="password" type="password" required minLength={6} placeholder="••••••••"/></div><button className="btn btn-primary" style={{width:"100%"}}>Sign In</button><p style={{textAlign:"center",fontSize:14}}>New here? <Link href="/sign-up" style={{color:"var(--brand)",fontWeight:700}}>Create an account</Link></p></form></div></main></>
}
