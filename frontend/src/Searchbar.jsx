import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import axios from "axios"

function SearchBar() {
    const [users, setUsers] = useState([])
    const [searchkey,setSearchkey] = useState(null)

    useEffect(() => {
        axios.get('http://localhost:3001/users').
        then( users => { 
            setUsers(users.data.filter((u) => u.username.startsWith(searchkey)))
        })
        console.log("searchkey")
        console.log(searchkey)
        console.log(users)
    }, [searchkey]);

    return (
        <>
            <form className="d-flex">
                <div className="dropdown">
                    <input onInput={ (e) => { setSearchkey(e.target.value) } } className="form-control me-2" type="search" placeholder="Search for users" aria-label="Search"/>
                    {
                        searchkey &&

                            <div className="dropdown-menu show">
                                { 
                                    users.length ?
                                    users.map((u) => <Link className="dropdown-item" to="/users/:u.intra_id">{ u.username }</Link>) 
                                :
                                    <Link className="dropdown-item disabled">No match</Link>
                                }
                            </div>

                    }
                </div>
            </form>
            
        </>
    )
}

export default SearchBar