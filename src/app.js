import React, {useState} from "react"
import Users from './components/users'
import SearchStatus from './components/searchStatus'
import api from './api'

const App = () => {

    const [users, setUsers] = useState(api.users.fetchAll())

    const handleDelete = (userId) => {       
        const usersUpdate = users.filter((item) => item._id !== userId)
        setUsers(usersUpdate)
    }    

    const handleToggleBookmark = (userId) => {
        let result = users.map((item) => {
            if (item._id === userId) {
                return {...item, bookmark: !item.bookmark} 
            }
            return item
        })        
        setUsers(result)
    }

    return <>
        {SearchStatus(users.length)}
        
        {users.length > 0 ?  
            <table className="table"> 
                <thead>
                    <tr>
                        <th scope="col">Имя</th>
                        <th scope="col">Качества</th>
                        <th scope="col">Профессия</th>
                        <th scope="col">Встретился, раз</th>
                        <th scope="col">Оценка</th>
                        <th scope="col">Избранное</th>
                        <th scope="col"></th>
                    </tr>
                </thead>      
                <tbody>
                    {users.map((user) => (
                        <Users key={user._id} {...user} onDelete={handleDelete} onBookmark={handleToggleBookmark} />
                    ))}
                </tbody>                      
            </table>            
        : ''}        
    </>

}

export default App
