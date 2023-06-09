/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
    },
    colors:{
      key:{
        Woodsmoke: '#121117',
        White: '#ffffff',
        Abbey: '#505051',
        SilverSand: '#babdbe',
        BlueLagoon: '#038483',
        FountainBlue: '#51bdbc',
        Shark: '#202427',
        GrayNurse: '#e4eae6',
        Gothic: '#6c9b9c',
        SmaltBlue: '#5c828c',
        Bazaar: '#947474',
        Eim: '#1a948f',
        ShuttleGray: '#5e6063',
        Atoll: '#097a7c',
        EbonyClay: '#24343c',
        Bermuda: '#7ed5d5',
        Circle: '#D5E9EA'
      }
    },
    container:{
      center: true,
    }
  },
  plugins: [],
}