import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EmployeeCrud2 = () => {
  const [employees, setEmployees] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      const response = await axios.get('http://localhost:4000/employees');
      setEmployees(response.data);
    } catch (error) {
      console.error('Error fetching employees:', error);
    }
  };

  const addEmployee = async (employee) => {
    try {
      await axios.post('http://localhost:4000/employees', employee);
      setMessage('*Employee added successfully!');
      fetchEmployees();
    } catch (error) {
      console.error('Error adding employee:', error);
    }
  };

  const updateEmployee = async (employee) => {
    try {
      await axios.put(`http://localhost:4000/employees/${employee.id}`, employee);
      setMessage('*Employee updated successfully!');
      fetchEmployees();
    } catch (error) {
      console.error('Error updating employee:', error);
    }
  };

  const deleteEmployee = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/employees/${id}`);
      setMessage('*Employee deleted successfully!');
      fetchEmployees();
    } catch (error) {
      console.error('Error deleting employee:', error);
    }
  };

  const handleAddEmployee = (employee) => {
    addEmployee(employee);
  };

  const handleUpdateEmployee = (employee) => {
    updateEmployee(employee);
  };

  const handleDeleteEmployee = (id) => {
    deleteEmployee(id);
  };

  const selectEmployee = (employee) => {
    setSelectedEmployee(employee);
  };

  return (
    <div>
      <hr />
      <h1 className='text-center'style={{ backgroundColor: 'white', color: 'red' }}>EMPLOYEE CRUD</h1>
      <hr />
      <div className="container">
      <div className='row'>
        <div className='col-md-12'>
         <h2 className='text-center'style={{ backgroundColor: 'purple', color: 'lightyellow' }}>Employee Table</h2>
            <EmployeeTable employees={employees} selectEmployee={selectEmployee} />
        </div>    
      </div>
      </div>
      <hr />
      <div className='container'>
      <div className='row'>
        <div className='col-md-3'>
          <h3 className='text-center'>Employee Form</h3>
            <EmployeeForm
              selectedEmployee={selectedEmployee}
              addEmployee={handleAddEmployee}
              updateEmployee={handleUpdateEmployee}
              deleteEmployee={handleDeleteEmployee}
            />
        </div>
      </div>
      </div>
      <hr />
      {message && <p className='text-center' style={{ fontSize: '55px'}}>{message}</p>}
    </div>
  );
};

const EmployeeTable = ({ employees, selectEmployee }) => {
  return (
    <table className="table table-bordered table-striped" fontSize="25px" style={{ backgroundColor: 'lightyellow', color: 'purple' }}>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Salary($)</th>
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
            <td>{employee.salary}</td>
            <td>{employee.phone}</td>
            <td>{employee.position}</td>
            <td>
              <button
                className="btn btn-primary"
                onClick={() => selectEmployee(employee)}
              >
                VIEW
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const EmployeeForm = ({ selectedEmployee, addEmployee, updateEmployee, deleteEmployee }) => {
  const [employee, setEmployee] = useState({ name: '', position: '' });

  useEffect(() => {
    if (selectedEmployee) {
      setEmployee(selectedEmployee);
    } else {
      setEmployee({ name: '', position: '' });
    }
  }, [selectedEmployee]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEmployee((prevEmployee) => ({ ...prevEmployee, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (selectedEmployee) {
      updateEmployee(employee);
    } else {
      addEmployee(employee);
    }
    setEmployee({ name: '', position: '' });
  };

  const handleDelete = () => {
    if (selectedEmployee) {
      deleteEmployee(selectedEmployee.id);
      setEmployee({ name: '', position: '' });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Id: 
        <input type="text" className="form-control" name="id" value={employee.id} onChange={handleInputChange} />
      </label>
      <br />
      <label>
        Name: 
        <input type="text" className="form-control" name="name" value={employee.name} onChange={handleInputChange} />
      </label>
      <br />
      <label>
        Email: 
        <input type="text" className="form-control" name="email" value={employee.email} onChange={handleInputChange} />
      </label>
      <br />
      <label>
        Salary: $
        <input type="text" className="form-control" name="salary" value={employee.salary} onChange={handleInputChange} />
      </label>
      <br />
      <label>
        Phone:
        <input type="text" className="form-control" name="phone" value={employee.phone} onChange={handleInputChange} />
      </label>
      <br />
      <label>
        Position:
        <input type="text" className="form-control" name="position" value={employee.position} onChange={handleInputChange} />
      </label>
      <br />
      <button 
        className='btn btn-primary'
        type="submit"
      >
        {selectedEmployee ? 'Update' : 'Add'}
      </button>
      {selectedEmployee && 
      <button
      className='btn btn-danger' 
      type="button" 
      onClick={handleDelete}
      >
        Delete
      </button>}
    </form>
  );
};

export default EmployeeCrud2;
