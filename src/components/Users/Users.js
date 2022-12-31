import React from 'react'
import './Users.css'
const Users = () => {
    fetch('https://5ea5ca472d86f00016b4626d.mockapi.io/brotherhood')
            .then(response => response.json())
            .then(data => {
                data.map(item => (
                    console.log(item)
                ))
            })
  return (
    <div>
     
    </div>
  )
}

export default Users