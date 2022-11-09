import React from 'react'
import {Link} from "react-router-dom"
function Card(props) {
  return (
    <>
    <div className="card" >
        <img src={props.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <Link to={"/product/"+props.slug} className="btn btn-primary">View</Link>
        </div>
      </div>
    </>
  )
}

export default Card