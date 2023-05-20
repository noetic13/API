import React from 'react'
import './App.css'

const UserList = ({users}) => {
  return (
    
    <div className="card-container">
    <div className='card'>
      <h2> Name : {users.name}</h2>
      <h2> UserName : {users.username}</h2>
      <h2> Email : {users.email}</h2>
      <h4> Street : {users.address.street}</h4>
      <h4> Address : {users.address.suite}</h4>
      <h4> City : {users.address.city}</h4>
      <h4> Zipcode : {users.address.zipcode}</h4>
      <h4> Phone : {users.phone}</h4>
      <h4> Website : {users.website}</h4>
      <h4> Company : {users.company.name}</h4>
    </div>
    </div>
  
    
  )
}

export default UserList
