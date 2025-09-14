import React from "react";

const BandejaUsuarios = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Bandeja de Usuarios</h2>
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Email</th>
            <th>Rol</th>
          </tr>
        </thead>
        <tbody>
        </tbody>
      </table>
    </div>
  );
};

export default BandejaUsuarios;
