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
const EmployeeCrud1 = () => {
  const [employees, setEmployees] = useState(employee);
  const [setSelectedEmployee] = useState(employee);
  const [displayMode, setDisplayMode] = useState('table');

  const addEmployee = (employee) => {
    setEmployees([...employees, employee]);
  };

  const deleteEmployee = (id) => {
    setEmployees(employees.filter((employee) => employee.id !== id));
  };

  const selectEmployee = (employee) => {
    setSelectedEmployee(employee);
  };
  const updateEmployee = (updatedEmployee) => {
    setEmployees(
      employees.map((employee) =>
        employee.id === updatedEmployee.id ? updatedEmployee : employee
      )
    );
    setSelectedEmployee(null);
  };

  const toggleDisplayMode = () => {
    setDisplayMode((prevMode) => (prevMode === 'table' ? 'card' : 'table'));
  };

  return (
    <div>
      <h1 className='text-center'>Employee CRUD</h1>
      <button
        className='btn btn-primary '
        onClick={toggleDisplayMode}
      >
        {displayMode === 'table' ? 'Card' : 'Table'}
      </button>
      {displayMode === 'table' ? (
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
      ) : (
        <div className="container">
          <h2 className='text-center'>Employee Card</h2>
          <div className="row">
            {employees.map((employee)=>{
              return (
                <div className="col-sm-9">
                  
                  <EmployeeCard
                    employee={employee}
                    updateEmployee={updateEmployee}
                    deleteEmployee={deleteEmployee}
                  />
                  
                </div>
              )
            })}
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

export default EmployeeCrud1;
