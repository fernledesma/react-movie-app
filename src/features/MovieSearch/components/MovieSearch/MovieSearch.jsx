import React, { useState } from "react";
import styled from 'styled-components';
import axios from 'axios';

const SubmitButton = styled.button`
  background-color: #556b2f;
  border: none;
  color: white;
  padding: 10px;
  border-radius: 12px;



  &:hover {
    background-color: #556b2f;
  }
`

const MovieSearch = ({ setMovie }) => {
  const [movieName, setMovieName] = useState("");
  const apiKey = "d6fc1ec7";

  const getMoviesByName = async (name) => {
    const url = `http://www.omdbapi.com/?apikey=${apiKey}&t=${name}`;
    const response = await axios.get(url);
    setMovie(response.data);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    getMoviesByName(movieName);
  };
  
  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Magical Mystery Movie Name"
          value={movieName}
          onChange={(e) => setMovieName(e.currentTarget.value)}
        />
        <SubmitButton onClick={onSubmit}>Submit</SubmitButton>
      </form>
    </div>
  );
};

export default MovieSearch;
