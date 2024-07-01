import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Blog from './pages/Blog'
import Home from './pages/Home'
import Product from './pages/Product'
import Contactus from './pages/Contactus'
import Career from './pages/Career'
import NewsAndEvents from './pages/NewsAndEvents'
import Service from './pages/Service'
import Blogdetails from './pages/Blogdetails'
import Aboutleadership from './pages/Aboutleadership'
import Aboutourstory from './pages/Aboutourstory'
import Aboutourteam from './pages/Aboutourteam'
import Header from './components/Header';
import Footer from './components/Footer';
import Banner from './PageComponents/Banner/Banner'
import Productlistimgs from './PageComponents/ProductComponenets/Productlistimgs'
import Hydraulic_Diaphragm_Pumps from './PageComponents/ProductComponenets/Hydraulic_Diaphragm_Pumps'
const Router = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path="/blog" element={<Blog />} />
                <Route path='/product' element={<Product />} />
                <Route path='/contactus' element={<Contactus />} />
                <Route path='/career' element={<Career />} />
                <Route path='/news-event' element={<NewsAndEvents />} />
                <Route path='/service' element={<Service />} />
                <Route path='/blogdetails' element={<Blogdetails />} />
                <Route path='/aboutleadership' element={<Aboutleadership />} />
                <Route path='/aboutourstory' element={<Aboutourstory />} />
                <Route path='/aboutourteam' element={<Aboutourteam />} />
                <Route path='/banner' element={<Banner />} />
            </Routes>
            <Footer />
        </>
    )
}

export default Router