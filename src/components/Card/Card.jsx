import React, { Fragment, useState } from "react";
import Modal from "../Modal/Modal";

const Card = ({ item }) => {
  const { name, status, species, image, gender, origin, location } = item;
  const [modal, showModal] = useState(false);

  return (
    <Fragment>
      <div className="card" onClick={() => showModal(true)}>
        <figure className="card__img-container">
          <img className="card__photo" src={image} alt="" />
        </figure>
        <div className="card__info">
          <p className="card__title">{name}</p>
          <div className="card__body">
            <span className={`card__circle ${status.toLowerCase() === 'alive' && 'card__circle--active'}`}></span>
            <p className="card__status">
              <span className="card__status-info">{status}</span>-
              <span className="card__status-info">{species}</span>
            </p>
          </div>
        </div>
      </div>
      {modal && <Modal {...{ name, status, species, image, gender, origin, location, showModal }} />}
    </Fragment>
  );
};
export default Card;
