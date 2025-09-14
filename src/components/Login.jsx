import React from "react";

const Login = () => {
  return (
    <div>
      <h2>Iniciar Sesión</h2>
      <form>
        <div>
          <label>Email:</label>
          <input type="email" />
        </div>
        <div>
          <label>Contraseña:</label>
          <input type="password" />
        </div>
        <button>Ingresar</button>
      </form>
    </div>
  );
};

export default Login;
