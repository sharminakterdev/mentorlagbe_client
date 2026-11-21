"use client";
import { useEffect,useState } from "react";
import { toast } from "sonner";
import { api } from "../../../lib/api";
type User={_id:string;name:string;email:string;role:string;plan:string};
export default function Users(){const [items,setItems]=useState<User[]>([]);const load=()=>api<User[]>("/admin/users").then(setItems).catch(e=>toast.error(e.message));useEffect(()=>{load()},[]);async function change(id:string,role:string){try{await api(`/admin/users/${id}/role`,{method:"PATCH",body:JSON.stringify({role})});toast.success("User role updated");load()}catch(e){toast.error(e instanceof Error?e.message:"Failed")}}return <><div className="dashboard-top"><h1>User Management</h1></div><div className="table-wrap"><table><thead><tr><th>Name</th><th>Email</th><th>Role</th><th>Plan</th><th>Action</th></tr></thead><tbody>{items.map(r=><tr key={r._id}><td>{r.name}</td><td>{r.email}</td><td>{r.role}</td><td>{r.plan}</td><td><select style={{border:"1px solid var(--line)",borderRadius:8,padding:"7px"}} defaultValue={r.role} onChange={e=>change(r._id,e.target.value)}><option>student</option><option>tutor</option><option>admin</option></select></td></tr>)}</tbody></table></div></>}
