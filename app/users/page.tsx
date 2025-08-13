import React from 'react'

interface User {
  id: number;
  name: string;
  email: string;
  organisation_id: number;
  organisationName?: string; // Optional field for organization name
  roles_id: number;
  roleName?: string; // Optional field for role name
}

interface Roles {
  id: number;
  name: string;
}

interface Orgs {
  id: number;
  name: string;
}

const UsersPage = async () => {

  const res = await fetch('https://iot-backend-p66k.onrender.com/users');
  const users: User[] = await res.json();
  
  const res2 = await fetch('https://iot-backend-p66k.onrender.com/roles');
  const roles: Roles[] = await res2.json();

  const res3 = await fetch('https://iot-backend-p66k.onrender.com/organisations');
  const orgs: Orgs[] = await res3.json();


  // // Combine users with their roles
  // const usersWithRoles = users.map(user => {
  //   const userRole = roles.find(role => role.id === user.roles_id);
  //   return {
  //     ...user,
  //     roleName: userRole ? userRole.name : 'Unknown Role'
  //   };
  // });

  // Combine users with their roles and organizations
  const usersWithRoles = users.map(user => {
    const userRole = roles.find(role => role.id === user.roles_id);
    const userOrg = orgs.find(org => org.id === user.organisation_id);
    return {
      ...user,
      roleName: userRole ? userRole.name : 'Unknown Role',
      organisationName: userOrg ? userOrg.name : 'Unknown Organisation'
    };
  });

  return (
    <>
      <h1>
        Users List
      </h1>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Organization</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {usersWithRoles.map(usersWithRoles => (
            <tr key={usersWithRoles.id}>
              <td>{usersWithRoles.name}</td>
              <td>{usersWithRoles.email}</td>
              <td>{usersWithRoles.organisationName}</td>
              <td>{usersWithRoles.roleName}</td>
            </tr> 
          ))}
        </tbody>
      </table>
      <p>Total Users: {usersWithRoles.length}</p>
    </>
  )
}

export default UsersPage