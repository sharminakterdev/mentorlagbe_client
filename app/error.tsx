"use client";
import Link from "next/link";
export default function ErrorPage({reset}:{reset:()=>void}){return <main style={{minHeight:"70vh",display:"grid",placeItems:"center",textAlign:"center"}}><div><h1>Something went wrong</h1><p>We could not load this page.</p><button className="btn btn-primary" onClick={reset}>Try again</button>{" "}<Link className="btn btn-outline" href="/">Back to Home</Link></div></main>}
