import React, { useState, useEffect } from "react";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage, setUsersPerPage] = useState(5);

  useEffect(() => {
    const mockUsers = [
      { id: 1, name: "John Doe", email: "john@example.com", role: "Admin" },
      { id: 2, name: "Jane Smith", email: "jane@example.com", role: "User" },
      { id: 3, name: "Bob Johnson", email: "bob@example.com", role: "User" },
      { id: 4, name: "Alice Brown", email: "alice@example.com", role: "User" },
      {
        id: 5,
        name: "Charlie Green",
        email: "charlie@example.com",
        role: "User",
      },
      { id: 6, name: "David White", email: "david@example.com", role: "User" },
      { id: 7, name: "Emma Black", email: "emma@example.com", role: "User" },
      { id: 8, name: "Frank Grey", email: "frank@example.com", role: "User" },
      { id: 9, name: "Grace Red", email: "grace@example.com", role: "User" },
      {
        id: 10,
        name: "Henry Yellow",
        email: "henry@example.com",
        role: "User",
      },
    ];
    setUsers(mockUsers);
  }, []);

  // Get current users
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Handle change in users per page
  const handleChangePerPage = (e) => {
    setCurrentPage(1); // Reset to first page when changing users per page
    setUsersPerPage(parseInt(e.target.value, 10));
  };

  return (
    <div className="max-w-4xl mx-auto mt-8 p-8 bg-gray-100 rounded shadow-lg">
      <h2 className="text-xl font-semibold mb-4">User List</h2>
      <div className="mb-4 flex items-center">
        <label htmlFor="perPage">Entries per page:</label>
        <select
          id="perPage"
          value={usersPerPage}
          onChange={handleChangePerPage}
          className="ml-2 border rounded px-2 py-1"
        >
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={20}>20</option>
        </select>
      </div>
      <table className="w-full text-left">
        <thead>
          <tr>
            <th className="border-b-2 px-4 py-2">Name</th>
            <th className="border-b-2 px-4 py-2">Email</th>
            <th className="border-b-2 px-4 py-2">Role</th>
          </tr>
        </thead>
        <tbody>
          {currentUsers.map((user) => (
            <tr key={user.id}>
              <td className="border-b px-4 py-2">{user.name}</td>
              <td className="border-b px-4 py-2">{user.email}</td>
              <td className="border-b px-4 py-2">{user.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-between mt-4">
        <button
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200"
        >
          Previous
        </button>
        <div>
          Page {currentPage} of {Math.ceil(users.length / usersPerPage)}
        </div>
        <button
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage === Math.ceil(users.length / usersPerPage)}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default UserList;
