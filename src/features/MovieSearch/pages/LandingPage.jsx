/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import styled from 'styled-components';
import MovieSearch from '../components/MovieSearch/MovieSearch';
import MovieCard from "../components/MovieCard/MovieCard";

const Container = styled.div`
  text-align: center;

  input {
    background: coral;
    border: none;
    border-color: coral;
    padding: 10px;
    color: white;
    font-weight: bolder;
  }
`

const LandingPage = () => {
  const [movie, setMovie] = useState("");

  return (
    <Container>
      <h1>Help! I need some movies. Help!</h1>
      <MovieSearch setMovie={setMovie} />
      <div>
        {movie && <MovieCard movieData={movie} />}
      </div>
    </Container>
  );
};

export default LandingPage;
