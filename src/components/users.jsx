import React, { useState } from "react"
import api from '../api'

const Users = () => {
    const [users, setUsers] = useState(api.users.fetchAll())

    const handleDelete = (userId) => {

    }
    //количество user
    const renderPhrase = (number) => {

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
                <td><button className='btn btn-danger'>delete</button></td>
            </tr>
        )

    }


    return <>
    
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

    </>
}

export default Users