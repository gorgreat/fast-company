import React from "react"
import User from "./user"

const Users = (props) => {

    const bookMarkStatus = () => {
        return props.bookmark === true ? 'bi bi-bookmark-fill' : 'bi bi-bookmark'
    }
    
     return <>
        <tr key={props._id}>
            <th>{props.name}</th>
            <td>
                {(props.qualities).map((item) =>                                   
                    User(item)                                                            
                )}                 
            </td>
             <td><span key={props.profession._id}>{props.profession.name}</span></td>         
            <td>{props.completedMeetings}</td>
            <td>{props.rate}</td>
            <td><i className={bookMarkStatus()} onClick={() => props.onBookmark(props._id)}></i></td>
            <td><button className='btn btn-danger' onClick={() => props.onDelete(props._id)}>Удалить</button></td>
        </tr>

    </>
    
}

export default Users