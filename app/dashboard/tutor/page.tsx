"use client";
import { useEffect,useState } from "react";
import { useAuth } from "../../lib/auth";
import { api } from "../../lib/api";
export default function TutorOverview(){const {user}=useAuth();const [stats,setStats]=useState({total:0,active:0,applicants:0,plan:"free"});useEffect(()=>{api<typeof stats>("/dashboard/stats").then(setStats).catch(()=>{})},[]);return <><div className="dashboard-top"><div><span className="eyebrow">Dashboard</span><h1 style={{margin:"6px 0"}}>Good morning, {user?.name?.split(" ")[0]||"Tutor"}</h1></div><span className="status approved">Tutor • {stats.plan}</span></div><div className="stats-grid">{[[stats.total,"Tuitions Posted"],[stats.active,"Active / Approved"],[stats.applicants,"Total Applicants"],[stats.plan==="pro"?"Pro":"Free","Current Plan"]].map(x=><div className="dash-card" key={String(x[1])}><span style={{color:"#75818a",fontSize:13}}>{x[1]}</span><br/><strong>{x[0]}</strong></div>)}</div></>}
