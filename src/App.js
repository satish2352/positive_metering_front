import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Router from './Router';
import axios from 'axios';

// export const baseURLLink = 'https://positivebackend.sumagodemo.com/';
export const baseURLLink = 'https://api.positivemetering.ae/';
// export const baseURLLink = 'https://nodetest.positivemetering.in/';
function App() {
  // axios.defaults.baseURL = 'https://positivebackend.sumagodemo.com/'
  //  axios.defaults.baseURL = 'https://nodetest.positivemetering.in/';
  axios.defaults.baseURL = 'https://api.positivemetering.ae/'
  
  return (
    <>
      <Router />
    </>
  );
}

export default App;
// export const captchaKey = "6Lc9fHAqAAAAAHnziHljOuI8xEvd4VU-xTikN5Y4"  // . com
// export const captchaKey = "6LfKtTgqAAAAAGiBqsRqk3xuGrMnqfIlKQgMpT4f"  // . in
export const captchaKey = "6LdscT8qAAAAAPbFHPpVbW3vesSLNAIEqdZuB8Dq"  // . ae
// export const captchaKey = "6LevTFsqAAAAAD5gvKBNZTzNtgPHTX38UAlQdV_E" // local
// export const captchaKey = "6LfpfgwrAAAAALmozTVkrV1bGyljnlypmgf9I2zr" // demo

// for mail sending url

// export const mailUrl = "https://positivemetering.in"  // for .in and .com
export const mailUrl = "https://positivemetering.ae"