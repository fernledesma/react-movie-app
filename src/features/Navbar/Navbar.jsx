import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: #556b2f ;
  font-color: red;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 4rem;

  h1 {
    margin: 0;
    padding: 0;
  }

  div {
    display: flex;
    font-color: red;
    justify-content: space-between;
    gap: 1rem;
  }

`;

export default function Navbar() {
  return (
    <Wrapper>
      <h1>Magic Mystery Movie Generator</h1>
      <div>
        <Link to="/">The Home</Link>
        <Link to="/favorites">Hey Favorites</Link>
      </div>
    </Wrapper>
  );
}
