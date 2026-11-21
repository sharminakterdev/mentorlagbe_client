"use client";
import { useEffect,useState } from "react";
import { api } from "../../lib/api";
export default function AdminOverview(){const [stats,setStats]=useState({users:0,tutors:0,pending:0,approved:0,revenue:0});useEffect(()=>{api<typeof stats>("/dashboard/stats").then(setStats).catch(()=>{})},[]);return <><div className="dashboard-top"><div><span className="eyebrow">Admin dashboard</span><h1 style={{margin:"6px 0"}}>Platform overview</h1></div></div><div className="stats-grid">{[[stats.users,"Total Users"],[stats.tutors,"Total Tutors"],[stats.pending,"Pending Tuitions"],[`৳${stats.revenue.toLocaleString()}`,"Stripe Revenue"]].map(x=><div className="dash-card" key={String(x[1])}><span style={{color:"#75818a",fontSize:13}}>{x[1]}</span><br/><strong>{x[0]}</strong></div>)}</div></>}
