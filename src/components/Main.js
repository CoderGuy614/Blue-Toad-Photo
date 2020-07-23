import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchInput from "./SearchInput";
import PhotoList from "./PhotoList";
import Spinner from "./Spinner";
import Alert from "./Alert";

const Main = () => {
  const [photos, setPhotos] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const getPhotos = (text) => {
    setLoading(true);
    axios
      .get(
        `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${process.env.REACT_APP_API_FLICKR_KEY}&tags=(${text}&safe_search=1&per_page=25&format=json&nojsoncallback=1`
      )
      .then((response) => {
        setSuccess(text);
        setLoading(false);
        setPhotos(response.data.photos.photo);
      })
      .catch((error) => {
        setSuccess(false);
        setLoading(false);
        console.log(error);
      });
  };

  useEffect(() => {
    getPhotos("blue frog");
  }, []);

  const header = () => (
    <div className="header">
      <h1>
        {" "}
        <i className="fas fa-2x fa-frog"></i> Photo Search
      </h1>
    </div>
  );

  return (
    <>
      {header()}
      <SearchInput getPhotos={getPhotos} />
      {!loading &&
        success &&
        success !== "blue frog" &&
        success !== "" &&
        photos.length > 0 && (
          <Alert message={`Showing ${photos.length} results for ${success}`} />
        )}
      {loading ? <Spinner /> : <PhotoList photos={photos} />}
    </>
  );
};

export default Main;
