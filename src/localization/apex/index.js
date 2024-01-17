import apexTR from "./tr.js";
import apexEN from "./en.js";

let locales = [
  {
    name: "tr",
    options: {
      ...apexTR,
    },
  },
  {
    name: "en",
    options: {
      ...apexEN,
    },
  },
];

export { locales };
