import React from "react";

const Card = ({ name, email, image }) => {
  return (
    <div className="card gap-2">
      <div className="w-full h-full rounded-sm overflow-hidden">
        <img
          src={image}
          alt={`${name}'s avatar`}
          className="object-fill w-full"
        />
      </div>
      <div className="card-info">
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
