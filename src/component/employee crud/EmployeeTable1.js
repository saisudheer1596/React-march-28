import React from 'react';

const EmployeeTable1 = ({ employees, deleteEmployee, selectEmployee }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Position</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {employees.map((employee) => (
          <tr key={employee.id}>
            <td>{employee.id}</td>
            <td>{employee.name}</td>
            <td>{employee.email}</td>
            <td>{employee.phone}</td>
            <td>{employee.position}</td>
            <td>
              <button
                className="btn btn-primary"
                onClick={() => selectEmployee(employee)}
              >
                VIEW
              </button>
              <button
                className="btn btn-danger"
                onClick={() => deleteEmployee(employee.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default EmployeeTable1;
