import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Router from './Router';
import axios from 'axios';

function App() {
  // axios.defaults.baseURL = 'https://positive.api.sumagodemo.com/'
 axios.defaults.baseURL = 'https://nodetest.positivemetering.in';
  // axios.defaults.baseURL = 'https://api.positivemetering.ae/'
  return (
    <>
 
      <Router />
    </>
  );
}

export default App;
