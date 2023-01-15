import axios from 'axios';
import React from 'react'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'

function Card({ title }) {
  const [users, setUsers] = useState([])
  const status = new Map()
  status.set("online", "bg-primary")
  status.set("offline", "bg-danger")
  status.set("in a game", "bg-warning")

  function sortByScore(users) {
    const ranked = users.slice(0);
    ranked.sort(function(a,b) {
      return b.max_score - a.max_score;
    })
    return ranked;
  }

  useEffect(() => {
    axios.get('http://localhost:3001/users').then( users => { 
        if (title === 'Ranking') {
          let ranked = sortByScore(users.data)
          console.log(ranked)
          setUsers(ranked)
        }
        else
          setUsers(users.data)
      })
  }, [users, title]);

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
                      <Link style={{ color: 'black' }} className="card-title" to={`/users/${u["intra_id"]}`}>{ u["username"] }
                        { 
                          title == 'Ranking' ?
                            <span className={`badge float-end ${status.get(u["status"])}`}>{u["max_score"]} points</span>
                          :
                            <span className={`badge float-end ${status.get(u["status"])}`}>{u["status"]}</span>
                        }
                      </Link>
                    </div>)
              }
            </div>
          </div>
        </div>
      </>
  )
}

export default Card