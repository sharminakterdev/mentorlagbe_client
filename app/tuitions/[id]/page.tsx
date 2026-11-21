

// "use client";

// import { useEffect, useState } from "react";
// import { useParams, useRouter } from "next/navigation";
// import { toast } from "sonner";
// import { Navbar, Footer } from "../../components";
// import { api } from "../../lib/api";
// import { useAuth } from "../../lib/auth";

// type Item = {
//   _id: string;
//   title: string;
//   subject: string;
//   classLevel: string;
//   mode: string;
//   location: string;
//   monthlyFee: number;
//   daysPerWeek: number;
//   tutorName: string;
//   tutorEmail: string;
//   bannerImage: string;
//   description: string;
// };

// export default function TuitionDetails() {
//   const params = useParams();
//   const router = useRouter();
//   const { user } = useAuth();

//   const [item, setItem] = useState<Item | null>(null);

//   useEffect(() => {
//     api<Item>(`/tuitions/${params.id}`)
//       .then(setItem)
//       .catch((e) => toast.error(e.message));
//   }, [params.id]);

//   async function apply(e: React.FormEvent<HTMLFormElement>) {
//     e.preventDefault();

//     if (!user) {
//       router.push("/sign-in");
//       return;
//     }

//     const form = new FormData(e.currentTarget);

//     try {
//       await api("/applications", {
//         method: "POST",
//         body: JSON.stringify({
//           tuitionId: params.id,
//           studentPhone: form.get("phone"),
//           preferredSchedule: form.get("schedule"),
//           studentNote: form.get("note"),
//         }),
//       });

//       toast.success("Application submitted successfully");
//     } catch (error) {
//       toast.error(
//         error instanceof Error ? error.message : "Application failed"
//       );
//     }
//   }

//   if (!item) {
//     return (
//       <>
//         <Navbar />

//         <main
//           style={{
//             minHeight: "60vh",
//             display: "grid",
//             placeItems: "center",
//           }}
//         >
//           Loading tuition...
//         </main>

//         <Footer />
//       </>
//     );
//   }

//   return (
//     <>
//       <Navbar />

//       <main
//         className="container"
//         style={{ paddingTop: 45, paddingBottom: 80 }}
//       >
//         <div className="detail-grid">
//           <div>
//             <img
//               className="detail-banner"
//               src={item.bannerImage}
//               alt={item.title}
//             />

//             <p className="eyebrow" style={{ marginTop: 28 }}>
//               {item.subject}
//             </p>

//             <h1 style={{ fontSize: 42, margin: "8px 0" }}>
//               {item.title}
//             </h1>

//             <p style={{ color: "#667480", lineHeight: 1.8 }}>
//               {item.description}
//             </p>

//             <h3>What you will learn</h3>

//             <ul style={{ color: "#667480", lineHeight: 2 }}>
//               <li>Personalized lesson plans and focused guidance</li>
//               <li>Regular exercises, feedback and progress review</li>
//               <li>Exam and practical application support</li>
//             </ul>

//             <h3>About the tutor</h3>

//             <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
//               <div
//                 style={{
//                   width: 60,
//                   height: 60,
//                   borderRadius: "50%",
//                   background: "var(--lime)",
//                   display: "grid",
//                   placeItems: "center",
//                   fontWeight: 800,
//                 }}
//               >
//                 {item.tutorName.charAt(0)}
//               </div>

//               <div>
//                 <strong>{item.tutorName}</strong>

//                 <p style={{ margin: "4px 0", color: "#72808a" }}>
//                   {item.tutorEmail}
//                 </p>
//               </div>
//             </div>
//           </div>

//           <aside className="detail-card">
//             <h3>Tuition details</h3>

//             <p>
//               <strong>Class:</strong> {item.classLevel}
//             </p>

//             <p>
//               <strong>Mode:</strong> {item.mode}
//             </p>

//             <p>
//               <strong>Location:</strong> {item.location}
//             </p>

//             <p>
//               <strong>Schedule:</strong> {item.daysPerWeek} days/week
//             </p>

//             <h2 style={{ color: "var(--brand)" }}>
//               ৳{item.monthlyFee.toLocaleString()}{" "}
//               <small>/ month</small>
//             </h2>

//             {user?.role === "student" ? (
//               <form onSubmit={apply}>
//                 <div className="field">
//                   <label>Phone number</label>
//                   <input
//                     name="phone"
//                     required
//                     placeholder="+880 1..."
//                   />
//                 </div>

//                 <div className="field">
//                   <label>Preferred schedule</label>
//                   <input
//                     name="schedule"
//                     required
//                     placeholder="e.g. Sat, Mon 7 PM"
//                   />
//                 </div>

//                 <div className="field">
//                   <label>Learning note</label>
//                   <textarea
//                     name="note"
//                     required
//                     placeholder="Tell the tutor what you need..."
//                   />
//                 </div>

//                 <button
//                   className="btn btn-primary"
//                   style={{ width: "100%" }}
//                 >
//                   Apply for Tuition
//                 </button>
//               </form>
//             ) : (
//               <div
//                 style={{
//                   padding: 15,
//                   background: "#fff4cf",
//                   borderRadius: 10,
//                   color: "#7d641c",
//                 }}
//               >
//                 {user
//                   ? "Application access is available to students only."
//                   : "Please sign in as a student to apply."}
//               </div>
//             )}
//           </aside>
//         </div>
//       </main>

//       <Footer />
//     </>
//   );
// }
