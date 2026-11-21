// "use client";
// import { useEffect,useState } from "react";
// import { toast } from "sonner";
// import { api } from "../../../lib/api";
// type Application={_id:string;tuitionTitle:string;tutorEmail:string;monthlyFee:number;appliedAt:string;status:"pending"|"accepted"|"rejected"};
// export default function MyApplications(){
//  const [items,setItems]=useState<Application[]>([]);
//  const load=()=>api<Application[]>("/dashboard/student/applications").then(setItems).catch(e=>toast.error(e.message));
//  useEffect(()=>{load()},[]);
//  async function cancel(id:string){try{await api(`/applications/${id}`,{method:"DELETE"});toast.success("Application cancelled");load()}catch(e){toast.error(e instanceof Error?e.message:"Could not cancel")}}
//  return <><div className="dashboard-top"><h1>My Applications</h1></div><div className="table-wrap"><table><thead><tr><th>Tuition</th><th>Tutor</th><th>Monthly Fee</th><th>Applied</th><th>Status</th><th></th></tr></thead><tbody>{items.map(r=><tr key={r._id}><td>{r.tuitionTitle}</td><td>{r.tutorEmail}</td><td>৳{r.monthlyFee.toLocaleString()}</td><td>{new Date(r.appliedAt).toLocaleDateString()}</td><td><span className={`status ${r.status}`}>{r.status}</span></td><td>{r.status==="pending"&&<button className="btn btn-outline" style={{padding:"7px 10px",fontSize:12}} onClick={()=>cancel(r._id)}>Cancel</button>}</td></tr>)}</tbody></table></div></>
// }
