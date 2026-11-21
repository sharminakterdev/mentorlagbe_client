"use client";
import { useEffect,useState } from "react";
import { api } from "../../lib/api";
import { useAuth } from "../../lib/auth";

export default function StudentOverview(){
 const {user}=useAuth();const [stats,setStats]=useState({total:0,accepted:0,pending:0,plan:"free"});
 useEffect(()=>{api<typeof stats>("/dashboard/stats").then(setStats).catch(()=>{})},[]);
 return <><div className="dashboard-top"><div><span className="eyebrow">Dashboard</span><h1 style={{margin:"6px 0"}}>Good morning, {user?.name?.split(" ")[0]||"Student"}</h1></div><span className="status approved">Student • {stats.plan}</span></div><div className="stats-grid">{[[stats.total,"Applied Tuitions"],[stats.accepted,"Accepted"],[stats.pending,"Pending"],[stats.plan==="pro"?"Pro":"Free","Current Plan"]].map(x=><div className="dash-card" key={String(x[1])}><span style={{color:"#75818a",fontSize:13}}>{x[1]}</span><br/><strong>{x[0]}</strong></div>)}</div></>
}
