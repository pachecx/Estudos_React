import { useState } from "react";

export function Data(){
    let someData = 10
    const [anotherNumber, setanotherNumber] = useState(30);

    return(
        <div>
            <div>
                <p>Valor: {someData}</p>
                <button onClick={()=>{someData = 50}}>Mudar valor</button>
            </div>

            <div>
                <p>valor: {anotherNumber}</p>
                <button onClick={() => setanotherNumber(200)}>Mudar valor</button>
            </div>
        </div>
    );
}