export function Events(){
    return(
        <div>
            <div>
                <button onClick={()=>{console.log('Funcionou!')}}>Clique aqui</button>
            </div>
            <div>
                <button onClick={()=>{alert('Funcionou!')}}>Clique aqui</button>
            </div>
        </div>
    );
}