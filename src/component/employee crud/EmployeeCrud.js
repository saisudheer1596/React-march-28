import React, { useState } from 'react';
import EmployeeTable from './EmployeeTable1';
import EmployeeCard from './EmployeeCard';
import EmployeeAdd from './EmployeeAdd';

const employee = [
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
const EmployeeCrud = () => {
  const [employees, setEmployees] = useState(employee);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [showTable, setShowTable] = useState(false);
  const [showCard, setShowCard] = useState(false);

  // Function to add a new employee
  const addEmployee = (employee) => {
    setEmployees([...employees, employee]);
  };

  // Function to delete an employee
  const deleteEmployee = (id) => {
    setEmployees(employees.filter((employee) => employee.id !== id));
  };

  // Function to select an employee
  const selectEmployee = (employee) => {
    setSelectedEmployee(employee);
  };

  // Function to update an employee
  const updateEmployee = (updatedEmployee) => {
    setEmployees(
      employees.map((employee) =>
        employee.id === updatedEmployee.id ? updatedEmployee : employee
      )
    );
    setSelectedEmployee(null);
  };

  return (
    <div>
      <h1 className='text-center'>EMPLOYEE CRUD</h1>
      <div>
        <button
          
          className="btn btn-primary"
          onClick={() => setShowTable(!showTable)}
        >
          Employee Table
        </button>
        <button
          className="btn btn-primary"
          onClick={() => setShowCard(!showCard)}
        >
          Employee Card
        </button>
      </div>
      {showTable && (
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h2 className='text-center'>Employee Table</h2>
              <EmployeeTable
                employees={employees}
                deleteEmployee={deleteEmployee}
                selectEmployee={selectEmployee}
              />
            </div>
          </div>
        </div>
      )}
      {showCard && (
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h2 className='text-center'>Employee Card</h2>
              {selectedEmployee ? (
                <EmployeeCard
                  employee={selectedEmployee}
                  updateEmployee={updateEmployee}
                  deleteEmployee={deleteEmployee}
                  deselectEmployee={() => setSelectedEmployee(null)}
                />
              ) : (
                <p>No employee selected</p>
              )}
            </div>
          </div>
        </div>
      )}
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h2 className='text-center'>Add Employee</h2>
            <EmployeeAdd addEmployee={addEmployee} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeCrud;
