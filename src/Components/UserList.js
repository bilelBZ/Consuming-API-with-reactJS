import React,{useEffect,useState} from 'react'
import CardList from './CardList'

const UserList = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {
       fetch('https://jsonplaceholder.typicode.com/users')
       .then((response) =>response.json())
       .then((json)=>setUsers(json))
       .catch((err)=>console.log(err))
    }, [])
    return (
        <div className="container">
            {
                users.map(user=><CardList user={user} key={user.id}/>)
            }
        </div>
    )
}

export default UserList
