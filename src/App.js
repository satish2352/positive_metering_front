import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Router from './Router';
import axios from 'axios';
function App() {
  axios.defaults.baseURL = 'http://api.positivemetering.ae.sumagodemo.com/';
  // axios.defaults.baseURL = 'http://api.positivemetering.ae.sumagodemo.com/';
  return (
    <>
      <Router />
    </>
  );
}

export default App;
