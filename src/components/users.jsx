import React, { useState } from "react"
import api from '../api'

const Users = () => {
    const [users, setUsers] = useState(api.users.fetchAll())

    const declensions = (number, titles) => {
        let cases = [2, 0, 1, 1, 1, 2]
        return titles[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]]
    }

    const handleDelete = (userId) => {       
        setUsers((prevState) => prevState.filter((user) => user !== userId))
    }

    const renderPhrase = (number) => {
        return number === 0 ? 
        'никто не тусанет с тобой, дружище' :
        number + ' ' + declensions(number, ['человек', 'человека', 'человек']) + ' ' + declensions(number, ['тусанет', 'тусанут', 'тусанет']) + ' с тобой сегодня' 
    }

    const renderQualities = (qualities) => {    
        return qualities.map((qualitie) =>             
            <span key={qualitie._id} className={'m-2 badge bg-' + qualitie.color}>{qualitie.name}</span>
        )
    }

    const renderProfession = (professions) => {
        return <span key={professions._id}>{professions.name}</span>        
    }
    
    const renderTable = () => {
        return users.map((user) =>             
            <tr key={user._id} data-bookmark={user.bookmark}>                
                <th >{user.name}</th>  
                <td>{renderQualities(user.qualities)}</td>  
                <td>{renderProfession(user.profession)}</td>   
                <td>{user.completedMeetings}</td>  
                <td>{user.rate}</td>  
                <td><button className='btn btn-danger' onClick={() => handleDelete(user)}>delete</button></td>
            </tr>
        )
    }

    return <>
        <h1><span className={'badge ' + (users.length > 0 ? 'bg-primary' : 'bg-danger')}>{renderPhrase(users.length)}</span></h1>

        {users.length > 0 ?  
            <table className="table"> 
                <thead>
                    <tr>
                        <th scope="col">Имя</th>
                        <th scope="col">Качества</th>
                        <th scope="col">Профессия</th>
                        <th scope="col">Встретился, раз</th>
                        <th scope="col">Оценка</th>
                        <th scope="col"></th>
                    </tr>
                </thead>      
                <tbody>
                    {renderTable()}
                </tbody>                      
            </table>            
        : ''}
    </>
}

export default Users