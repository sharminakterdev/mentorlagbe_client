// "use client";
// import { useEffect,useState } from "react";
// import { useSearchParams } from "next/navigation";
// import Link from "next/link";
// import { Navbar } from "../../components";
// import { api } from "../../lib/api";
// export default function Success(){const params=useSearchParams();const [message,setMessage]=useState("Verifying payment...");useEffect(()=>{const id=params.get("session_id");if(!id){setMessage("Payment completed");return}api("/stripe/verify",{method:"POST",body:JSON.stringify({sessionId:id})}).then(()=>setMessage("Payment Successful! Your Pro plan is now active.")).catch(e=>setMessage(e instanceof Error?e.message:"Could not verify payment"))},[params]);return <><Navbar/><main style={{minHeight:"70vh",display:"grid",placeItems:"center",textAlign:"center"}}><div><h1 style={{color:"#26704a"}}>{message}</h1><Link className="btn btn-primary" href="/dashboard/profile">Go to Profile</Link></div></main></>}
