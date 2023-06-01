import React, { useState } from 'react';
import Modal from 'react-modal';

export default function EmployeeTable() {

const employees = [
  {
    id: 1,
    name: 'John Doe',
    email: 'johndoe@example.com',
    phone: '123-456-7890',
    address: '123 Main St, Anytown USA',
    position: 'Manager'
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'janesmith@example.com',
    phone: '123-456-7890',
    address: '456 Elm St, Anytown USA',
    position: 'Developer'
  },
  {
    id: 3,
    name: 'Bob Johnson',
    email: 'bobjohnson@example.com',
    phone: '123-456-7890',
    address: '789 Oak St, Anytown USA',
    position: 'Designer'
  }
];
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  function handleViewClick(employee) {
    setSelectedEmployee(employee);
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
  }

  return (
    <div>
    <hr />
    <h2 className='text-center'>Employee Table</h2>

    <table className='table table-bordered table-striped'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Address</th>
            <th>Position</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {employees.map(employee => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.name}</td>
              <td>{employee.email}</td>
              <td>{employee.phone}</td>
              <td>{employee.address}</td>
              <td>{employee.position}</td>
              <td>
                <button onClick={() => handleViewClick(employee)}>View</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
      <h2 className='text-center'>Employee Details</h2>
        {selectedEmployee && (
          <div>
            
            <p>Name: {selectedEmployee.name}</p>
            <p>Email: {selectedEmployee.email}</p>
            <p>Phone: {selectedEmployee.phone}</p>
            <p>Address: {selectedEmployee.address}</p>
            <p>Position: {selectedEmployee.position}</p>
          </div>
        )}
        <button onClick={closeModal}>Close</button>
      </Modal>
    </div>
  );
}

