export function Condi(){
    const x = true;
    return(
        <div>
            <h3>Isso será exibido?</h3>
            {x && <p>Se x for true sim!</p>}
        </div>
    );
}