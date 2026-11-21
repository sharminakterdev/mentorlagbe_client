"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard,User,BookOpen,Users,CreditCard,Settings,GraduationCap,FileText,Menu } from "lucide-react";
import { Navbar } from "../components";

export default function DashboardLayout({children}:{children:React.ReactNode}){
 const path=usePathname();const role=path.includes("/admin")?"admin":path.includes("/tutor")?"tutor":"student";
 const links=role==="admin"?[{href:"/dashboard/admin",n:"Overview",i:<LayoutDashboard size={18}/>},{href:"/dashboard/admin/users",n:"Users",i:<Users size={18}/>},{href:"/dashboard/admin/tuitions",n:"Tuitions",i:<BookOpen size={18}/>},{href:"/dashboard/admin/transactions",n:"Transactions",i:<CreditCard size={18}/>}] : role==="tutor"?[{href:"/dashboard/tutor",n:"Overview",i:<LayoutDashboard size={18}/>},{href:"/dashboard/tutor/post-tuition",n:"Post Tuition",i:<FileText size={18}/>},{href:"/dashboard/tutor/my-tuitions",n:"My Tuitions",i:<BookOpen size={18}/>},{href:"/dashboard/tutor/applicants",n:"Applicants",i:<Users size={18}/>}] : [{href:"/dashboard/student",n:"Overview",i:<LayoutDashboard size={18}/>},{href:"/dashboard/student/my-applications",n:"My Applications",i:<BookOpen size={18}/>},{href:"/dashboard/profile",n:"Update Profile",i:<User size={18}/>},{href:"/pricing",n:"Pro Plan",i:<CreditCard size={18}/>}];
 return <><Navbar/><div className="dashboard"><aside className="sidebar"><div style={{display:"flex",alignItems:"center",gap:8,padding:"0 8px 18px",fontWeight:800,textTransform:"capitalize"}}><GraduationCap size={20} color="var(--brand)"/>{role} dashboard</div>{links.map(l=><Link key={l.href} className={`side-link ${path===l.href?"active":""}`} href={l.href}>{l.i}<span>{l.n}</span></Link>)}<Link className="side-link" href="/dashboard/profile"><Settings size={18}/><span>Settings</span></Link></aside><main className="dashboard-main">{children}</main></div></>
}
