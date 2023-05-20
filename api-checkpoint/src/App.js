import axios from 'axios'
import UserList from './UserList'
import {useEffect,useState} from 'react'
import './App.css';

function App() {
  const [users,setUsers]=useState([])
  useEffect(()=> {
      axios.get("https://jsonplaceholder.typicode.com/users").then((result)=>(setUsers(result.data)))
  },[]);
  return (
    <div className="App">
      <h1 style={{textAlign: 'center' }}> List Of Users</h1>
      <header className="App-header">
         <div className="card-container"></div>
        {users.map((users)=>(
        <UserList users={users}/>))}
        <div/>
      </header>
    </div>
  );
}

export default App;
