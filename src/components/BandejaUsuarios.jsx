import React from "react";

const usuariosSimulados = [
  { id: 1, nombre: "Ana Perez", email: "ana@example.com", rol: "cliente" },
  { id: 2, nombre: "Luis Gomez", email: "luis@example.com", rol: "administrador" },
  { id: 3, nombre: "Carla Ruiz", email: "carla@example.com", rol: "cliente" },
];

const BandejaUsuarios = () => {
    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        setUsuarios(usuariosSimulados);
    }, []);

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
            {usuarios.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.nombre}</td>
              <td>{user.email}</td>
              <td>{user.rol}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BandejaUsuarios;
