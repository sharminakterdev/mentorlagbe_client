"use client";
import { createContext,useContext,useEffect,useState } from "react";
import { api } from "./api";

export type AuthUser={_id:string;name:string;email:string;role:"student"|"tutor"|"admin";plan:"free"|"pro";image?:string;phone?:string;bio?:string};
type Auth={user:AuthUser|null;loading:boolean;signIn:(email:string,password:string)=>Promise<AuthUser>;signUp:(name:string,email:string,password:string,role:"student"|"tutor")=>Promise<AuthUser>;signOut:()=>void;refresh:()=>Promise<void>};
const Context = createContext<Auth | null>(null);
export function AuthProvider({children}:{children:React.ReactNode}){
 const [user,setUser]=useState<AuthUser|null>(null);const [loading,setLoading]=useState(true);
 async function refresh(){try{const token=localStorage.getItem("mentorlagbe_token");if(!token){setUser(null);return;}setUser(await api<AuthUser>("/me"))}catch{localStorage.removeItem("mentorlagbe_token");setUser(null)}}
 useEffect(()=>{refresh().finally(()=>setLoading(false))},[]);
 async function signIn(email:string,password:string){const data=await api<{token:string,user:AuthUser}>("/auth/sign-in",{method:"POST",body:JSON.stringify({email,password})});localStorage.setItem("mentorlagbe_token",data.token);setUser(data.user);return data.user}
 async function signUp(name:string,email:string,password:string,role:"student"|"tutor"){const data=await api<{token:string,user:AuthUser}>("/auth/sign-up",{method:"POST",body:JSON.stringify({name,email,password,role})});localStorage.setItem("mentorlagbe_token",data.token);setUser(data.user);return data.user}
 function signOut(){localStorage.removeItem("mentorlagbe_token");setUser(null)}
 return <Context.Provider value={{user,loading,signIn,signUp,signOut,refresh}}>{children}</Context.Provider>
}
export function useAuth(){const value=useContext(Context);if(!value)throw new Error("useAuth must be used inside AuthProvider");return value}
