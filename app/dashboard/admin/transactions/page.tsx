"use client";
import { useEffect,useState } from "react";
import { api } from "../../../lib/api";
type Payment={_id:string;userName:string;userRole:string;planName:string;amount:number;transactionId:string;paidAt:string};
export default function Transactions(){const [items,setItems]=useState<Payment[]>([]);useEffect(()=>{api<Payment[]>("/admin/transactions").then(setItems).catch(()=>{})},[]);return <><div className="dashboard-top"><h1>Transaction Management</h1></div><div className="table-wrap"><table><thead><tr><th>User</th><th>Role</th><th>Plan</th><th>Amount</th><th>Transaction ID</th><th>Date</th></tr></thead><tbody>{items.map(r=><tr key={r._id}><td>{r.userName}</td><td>{r.userRole}</td><td>{r.planName}</td><td>${r.amount}</td><td>{r.transactionId}</td><td>{r.paidAt?new Date(r.paidAt).toLocaleDateString():""}</td></tr>)}</tbody></table></div></>}
