"use client";
import { useEffect,useState } from "react";
import { Navbar,Footer,TuitionCard,TuitionCardData } from "../components";
import { api } from "../lib/api";

export default function TuitionsPage(){
 const [items,setItems]=useState<TuitionCardData[]>([]);const [search,setSearch]=useState("");const [subject,setSubject]=useState("");const [level,setLevel]=useState("");const [mode,setMode]=useState("");const [page,setPage]=useState(1);const [pages,setPages]=useState(1);const [loading,setLoading]=useState(true);
 useEffect(()=>{
  setLoading(true);
  const params=new URLSearchParams({page:String(page),limit:"9"});
  if(search)params.set("search",search);if(subject)params.set("subject",subject);if(level)params.set("classLevel",level);if(mode)params.set("mode",mode);
  api<{items:TuitionCardData[];pages:number;total:number}>(`/tuitions?${params}`).then(d=>{setItems(d.items);setPages(d.pages)}).finally(()=>setLoading(false));
 },[search,subject,level,mode,page]);
 return <><Navbar/><main><header className="page-hero"><div className="container"><span className="eyebrow">Find your match</span><h1>Browse Tuitions</h1><p>Discover verified tutors and learning opportunities.</p></div></header><div className="container"><div className="filter-bar"><input value={search} onChange={e=>{setPage(1);setSearch(e.target.value)}} placeholder="Search title or subject..."/><select value={subject} onChange={e=>{setPage(1);setSubject(e.target.value)}}><option value="">All subjects</option>{["Mathematics","Physics","Programming","IELTS","English","Chemistry","Bangla","Biology","Accounting","Business Studies"].map(s=><option key={s}>{s}</option>)}</select><select value={level} onChange={e=>{setPage(1);setLevel(e.target.value)}}><option value="">All class levels</option>{["Class 6","Class 8","Class 9","Class 10","Class 12","Admission","SAT","Adult","BBA"].map(s=><option key={s}>{s}</option>)}</select><select value={mode} onChange={e=>{setPage(1);setMode(e.target.value)}}><option value="">All modes</option><option>Online</option><option>Offline</option></select></div>{loading?<div style={{minHeight:300,textAlign:"center",paddingTop:120}}>Loading tuitions...</div>:<><div className="grid3" style={{marginBottom:30}}>{items.map(item=><TuitionCard key={item._id} item={item}/>)}</div><div style={{display:"flex",justifyContent:"center",gap:8,marginBottom:80}}><button className="btn btn-outline" disabled={page<=1} onClick={()=>setPage(p=>p-1)}>Previous</button><span style={{alignSelf:"center"}}>Page {page} of {pages}</span><button className="btn btn-outline" disabled={page>=pages} onClick={()=>setPage(p=>p+1)}>Next</button></div></>}</div></main><Footer/></>
}
