import "./Card.css"
import React from 'react'

const Card = ({kart,kartSeç}) => {
  return (
    <div className="card" key={kart.id}>
            <div >
              <img src={kart.src} alt="" className="front" />
              <img src="/img/kapak.png" alt="" className="back" onClick={()=>kartSeç(kart)}/>
            </div>
          </div>
  )
}

export default Card