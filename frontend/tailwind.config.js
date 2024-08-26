/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    fontFamily: {
      Raleway: ["Raleway"],
      Horence: ["Horence"],
      Alex: ["Alex"],
      Cottage: ["Cottage"],
      Melodrame: ["Melodrame"],
      Whimster: ["Whimster"],
    },
    extend: {
      height: {
        maxscreen: "120vh",
      },
    },
  },
  // plugins: ["/node_modules/flowbite/flowbite/plugin.js"],
};
