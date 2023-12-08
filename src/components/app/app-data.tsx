import designData from "../../data";

// For category pages
export const headphonesData = designData
  .filter((item) => item.category == "headphones")
  .reverse();
export const speakersData = designData
  .filter((item) => item.category == "speakers")
  .reverse();

export const earphonesData = designData
  .filter((item) => item.category == "earphones")
  .reverse();

// ----- For product detail pages -----
// XX99 Mark II Headphones
export const mark2Data = designData.filter(
  (item) => item.name.toLowerCase() == "XX99 Mark II Headphones".toLowerCase()
);
// XX99 Mark I Headphones
export const mark1Data = designData.filter(
  (item) => item.name.toLowerCase() == "XX99 Mark I Headphones".toLowerCase()
);
// XX59 Headphones
export const XX59Data = designData.filter(
  (item) => item.name.toLowerCase() == "XX59 Headphones".toLowerCase()
);
// ZX9 SPEAKER
export const ZX9Data = designData.filter(
  (item) => item.name.toLowerCase() == "ZX9 SPEAKER".toLowerCase()
);
// ZX7 SPEAKER
export const ZX7Data = designData.filter(
  (item) => item.name.toLowerCase() == "ZX7 SPEAKER".toLowerCase()
);
// YX1 WIRELESS EARPHONES
export const YX1Data = designData.filter(
  (item) => item.name.toLowerCase() == "YX1 WIRELESS EARPHONES".toLowerCase()
);
