"use client";
import { toast } from "sonner";
import { Navbar,Footer } from "../components";
import { api } from "../lib/api";
import { useAuth } from "../lib/auth";
import { Check } from "lucide-react";
export default function Pricing(){
 const {user}=useAuth();
 async function subscribe(){if(!user){toast.error("Please sign in first");return}try{const d=await api<{url:string}>("/stripe/create-checkout",{method:"POST"});if(d.url)window.location.href=d.url}catch(e){toast.error(e instanceof Error?e.message:"Could not start checkout")}}
 return <><Navbar/><main><header className="page-hero"><div className="container"><span className="eyebrow">Simple pricing</span><h1>Plans for every learner and tutor</h1></div></header><section className="section"><div className="container" style={{display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:24,maxWidth:900}}>{["Student","Tutor"].map((role,idx)=><div key={role} style={{border:idx?"2px solid var(--brand)":"2px solid var(--ink)",borderRadius:18,padding:30,position:"relative",background:"var(--card)",boxShadow:"5px 5px 0 rgba(43,38,32,.9)"}}><span className="eyebrow">{role} plan</span><h2 style={{fontSize:42,margin:"12px 0"}}>${idx?"15":"10"} <small style={{fontSize:15,color:"#77858d"}}>/ month</small></h2><p>{idx?"Unlimited tuition posts and a verified tutor badge.":"Priority booking and an enhanced learning experience."}</p>{["Unlimited access","Verified profile","Priority support",idx?"Unlimited tuition posts":"Priority applications"].map(x=><p key={x} style={{display:"flex",gap:8,alignItems:"center"}}><Check size={17} color="var(--sage)"/>{x}</p>)}<button className="btn btn-primary" style={{width:"100%",marginTop:12}} onClick={subscribe}>Subscribe with Stripe</button></div>)}</div></section></main><Footer/></>
}
