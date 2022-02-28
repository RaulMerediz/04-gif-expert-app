import React from 'react'

export const GifGridItem = ({title,url}) => {
  return (
      //Se usa className porque class es reservado de JS y se hace bolas
    <div className="card animate__animated animate__fadeIn">
        <img src={url} alt={title}></img>
        <p>{title}</p>
    </div>
  )
}
