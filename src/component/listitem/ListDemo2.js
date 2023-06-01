import React, {useState} from 'react';
import Modal from "react-modal"

export default function ListDemo2() {
    let employees = [
        { eId: 101, name: "sanjay", sal: 5000 ,},
        { eId: 102, name: "sai", sal: 8000},
        { eId: 103, name: "deepak", sal: 6000},
        { eId: 104, name: "sameer", sal: 4000},
        { eId: 105, name: "rajesh", sal: 7000},
        { eId: 106, name: "charan", sal: 9000},
    ];
    let [modalIsOpen, setIsOpen] = useState(false);
    let [selectedEmployees, setSelectedEmployees] = useState({});
    function openModal(emp) {
        setSelectedEmployees(emp);
        setIsOpen(true);
      }
    function closeModal() {
        setIsOpen(false);
      }
    return <>
    <hr />
    <h2 className='text-center'>Employee List</h2>

    <table className='table table-bordered table-striped'>
        <thead>
            <tr>
                {Object.keys(employees[0]).map((col,i)=><th key={i}>{col}</th>)}
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {employees.map((emp)=>{
                return <tr key={emp.eId}>
                    <td>{emp.eId}</td>
                    <td>{emp.name}</td>
                    <td>{emp.sal}</td>
                    <td>
                    <button className='btn btn-primary' onClick={() =>{openModal(emp)}}>View</button>
                    </td>
                </tr>
            })}
        </tbody>
    </table>
    <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
      >
        <h2 className='text-center'>Employee Details</h2>
        {selectedEmployees && (
            <div>
                <p>eId: {selectedEmployees.eId}</p>
                <p>name: {selectedEmployees.name}</p>
                <p>sal: {selectedEmployees.sal}</p>
            </div>
        )}
        <button onClick={closeModal}>close</button>
      </Modal>
    </>
}
