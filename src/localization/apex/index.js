import apexTR from "./apex/tr.js";
import apexEN from "./apex/en.js";

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
