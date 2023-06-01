import React, { useState } from 'react';
import Modal from 'react-modal';
import SearchBar from "react-js-search";
import users from './Users.json'

export default function UserList() {
  const [filteredUsers, setFilteredUsers] =useState(users);
  const onSearchClick=(searchText)=>{
    setFilteredUsers(
        users.filter((users)=> JSON.stringify(users).includes(searchText))
    );
   };
   const onSearchTextChange =(searchText, filteredData)=>{
       setFilteredUsers(filteredData)
    }
    const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedFilteredUsers, setSelectedfilteredUsers] = useState(null);

  function handleViewClick(users) {
    setSelectedfilteredUsers(users);
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
  }  
  return <>
  <hr />
   <h2 className='text-center'> User List</h2>
   <SearchBar 
        onSearchTextChange={onSearchTextChange}
        onSearchButtonClick={onSearchClick}
        placeHolderText={"Search here..."}
        data={users}
    />

   <table className='table table-bordered table-striped'>
    <thead>
        <tr>
            <th>Id</th>
            <th>Email</th>
            <th>Username</th>
            <th>Password</th>
            <th>Phone</th>
            <th>Action</th>
        </tr>
    </thead>
    <tbody>
        {filteredUsers.map((users)=>{
            return <tr key={users.id}>
                <td>{users.id}</td>
                <td>{users.email}</td>
                <td>{users.username}</td>
                <td>{users.password}</td>
                <td>{users.phone}</td>
                <td>
                <button className="btn btn-primary" onClick={() => handleViewClick(users)}>View</button>
              </td>
            </tr>
        })}

    </tbody>
   </table>
   <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
      <h2 className='text-center'>User Details</h2>
        {selectedFilteredUsers && (
          <div>
            <p>id: {selectedFilteredUsers.id}</p>
            <p>Name: {selectedFilteredUsers.username}</p>
            <p>Email: {selectedFilteredUsers.email}</p>
            <p>Phone: {selectedFilteredUsers.phone}</p>
            <p>Password: {selectedFilteredUsers.password}</p>
          </div>
        )}
        <button onClick={closeModal}>Close</button>
    </Modal>
  </>
}
