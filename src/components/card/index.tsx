import './Card.scss';
import React from 'react';
export default function Card(nome:string, descricao:string){
    return(

        <div  className="Card">
               
            <img   alt={nome}/>
                       
            <div className="maincard-content">
                
                <h4 className="titulocard">{nome}</h4>
                <h5 className="descricaocard">{descricao}</h5>
            </div>
        </div>
    );
}