import React, { useEffect, useState } from 'react'

function Home(props) {

    let arr = [
        {name:'Mir Shifat Mahmud', age:24},
        {name:'begum', age:23},
        {name:'rahat', age:27},
        {name:'joy', age:25},
        {name:'rafat', age:25},
        {name:'monir', age:25},
        {name:'abir', age:25},
    ]

  return (
    <div>
        <h1>Home pages {props.title}</h1>
        {
            arr.map(x=><Person name={x.name} age={x.age}></Person>)
        }
        <Counter></Counter>
        <Users></Users>
    </div>
  );
}


function Counter(){

    const [count, setCount] = useState(0);

    return(
        <>
            <h1>count : {count}</h1>
            <button onClick={()=>setCount(count-1)}>-</button>
            <button onClick={()=>setCount(count+1)}>+</button>
        </>
    )
}

function Users(){
    const [users,setUsers] = useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => setUsers(json))
    })
    
    return(
        <>
            <h1>lenth : {users.length}</h1>
            {
                users.map(user => <li>{user.email}</li>)
            }
        </>
    )
}


function Person(props){
    const style = {
        color: 'red',
        border: '1px solid black',
    }

    const {name,age} = props

    return(
        <>
            <h1>Name : {name}</h1>
            <p>Age : {age}</p>
        </>
    );
}

export default Home