import React, { useState } from 'react';

const EmployeeCard = ({ employee, updateEmployee }) => {
  const [editedEmployee, setEditedEmployee] = useState(employee);
  const [isEditing, setIsEditing] = useState(false);

  const handleInputChange = (event) => {
    setEditedEmployee({
      ...editedEmployee,
      [event.target.name]: event.target.value
    });
  };

  const handleUpdateEmployee = () => {
    updateEmployee(editedEmployee);
    setIsEditing(false);
  };

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div className='col-sm-4'>
    <div className="card">
      <div className="card-body">
        {!isEditing ? (
          <>
            <h5 className="card-title">Id: {employee.id}</h5>
            <p className="card-text">Name: {employee.name}</p>
            <p className="card-text">Email: {employee.email}</p>
            <p className="card-text">Phone: {employee.phone}</p>
            <p className="card-text">Position: {employee.position}</p>
            <button className="btn btn-primary" onClick={toggleEdit}>
              Edit
            </button>
          </>
        ) : (
          <>
            <div className="form-group">
              <label htmlFor="idInput">id</label>
              <input
                type="text"
                className="form-control"
                id="idInput"
                name="id"
                value={editedEmployee.id}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="nameInput">name</label>
              <input
                type="text"
                className="form-control"
                id="nameInput"
                name="name"
                value={editedEmployee.name}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="emailInput">email</label>
              <input
                type="text"
                className="form-control"
                id="emailInput"
                name="email"
                value={editedEmployee.email}
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
                value={editedEmployee.phone}
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
                value={editedEmployee.position}
                onChange={handleInputChange}
              />
            </div>
            <button className="btn btn-success" onClick={handleUpdateEmployee}>
              Update
            </button>
            <button className="btn btn-secondary" onClick={toggleEdit}>
              Cancel
            </button>
          </>
        )}
      </div>
    </div>
    </div>
  );
};

export default EmployeeCard;
