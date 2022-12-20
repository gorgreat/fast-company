import React, { useState } from "react"
import api from '../api'

const Users = () => {
    const [users, setUsers] = useState(api.users.fetchAll())
    const handleDelete = (userId) => {

    }
    //количество user
    const renderPhrase = (number) => {

    }

    const renderTable = () => {
        users.map((item) => {

        })
    }

    return <>
    </>
}

export default Users