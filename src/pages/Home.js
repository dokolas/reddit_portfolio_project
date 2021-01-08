import React, { useEffect } from "react";
//redux
import { useDispatch, useSelector } from "react-redux";
import { loadSubreddit } from "../actions/subredditAction";
//components
import SubRedditList from "../components/subredditList";
//styles and motion
import styled from "styled-components";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
//react router
import { useLocation } from "react-router-dom";

export const Home = () => {
  

  return <div>Hello</div>;
};
