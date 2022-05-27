import { User } from "../interfaces/reqRes";
import { useUsers } from "../hooks/useUsers";

export const Usuarios = () => {
  const { users, nextPage, previousPage } = useUsers();
  const renderItem = ({ id, avatar, first_name, email }: User) => {
    return (
      <tr key={id.toString()}>
        <td>
          <img src={avatar} alt="" style={{ width: 35, borderRadius: 100 }} />
        </td>
        <td>{first_name}</td>
        <td>{email}</td>
      </tr>
    );
  };
  return (
    <>
      <h3>Usuarios</h3>
      <table className="table">
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Nombre</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>{users.map(renderItem)}</tbody>
      </table>
      <button onClick={previousPage} className="btn btn-primary">
        Anteriores
      </button>
      &nbsp;
      <button onClick={nextPage} className="btn btn-primary">
        Siguientes
      </button>
    </>
  );
};
