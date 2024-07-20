import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [blog, setblog] = useState([])
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [newevents,setnewevents]=useState([])
  useEffect(() => {
    const fetchblogdeatil = async () => {
      try {
        const response = await axios.get('blogdetails/get-blogdetails');
        if (response.data.result) {
          setblog(response.data.responseData);
        } else {
          setError('Failed to fetch product details');
        }
      } catch (err) {
        setError('Error fetching product details');
      } finally {
        setLoading(false);
      }
    };

    fetchblogdeatil();
  }, []);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('/productdetails/get-productdetails');
        if (response.data.result) {
          setProducts(response.data.responseData);
        } else {
          setError('Failed to fetch product details');
        }
      } catch (err) {
        setError('Error fetching product details');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);
  useEffect(() => {
    const fetchnewevents = async () => {
      try {
        const response = await axios.get('newsandevent/get-newevents');
        if (response.data.result) {
          setnewevents(response.data.responseData);
        } else {
          setError('Failed to fetch product details');
        }
      } catch (err) {
        setError('Error fetching product details');
      } finally {
        setLoading(false);
      }
    };

    fetchnewevents();
  }, []);
  return (
    <ProductContext.Provider value={{ products, loading, error,blog,newevents }}>
      {children}
    </ProductContext.Provider>
  );
};
