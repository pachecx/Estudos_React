export function DetailsJob({sal, xp, mod}){
    return(
        <div>
            <h3>Vaga Front-End</h3>
            <ul>
                <li>Salário: {sal}</li>
                <li>Experiência: {xp}</li>
                <li>Modalidade: {mod}</li>
            </ul>
        </div>
    );
}