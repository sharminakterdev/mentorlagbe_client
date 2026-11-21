import Link from "next/link";import { Navbar } from "../../components";
export default function Cancel(){return <><Navbar/><main style={{minHeight:"70vh",display:"grid",placeItems:"center",textAlign:"center"}}><div><h1>Payment cancelled</h1><p>No charges were made.</p><Link className="btn btn-outline" href="/pricing">Back to Pricing</Link></div></main></>}
