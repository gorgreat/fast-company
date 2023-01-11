import React from "react"
import Qualitie from './qualitie'

const User = (props) => {
    
    const { color, name, _id } = props
    
    return <>        
        {Qualitie(color, name, _id)}
    </>
    
}

export default User