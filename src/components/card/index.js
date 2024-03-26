import './Card.css';
export default function Card({nome, descricao}){
    return(

        <div  class="card">
             {/* <div className='cabecalho' style={{backgroundColor: props.corPrimaria}}>
                <img  src={props.imagem} alt={props.nome}/>
            </div> */}
            <div class="maincard-content">
                
                <h4 class="titulocard">{nome}</h4>
                <h5 class="descricaocard">{descricao}</h5>
            </div>
        </div>
    );
}