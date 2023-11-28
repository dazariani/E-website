import { useState } from "react";
import GlobalStyles from "../../globalStyles";
import { HelmetProvider } from "react-helmet-async";
import { ThemeProvider } from "styled-components";
import Navbar from "../navbar/Navbar";
import Homepage from "../homePage/Homepage";
import Footer from "../footer/Footer";
import designData from "../../data";
import CategoryProducts from "../categories/headphones/CategoryProducts";

import { Routes, Route, BrowserRouter } from "react-router-dom";

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
  const headphonesData = designData
    .filter((item) => item.category == "headphones")
    .reverse();
  const speakersData = designData
    .filter((item) => item.category == "speakers")
    .reverse();

  const earphonesData = designData
    .filter((item) => item.category == "earphones")
    .reverse();

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
        {/*  */}

        <Navbar />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route
              path="/category-headphones"
              element={<CategoryProducts productsData={headphonesData} />}
            />

            <Route
              path="/category-speakers"
              element={<CategoryProducts productsData={speakersData} />}
            />

            <Route
              path="/category-earphones"
              element={<CategoryProducts productsData={earphonesData} />}
            />
          </Routes>
        </BrowserRouter>
        <Footer />

        {/*  */}
      </ThemeProvider>
    </>
  );
}

export default App;
