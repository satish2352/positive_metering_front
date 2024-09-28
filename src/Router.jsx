import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Blog from './pages/Blog'
import Home from './pages/Home'
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
import { useContext } from 'react'
import Productlistimgs from './PageComponents/ProductComponenets/Productlistimgs'
import Newnavbar from './components/Newnavbar'
import ProductList from './PageComponents/ProductComponenets/ProductList'
import { ProductContext } from './ProductContext'
import Eventdetails from './pages/Eventdetails'
import Eventspage from './pages/Eventspage'
import Movingicon from './components/Movingicon'
const Router = () => {
    const { blog,newevents } = useContext(ProductContext);

    return (
        <>
            <Header />
            <Newnavbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path="/blog" element={<Blog />} />
                <Route path='/contactus' element={<Contactus />} />
                <Route path='/career' element={<Career />} />
                <Route path='/news' element={<NewsAndEvents />} />
                <Route path='/event' element={<Eventspage/>} />
                <Route path='/service' element={<Service />} />
                <Route path='/blogdetails' element={<Blogdetails />} />
                <Route path='/aboutleadership' element={<Aboutleadership />} />
                <Route path='/aboutourstory' element={<Aboutourstory />} />
                <Route path='/aboutourteam' element={<Aboutourteam />} />
                <Route path='/product/:productName' element={<ProductList />} />
                {blog.map((c) => {
                    return (
                        <Route
                            key={c.title}
                            path={`/blogdetails/${c.id}`}
                            element={
                                <Blogdetails title={c.title} image={c.img} longetxt={c.longDesc} />
                            }
                        />
                    );
                })}
                 {newevents.map((c) => {
                    return (
                        <Route
                            key={c.title}
                            path={`/newevents/${c.id}`}
                            element={
                                <Eventdetails title={c.title} image={c.img} longetxt={c.longDesc} />
                            }
                        />
                    );
                })}
            </Routes>
            <Movingicon/>
            <Footer />
        </>
    )
}

export default Router