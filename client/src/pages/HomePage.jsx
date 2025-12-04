import React, { useEffect } from "react";
import Events from "../components/Events";
import Hero from "../components/Hero/Hero";
import Category from "../components/Category";
import About from "../components/About/About";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FAQ from "../components/FAQ";
import axios from "axios";
import { addMyEvents } from "../store/myEventSlice";
import { useDispatch, useSelector } from "react-redux";

export default function HomePage() {
  const token = localStorage.getItem("token");
  // Only set headers if token exists to avoid errors on public routes
  if (token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  }
  
  const dispatch = useDispatch();
  const loggedIn = useSelector(state => state.loggedIn);

  // --- NEW CODE START ---
  // 1. Function to fetch ALL public events
 const getAllEvents = async () => {
  const url = import.meta.env.VITE_BASE_URL;
  try {
    const response = await axios.get(`${url}/events`);
    dispatch(addEvents(response.data)); // <--- Updated dispatch
  } catch (err) {
    console.log("Error fetching events:", err);
  }
};
  // 2. Run this ONCE when the app loads
  useEffect(() => {
    getAllEvents();
  }, []);
  // --- NEW CODE END ---

  const getUserEvents = async () => {
    const url = import.meta.env.VITE_BASE_URL;
    try {
      const response = await axios.get(`${url}/userevents`);
      dispatch(addMyEvents(response.data.events));
    } catch (err) {
      console.log(err);
      dispatch(addMyEvents([]));
    }
  };

  useEffect(() => {
    if (loggedIn) {
      getUserEvents();
    }
  }, [loggedIn]);

  return (
    <div>
      <Hero />
      <Events />
      <Category />
      <About />
      <FAQ />
      <Footer />
    </div>
  );
}