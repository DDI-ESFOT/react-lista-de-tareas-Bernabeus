import React from "react";

const UserList = () => {
  const initialUsers = () => {
    console.log("inicializando estado");
    return [
      {
        name: "Chalo",
        lastname: "Salvador",
      },
      {
        name: "María",
        lastname: "Morales",
      },
      {
        name: "Andrés",
        lastname: "Andrade",
      },
    ];
  };

  function formatName(user) {
    return `${user.name} ${user.lastname}`;
  }

  const [users, setUsers] = React.useState(initialUsers);

  const handleAddUser = () => {
    const name = document.querySelector("#name").value;
    const lastname = document.querySelector("#lastname").value;
    const newUser = {
      name,
      lastname,
    };
    setUsers((prevState) => {
      return [...prevState, newUser];
    });
    document.querySelector("#name").value = "";
    document.querySelector("#lastname").value = "";
  };

  return (
    <div>
      <div>
        <h1>Lista de usuarios ({users.length} en total)</h1>
        <input type="text" id="name" placeholder="Ingrese el nombre" />
        <input type="text" id="lastname" placeholder="Ingrese el apellido" />
        <button onClick={handleAddUser}>Agregar usuario</button>
      </div>
      <ul>
        {users.map((user, index) => {
            return <li key={index}>
            {formatName(user)}
          </li>;
        })}
      </ul>
    </div>
  );
};

export default UserList;
