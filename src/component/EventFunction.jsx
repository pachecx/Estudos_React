export function EventFuncion(){
    const handleClick = ()=>{
        console.log('Função click deu certo!')
    }

    const handleClick2 = ()=>{
        alert('Função click deu certo!')
    }

    return(
       <div>
            <div>
                 <button onClick={handleClick}>Testando evento click-função</button>
            </div>
            <div>
                <button onClick={handleClick2}>Testando evento click-função</button>
            </div>
       </div>
    );
}