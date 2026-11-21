import Link from "next/link";
export default function NotFound(){return <main style={{minHeight:"70vh",display:"grid",placeItems:"center",textAlign:"center"}}><div><h1 style={{fontSize:72,margin:0}}>404</h1><h2>Page not found</h2><p>The page you are looking for does not exist.</p><Link className="btn btn-primary" href="/">Back to Home</Link></div></main>}
