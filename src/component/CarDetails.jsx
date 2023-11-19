export function CarDetails({model, age, color}){
    return(
        <div>
            <h3>Detalhes do carro</h3>
            <ul>
                <li>Modelo: {model}</li>
                <li>Ano: {age}</li>
                <li>Cor: {color}</li>
            </ul>
        </div>
    );
}
//Não precisa colocar PROPS