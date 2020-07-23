import React from "react";

const Photo = ({ title, url }) => {
  return (
    <li>
      <img src={url} alt={title} />
    </li>
  );
};

export default Photo;
