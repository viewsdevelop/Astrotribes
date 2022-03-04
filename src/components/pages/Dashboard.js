import React from 'react'
import { getAuth } from "firebase/auth";

function Dashboard() {
  const auth = getAuth();
  const user = auth.currentUser;
  
  if (user !== null) {
    const displayName = user.displayName;
    const email = user.email;
    const photoURL = user.photoURL;
    const emailVerified = user.emailVerified;
    const uid = user.uid;
  }
    return (
      <div>Dashboard</div>
    )
}

export default Dashboard