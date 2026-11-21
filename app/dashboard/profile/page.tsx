
"use client";

import { useEffect, useState } from "react";
import { toast } from "sonner";
import { api } from "../../lib/api";
import { useAuth } from "../../lib/auth";

export default function Profile() {
  const { user, refresh } = useAuth();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [bio, setBio] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    if (user) {
      setName(user.name || "");
      setPhone(user.phone || "");
      setBio(user.bio || "");
      setImage(user.image || "");
    }
  }, [user]);

  async function upload(file?: File) {
    if (!file) return;

    const reader = new FileReader();

    reader.onload = async () => {
      try {
        const base64 = String(reader.result).split(",")[1];

        const data = await api<{ url: string }>("/upload/image", {
          method: "POST",
          body: JSON.stringify({ image: base64 }),
        });

        setImage(data.url);
        toast.success("Image uploaded");
      } catch (e) {
        toast.error(e instanceof Error ? e.message : "Upload failed");
      }
    };

    reader.readAsDataURL(file);
  }

  async function save(e: React.FormEvent) {
    e.preventDefault();

    try {
      await api("/profile", {
        method: "PATCH",
        body: JSON.stringify({ name, phone, bio, image }),
      });

      await refresh();
      toast.success("Profile updated successfully");
    } catch (e) {
      toast.error(
        e instanceof Error ? e.message : "Could not update profile"
      );
    }
  }

  return (
    <>
      <div className="dashboard-top">
        <h1>Update Profile</h1>
      </div>

      <form onSubmit={save} style={{ maxWidth: 650 }}>
        <div
          className="dash-card"
          style={{
            marginBottom: 16,
            display: "flex",
            alignItems: "center",
            gap: 16,
          }}
        >
          {image ? (
            <img
              src={image}
              alt="Profile"
              style={{
                width: 72,
                height: 72,
                borderRadius: "50%",
                objectFit: "cover",
              }}
            />
          ) : (
            <div
              style={{
                width: 72,
                height: 72,
                borderRadius: "50%",
                background: "#dff4a4",
                display: "grid",
                placeItems: "center",
                fontSize: 28,
                fontWeight: 800,
              }}
            >
              {name.charAt(0) || "U"}
            </div>
          )}

          <div>
            <strong>Profile picture</strong>

            <div style={{ marginTop: 8 }}>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => upload(e.target.files?.[0])}
              />
            </div>
          </div>
        </div>

        <div className="dash-card">
          <div className="field">
            <label>Full name</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="field">
            <label>Phone</label>
            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          <div className="field">
            <label>Bio</label>
            <textarea
              value={bio}
              onChange={(e) => setBio(e.target.value)}
            />
          </div>

          <button className="btn btn-primary">
            Save Changes
          </button>
        </div>
      </form>
    </>
  );
}

