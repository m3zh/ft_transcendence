import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';

function Card({ title }) {
  const [users, setUsers] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3001/users').
      then( users => { 
        setUsers(users.data)
      })
  }, [users]);

  return (
      <>
        <div className="col h-100">
          <div className="card h-100 border-light mb-3" style={{ maxWidth: "18rem"}}>
            <div className="card-header">
                <h5>{ title }</h5>
            </div>
            <div className="card-body">
              { 
                users && users.map((u) =>
                    <div class="card-body">
                      <p class="card-title">{ u.username }</p>
                    </div>)
              }
            </div>
          </div>
        </div>
      </>
  )
}

export default Card