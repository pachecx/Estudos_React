import { useState } from "react";

export function ListRender(){
    //const [list] = useState(['matheus', 'pedro', 'lucas']);
    
    const [users, setUsers] = useState([
        {id: 1, name: 'Matheus', age: 28},
        {id: 2, name: 'Pedro', age: 38},
        {id: 3, name: 'lucas', age: 18}
    ])

    const deleteRandom = ()=>{
        const randomNumber = Math.floor(Math.random() * 4);
        setUsers((prevUsers) =>
            prevUsers.filter((user) => randomNumber !== user.id)
        );
    };
    
    return(
        <div>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>{user.name} - {user.age} anos</li>
                ))}
            </ul>

            {/* Previous State */}
            <button onClick={deleteRandom}>Delete random user</button>
        </div>
    );
}