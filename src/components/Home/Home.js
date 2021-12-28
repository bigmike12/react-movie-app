import React, { useEffect } from "react";
import MovieListing from "../MovieListing/MovieListing";
import movieApi from "../../common/apis/MovieApi";
import { APIKEY } from "../../common/apis/MovieApiKey";
import { useDispatch } from "react-redux";
import { addMovies } from "../../features/movies/movieSlice";

function Home() {
  const movieTest = "Harry";

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await movieApi
        .get(`?apikey=${APIKEY}&s=${movieTest}&type=movie`)
        .catch((err) => {
          console.log(err);
        });
      dispatch(addMovies(response.data))
    };

    fetchMovies();
  }, []);
  return (
    <div className="banner-img">
      <MovieListing />
    </div>
  );
}

export default Home;
