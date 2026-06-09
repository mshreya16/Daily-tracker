import { useEffect, useState } from "react";

import { auth, login } from "../firebase/auth";

import { onAuthStateChanged } from "firebase/auth";

export default function Login() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, setUser);

    return unsub;
  }, []);

  if (user) return null;

  return (
    <button className="add-btn" onClick={login}>
      Login with Google
    </button>
  );
}
