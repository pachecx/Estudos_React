export function TemplateEx(){
    const name = 'Matheus';
    const number = 15;
    const number2 = 78;
    const developer = {
        name: 'Matheus',
        age: 28,
        job: 'Developer'
    }

    return(
        <div>
            <p>A soma dos valores é: {5 + 6}</p>
            <p>O meu nome é: {name}</p>
            <p>A soma dos valores é: {number + number2}</p>
            <p>Desenvolvedor: </p>
            <li>nome: {developer.name}</li>
            <li>Idade: {developer.age}</li>
            <li>Profissão: {developer.job}</li>
        </div>
    );
}