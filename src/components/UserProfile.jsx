import { useEffect, useState } from "react";
import { auth, logout } from "../firebase/auth";
import { onAuthStateChanged } from "firebase/auth";

export default function UserProfile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  if (!user) return null;

  return (
    <div
      className="glass-card"
      style={{
        marginBottom: "20px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "15px",
        }}
      >
        <img
          src={user.photoURL}
          alt="profile"
          width="60"
          height="60"
          style={{
            borderRadius: "50%",
          }}
        />

        <div>
          <h3>{user.displayName}</h3>

          <p>{user.email}</p>
        </div>
      </div>

      <button
        className="delete-btn"
        style={{
          marginTop: "15px",
        }}
        onClick={logout}
      >
        Logout
      </button>
    </div>
  );
}
