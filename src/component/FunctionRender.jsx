export function FuncionRender(){
    const Render = (x)=>{
        if (x) {
            return <h3>Renderizou</h3>
        }
        else{
            return <h3>Não Renderizou</h3>
        }
    }
    return(
        <div>
            <h3>Função de Renderação:</h3>
            {Render(true)}
            {Render(false)}
        </div>
    );
}