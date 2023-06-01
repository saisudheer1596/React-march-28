import React, { useState } from 'react';

const EmployeeAdd = ({ addEmployee }) => {
  const [newEmployee, setNewEmployee] = useState({ name: '', position: '' });

  const handleInputChange = (event) => {
    setNewEmployee({
      ...newEmployee,
      [event.target.name]: event.target.value
    });
  };

  const handleAddEmployee = () => {
    addEmployee(newEmployee);
    setNewEmployee({ name: '', position: '' });
  };

  return (
    <div>
      <div className="form-group">
        <label htmlFor="idInput">ID</label>
        <input
          type="text"
          className="form-control"
          id="idInput"
          name="id"
          value={newEmployee.id}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="nameInput">Name</label>
        <input
          type="text"
          className="form-control"
          id="nameInput"
          name="name"
          value={newEmployee.name}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="emailInput">Email</label>
        <input
          type="text"
          className="form-control"
          id="emailInput"
          name="email"
          value={newEmployee.email}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="phoneInput">Phone</label>
        <input
          type="text"
          className="form-control"
          id="phoneInput"
          name="phone"
          value={newEmployee.phone}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="positionInput">Position</label>
        <input
          type="text"
          className="form-control"
          id="positionInput"
          name="position"
          value={newEmployee.position}
          onChange={handleInputChange}
        />
      </div>
      <button className="btn btn-primary" onClick={handleAddEmployee}>
        Add Employee
      </button>
    </div>
  );
};

export default EmployeeAdd;
