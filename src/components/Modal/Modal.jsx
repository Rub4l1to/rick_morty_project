import React from "react";

export default function Modal({
  name,
  status,
  species,
  image,
  gender,
  origin,
  location,
  showModal,
}) {
  return (
    <div className="modal modal__show" id="modal">
      <div className="modal__content">
        <a className="modal__hide" onClick={() => showModal(false)} href="#">
          ✕
        </a>
        <div className="modal__info">
          <figure className="modal__img-container">
            <img className="modal__photo" src={image} alt="" />
          </figure>

          <div className="modal__bibliography">
            <p className="modal__title">{name}</p>
            <div className="modal__status">
              <span className={`modal__circle ${status.toLowerCase() === 'alive' && 'modal__circle--active'}`}></span>

              <p className="modal__status-info">
                <span className="modal__status-state">{status}</span> -
                <span className="modal__status-race">{species}</span>
              </p>
            </div>
            <div className="dimensions modal__gender">
              <p className="modal__gender-title">Gender</p>
              <p className="dimensions-text modal__gender-text">{gender}</p>
            </div>
            <div className="dimensions modal__origin">
              <p className="modal__origin-title">Origin</p>
              <p className="dimensions-text modal__origin-text">{origin.name}</p>
            </div>
            <div className="dimensions modal__location">
              <p className="modal__location-title">Last know location:</p>
              <p className="dimensions-text modal__location-text">{location.name}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
