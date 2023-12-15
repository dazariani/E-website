import { useState, useEffect } from "react";
import styled from "styled-components";
import GlobalStyles from "../../globalStyles";
import { HelmetProvider } from "react-helmet-async";
import { ThemeProvider } from "styled-components";
import Navbar from "../navbar/Navbar";
import Homepage from "../homePage/Homepage";
import Footer from "../footer/Footer";
import designData from "../../data";
import CategoryProducts from "../categories/headphones/CategoryProducts";
import { DataProps } from "../../data-type";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductDetailPage from "../productDetail/ProductDetailPage";
import CartModal from "../cartModal/CartModal";
import PageMask from "../pageMask/PageMask";
import CheckoutSummaryPage from "../checkoutSummeryPage/CheckoutSummaryPage";
import NavList from "../navList/NavList";
import ThanksModal from "../thanksModal/ThanksModal";
import { ThemeProps } from "./app-types";
import {
  headphonesData,
  speakersData,
  earphonesData,
  mark2Data,
  mark1Data,
  XX59Data,
  ZX9Data,
  ZX7Data,
  YX1Data,
} from "./app-data";

const defaultTheme: ThemeProps = {
  darkOrange: "rgb(216, 125, 74)",
  lightOrange: "rgb(251, 175, 133)",
  dark: "rgb(16, 16, 16)",
  black: "rgb(0, 0, 0)",
  darkGrey: "rgb(241, 241, 241)",
  lightGrey: "rgb(250, 250, 250)",
  white: "rgb(255, 255, 255)",
};

// Get users list data from localStorage
const setLocalStorageUserList = () => {
  let localList = localStorage.getItem("cardList");
  if (localList) {
    let newLocalList: DataProps = JSON.parse(localList);
    return newLocalList;
  } else {
    return [];
  }
};

function App() {
  const [cardData, setCardData] = useState<DataProps | []>(
    setLocalStorageUserList()
    // []
  );
  const [showCart, setShowCart] = useState<boolean>(false);
  const [showNavList, setShowNavList] = useState<boolean>(false);
  const [showThanks, setShowThanks] = useState<boolean>(false);
  const [grandTotal, setGrandTotal] = useState<number>(0);

  useEffect(() => {
    localStorage.setItem("cardList", JSON.stringify(cardData));
  }, [cardData]);
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
        <BrowserRouter basename="/E-website/">
          {cardData.length > 0 && (
            <ThanksModal
              grandTotal={grandTotal}
              showThanks={showThanks}
              setShowThanks={setShowThanks}
              cardData={cardData}
            />
          )}
          <CartModal
            cardData={cardData}
            setCardData={setCardData}
            showCart={showCart}
            setShowCart={setShowCart}
          />

          <PageMask
            showThanks={showThanks}
            showCart={showCart}
            showNavList={showNavList}
          />

          {/*  */}
          <Container>
            <Navbar
              showCart={showCart}
              setShowCart={setShowCart}
              showNavList={showNavList}
              setShowNavList={setShowNavList}
            />
            <NavList showNavList={showNavList} />
            <Routes>
              <Route path="/" element={<Homepage designData={designData} />} />
              {/* Checkout page */}
              <Route
                path="/checkout"
                element={
                  <CheckoutSummaryPage
                    cardData={cardData}
                    setCardData={setCardData}
                    setGrandTotal={setGrandTotal}
                    setShowThanks={setShowThanks}
                  />
                }
              />
              {/* Category pages */}
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

              {/* Product detail pages */}
              {/* XX99 Mark II Headphones */}
              <Route
                path="/product-mark2"
                element={
                  <ProductDetailPage
                    cardData={cardData}
                    setCardData={setCardData}
                    detailData={mark2Data}
                  />
                }
              />
              {/* XX99 Mark I Headphones */}
              <Route
                path="/product-mark1"
                element={
                  <ProductDetailPage
                    cardData={cardData}
                    setCardData={setCardData}
                    detailData={mark1Data}
                  />
                }
              />
              {/* XX59 Headphones */}
              <Route
                path="/product-XX59"
                element={
                  <ProductDetailPage
                    cardData={cardData}
                    setCardData={setCardData}
                    detailData={XX59Data}
                  />
                }
              />
              {/* ZX9 SPEAKER */}
              <Route
                path="/product-ZX9"
                element={
                  <ProductDetailPage
                    cardData={cardData}
                    setCardData={setCardData}
                    detailData={ZX9Data}
                  />
                }
              />
              {/* ZX7 SPEAKER */}
              <Route
                path="/product-ZX7"
                element={
                  <ProductDetailPage
                    cardData={cardData}
                    setCardData={setCardData}
                    detailData={ZX7Data}
                  />
                }
              />
              {/* YX1 WIRELESS EARPHONES */}
              <Route
                path="/product-YX1"
                element={
                  <ProductDetailPage
                    cardData={cardData}
                    setCardData={setCardData}
                    detailData={YX1Data}
                  />
                }
              />
            </Routes>
            <Footer />
          </Container>
        </BrowserRouter>

        {/*  */}
      </ThemeProvider>
    </>
  );
}

export default App;

const Container = styled.div``;
