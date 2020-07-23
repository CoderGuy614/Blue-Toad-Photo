import React from "react";
import Photo from "./Photo";

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

  const noResults = () => <div> No Results were Found</div>;

  return (
    <div className="photo-results">
      {photos.length > 0 ? foundResults() : noResults()}
    </div>
  );
};

export default PhotoList;
