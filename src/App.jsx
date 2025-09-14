import React, { useState } from "react";
import Login from "./components/Login";
import BandejaUsuarios from "./components/BandejaUsuarios";

function App() {
  const [user, setUser] = useState(null);

  return (
    <div>
      {!user ? (
        <Login onLogin={setUser} />
      ) : (
        <BandejaUsuarios />
      )}
    </div>
  )
}

export default App;
