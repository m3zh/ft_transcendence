import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';

function Card({ title }) {
  const [users, setUsers] = useState([])
  console.log(users)
  const [currStatus, setCurrStatus] = useState("")
  let   status = {
    online : "bg-success",
    offline : "bg-danger",
    InAgame : "bg-warning",
  }

  useEffect(() => {
    axios.get('http://localhost:3001/users').
      then( users => { 
        setUsers(users.data)
        setCurrStatus(users.data.status)
      })
  }, [users]);

  return (
      <>
        <div className="col mx-4 h-100 justify-content-center">
          <div className="card h-100 border-light mb-3 w-100">
            <div className="card-header">
                <h5>{ title }</h5>
            </div>
            <div className="card-body">
              { 
                users && users.map((u) =>
                    <div key={ u["uid"] } className="card-body">
                      <p className="card-title">{ u["username"] }
                      <span className="badge ${status.currStatus}">{u["status"]}</span></p>
                    </div>)
              }
            </div>
          </div>
        </div>
      </>
  )
}

export default Card