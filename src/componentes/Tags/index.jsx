import React from 'react'
import style from './Tags.module.scss'
import fotos from '../Galeria/fotos.json'

export default function Tags({tags, filtraFotos, setItens}) {

function filtro(event){
  event.preventDefault();
  event = setItens(fotos)
  return event;

}

  return (
    <div className={style.tags}>
      <p>Filtre por composição:</p>
      <ul className={style.tags__lista}>
        {tags.map((tag =>{
          return <li key ={tag} onClick={()=>filtraFotos(tag)}>{tag}</li>
        }))}
        {/* <li onClick={()=>setItens(fotos)}>Todos</li> */}
        <li onClick={filtro}>Todos</li>
      </ul>
    </div>
  )
}
