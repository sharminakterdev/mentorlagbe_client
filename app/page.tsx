"use client";
import { useEffect,useState } from "react";
import Link from "next/link";
import { Search,ArrowRight,Calculator,Atom,Code2,Languages,CheckCircle2,Star,Pencil } from "lucide-react";
import { Navbar,Footer,TuitionCard,TuitionCardData } from "./components";
import { api } from "./lib/api";

const MARQUEE=["Mathematics","Physics","Programming","IELTS","English","Chemistry","Biology","Bangla","Accounting","Business Studies"];

export default function Home(){
 const [tuitions,setTuitions]=useState<TuitionCardData[]>([]);
 useEffect(()=>{api<{items:TuitionCardData[]}>("/tuitions?limit=6").then(d=>setTuitions(d.items)).catch(()=>setTuitions([]))},[]);
 return <><Navbar/><main>
  <section className="container hero">
   <div>
    <span className="eyebrow">~ your personal learning diary ~</span>
    <h1>Find your ideal tutor or <em>mentorship batch</em></h1>
    <p>Connect with verified tutors, discover subject-specific tuition batches, and make learning personal — all in one notebook.</p>
    <div className="hero-actions">
     <Link className="btn btn-primary" href="/tuitions"><Search size={18}/>Explore tuitions</Link>
     <Link className="btn btn-lime" href="/sign-up">Become a tutor <ArrowRight size={16}/></Link>
    </div>
    <p className="hand" style={{marginTop:26,marginBottom:0}}>no more chasing — just learn ✎</p>
   </div>
   <div className="hero-visual">
    <div className="hero-photo"/>
    <div className="float-card one"><CheckCircle2 size={18}/> verified tutors</div>
    <div className="float-card two"><Star size={18} fill="#c24e2a" color="#c24e2a"/> 4.9 student rating</div>
   </div>
  </section>
  <div className="marquee" aria-hidden="true">
   <div className="marquee-track">
    {[...MARQUEE,...MARQUEE].map((s,i)=><span key={i}>{s}<i>✦</i></span>)}
   </div>
  </div>
  <section className="section">
   <div className="container">
    <div className="section-heading"><div><span className="eyebrow">~ featured tuitions ~</span><h2>Popular learning programs</h2></div><Link className="btn btn-outline" href="/tuitions">Browse all <ArrowRight size={16}/></Link></div>
    <div className="grid3">{tuitions.map(item=><TuitionCard key={item._id} item={item}/>)}</div>
   </div>
  </section>
  <section className="section section-soft ruled" id="how-it-works">
   <div className="container">
    <div className="section-heading"><div><span className="eyebrow">~ how it works ~</span><h2>Learning made simple</h2></div></div>
    <div className="workflow">
     <div className="step"><div className="step-num">01</div><h3>Search your subject</h3><p>Browse verified tutors and compare schedules, modes and monthly fees.</p></div>
     <div className="step"><div className="step-num">02</div><h3>Apply for tuition</h3><p>Send your learning preferences and receive a quick response from the tutor.</p></div>
     <div className="step"><div className="step-num">03</div><h3>Start learning</h3><p>Connect and enjoy a focused learning journey.</p></div>
    </div>
   </div>
  </section>
  <section className="section" id="subjects">
   <div className="container">
    <div className="section-heading"><div><span className="eyebrow">~ top subjects ~</span><h2>Explore what you love</h2></div><span className="hand" style={{margin:0}}><Pencil size={20} style={{display:"inline",verticalAlign:"-2px"}}/> pick a notebook</span></div>
    <div className="grid4">{[{n:"Mathematics",i:<Calculator/>},{n:"Physics",i:<Atom/>},{n:"Programming",i:<Code2/>},{n:"IELTS",i:<Languages/>}].map(s=><div className="subject" key={s.n}><div className="subject-icon">{s.i}</div><h3>{s.n}</h3></div>)}</div>
   </div>
  </section>
 </main><Footer/></>
}
