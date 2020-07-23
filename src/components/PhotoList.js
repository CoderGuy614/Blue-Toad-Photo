import React from "react";
import Photo from "./Photo";
import Alert from "./Alert";

const PhotoList = ({ photos }) => {
  const foundResults = () => {
    return (
      <div className="">
        <ul>
          {photos.map((photo) => (
            <Photo
              key={photo.id}
              title={photo.title}
              url={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`}
            />
          ))}
        </ul>
      </div>
    );
  };

  return (
    <>
      {photos.length > 0 ? (
        <div className="photo-results">{foundResults()}</div>
      ) : (
        <Alert message="No Results Found" />
      )}
    </>
  );
};

export default PhotoList;
