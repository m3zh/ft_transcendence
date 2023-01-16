import { useEffect, useState, FC } from "react"
import { Link } from "react-router-dom"
import axios from "axios"

const SearchBar: FC = () => {
    const [users, setUsers] = useState([])
    const [searchkey,setSearchkey] = useState("")

    useEffect(() => {
        axios.get('http://localhost:3001/users').then( users => { 
            setUsers(users.data.filter((u) => u.username.startsWith(searchkey)))
        })
    }, [searchkey]);

    return (
        <>
            <form className="d-flex">
                <div className="dropdown">
                    <input onInput={ (e) => { setSearchkey(e.currentTarget.value) } } className="form-control me-2 align-self-center" type="search" placeholder="Search for users" aria-label="Search"/>
                    {
                        searchkey && searchkey.length &&

                            <div className="dropdown-menu w-100 show">
                                { 
                                    users.length ?
                                    users.map((u) => <Link key={u["intra_id"]} className="dropdown-item" to={`/users/${u["intra_id"]}`}>{ u["username"] }</Link>) 
                                :
                                    <Link to="*" className="dropdown-item disabled">No match</Link>
                                }
                            </div>

                    }
                </div>
            </form>
            
        </>
    )
}

export default SearchBar