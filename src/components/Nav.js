import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { searchPosts } from "../actions/searchPostsAction";
import Button from "react-bootstrap/Button";

//import search function from action

//redux needs usedispatch to do it
import { useDispatch } from "react-redux";

const Nav = () => {
  const dispatch = useDispatch();
  const [textInput, setTextInput] = useState("");

  const inputHandler = (e) => {
    setTextInput(e.target.value);
  };

  const submitSearch = (e) => {
    e.preventDefault(); //prevents the page from reloading
    dispatch(searchPosts(textInput));
    dispatch({ type: "CLEAR_INITIAL_POSTS" }); //CLEARS INITIAL POSTS
    dispatch({ type: "CLEAR_CHOSEN_POSTS" }); //CLEARS INITIAL POSTS
    setTextInput("");
  };

  return (
    <StyledNav>
      <Logo>
        <h1>Spiro.reddit</h1>
      </Logo>
      <form className="search">
        <input onChange={inputHandler} value={textInput} type="text" />
        <button onClick={submitSearch} variant="warning">
          Search
        </button>
      </form>
    </StyledNav>
  );
};

const StyledNav = styled(motion.nav)`
  padding: 2rem 5rem;
  text-align: center;
  input {
    width: 35%;
    font-size: 1.5rem;
    padding: 0.5rem;
    border: none;
    border-left: red 3px solid;
    outline: none;
    font-weight: bold;
    font-family: "Montserrat", sans-serif;
    background: lightgoldenrodyellow;
  }
  button {
    font-size: 1.5rem;
    border: none;
    padding: 0.5rem 2rem;
    cursor: pointer;
    background: #ff7676;
    color: white;
  }
`;

const Logo = styled(motion.div)`
  display: flex;
  justify-content: center;
  cursor: pointer;
  img {
    width: 2rem;
    height: 2rem;
  }
`;

export default Nav;
