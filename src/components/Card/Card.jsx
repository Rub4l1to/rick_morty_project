import React from 'react'

const Card = ({item}) => {
    const { name, status, species, image} = item;
    // console.log(item)
    return (
        <div className="card">
            <figure className="card__img-container">
                <img className="card__photo" src={image} alt="" />
            </figure>
            <div className="card__info">
                <p className="card__title">{name}</p>
                <div className="card__body">
                    <span className=" card__circle card__circle--active"></span>
                    <p className="card__status">
                        <span className="card__status-info">{status}</span>-
                        <span className="card__status-info">{species}</span>
                    </p>
                </div>
            </div>
        </div>
    )
}
export default Card