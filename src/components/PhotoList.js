import React from "react";
import Photo from "./Photo";
import Spinner from "./Spinner";

const PhotoList = ({ photos, loading }) => {
  const foundResults = () => {
    return (
      <ul>
        {photos.map((photo) => (
          <Photo
            key={photo.id}
            title={photo.title}
            url={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`}
          />
        ))}
      </ul>
    );
  };

  const noResults = () => <div> No Results were Found</div>;

  return (
    <div className="photo-list">
      <div className="loading">{loading && <Spinner />}</div>
      <div className="photo-results">
        {photos.length > 0 ? foundResults() : noResults()}
      </div>
    </div>
  );
};

export default PhotoList;
