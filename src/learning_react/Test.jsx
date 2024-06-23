import React, { useEffect, useState } from 'react'

function Test() {

    const [name,setName] = useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setName(data))
    }, [])

  return (
    <>
        {
            name.map(x => <p>Email : {x.email}</p>)
        }
    </>
  )
}


export default Test