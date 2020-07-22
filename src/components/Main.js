import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchInput from "./SearchInput";
import PhotoList from "./PhotoList";

const Main = () => {
  const [photos, setPhotos] = useState({});
  const [loading, setLoading] = useState(false);

  const getPhotos = (text) => {
    setLoading(true);
    axios
      .get(
        `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${process.env.REACT_APP_API_FLICKR_KEY}&tags=(${text}&safe_search=1&per_page=25&format=json&nojsoncallback=1`
      )
      .then((response) => {
        setPhotos(response.data.photos.photo);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  };

  useEffect(() => {
    getPhotos("toad");
  }, []);

  return (
    <div>
      <SearchInput getPhotos={getPhotos} />
      <PhotoList photos={photos} loading={loading} />
    </div>
  );
};

export default Main;
