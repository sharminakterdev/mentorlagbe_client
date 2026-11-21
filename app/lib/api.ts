// export const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

// export async function api<T>(path:string,options:RequestInit={}) {
//   const token=typeof window!=="undefined" ? localStorage.getItem("mentorlagbe_token") : null;
//   const response=await fetch(`${API_URL}${path}`,{
//     ...options,
//     headers:{ "Content-Type":"application/json", ...(token?{Authorization:`Bearer ${token}`}:{}), ...options.headers },
//   });
//   const data=await response.json().catch(()=>({message:"Request failed"}));
//   if(!response.ok) throw new Error(data.detail ? `${data.message}: ${data.detail}` : data.message||"Request failed");
//   return data as T;
// }
