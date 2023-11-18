import { useState } from "react";

export function DataDois(){
    const [novoValor, setnovoValor ] = useState(45);

    return(
        <div>
            <div>
                <p>valor: {novoValor}</p>
                <button onClick={() => setnovoValor(144)}>Alterar valor</button>
            </div>
        </div>
    );
}