import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import axios from "axios"

function SearchBar() {
    const [users, setUsers] = useState([])

    const onLookup = (event) => {
        event.preventDefault()

    }

    useEffect(() => {
        axios.get('http://localhost:3001/users').
        then( users => { 
            setUsers(users.data)
        })
    }, [onLookup]);

    return (
        <>
            <form className="d-flex">
                <div className="dropdown">
                    <input onInput={ (event) => { onLookup(event) } }className="form-control me-2" type="search" placeholder="Search for users" aria-label="Search"/>
                    {
                        users ?

                            <div className="dropdown-menu show">
                                { users.map((u) => <Link className="dropdown-item" to="http://localhost:3000/users/:{u.intra_id}">{ u.username }</Link>) }
                            </div>
                        
                        :
                        null
                    }
                </div>
            </form>
            
        </>
    )
}

export default SearchBar