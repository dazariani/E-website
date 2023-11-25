import { useState } from "react";
import GlobalStyles from "../../globalStyles";
import { HelmetProvider } from "react-helmet-async";
import { ThemeProvider } from "styled-components";
import Navbar from "../navbar/Navbar";
import Header from "../header/Header";
import CategoryList from "../categoryList/CategoryList";
import HomeContent from "../homeContent/HomeContent";
import Footer from "../footer/Footer";
import Homepage from "../homePage/Homepage";

interface ThemeProps {
  darkOrange: string;
  lightOrange: string;
  dark: string;
  black: string;
  darkGrey: string;
  lightGrey: string;
  white: string;
}

const defaultTheme: ThemeProps = {
  darkOrange: "rgb(216, 125, 74)",
  lightOrange: "rgb(251, 175, 133)",
  dark: "rgb(16, 16, 16)",
  black: "rgb(0, 0, 0)",
  darkGrey: "rgb(241, 241, 241)",
  lightGrey: "rgb(250, 250, 250)",
  white: "rgb(255, 255, 255)",
};

function App() {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <HelmetProvider>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Manrope:wght@300;500;700&display=swap"
            rel="stylesheet"
          />
        </HelmetProvider>
        <GlobalStyles />
        <Navbar />
        <Homepage />
      </ThemeProvider>
    </>
  );
}

export default App;
