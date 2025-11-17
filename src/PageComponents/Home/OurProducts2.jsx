// import React, { useState, useEffect } from "react";
// import "../../assets/CSS/mainbanner.css";
// import Slider from "react-slick";
// import { Container, Row, Col, Modal } from "react-bootstrap";
// import { FaTimes } from "react-icons/fa";
// import axios from "axios";
// import Heading from "../../components/Heading";

// function OurProducts2() {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [showModal, setShowModal] = useState(false);
//   const [selectedImage, setSelectedImage] = useState(null);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await axios.get("carrousal/get-carrousal");
//         if (response.data.result) {
//           setProducts(response.data.responseData);
//         } else {
//           setError(response.data.message);
//         }
//       } catch (error) {
//         setError("There was an error making the request!");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProducts();
//   }, []);

//   const slidesToShow = 5;
//   const slidesToScroll = 1;

//   const settings = {
//     speed: 500,
//     centerMode: true,
//     infinite: true,
//     slidesToShow: slidesToShow,
//     slidesToScroll: slidesToScroll,
//     autoplay: true,
//     speed: 3500,
//     autoplaySpeed: 3500,
//     cssEase: "linear",
//     responsive: [
//       {
//         breakpoint: 1600,
//         settings: {
//           slidesToShow: 5,
//           slidesToScroll: 5,
//           infinite: true,
//           dots: true,
//         },
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 2,
//           initialSlide: 2,
//         },
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   };

//   if (loading) return <p></p>;
//   if (error) return <p></p>;

//   const activeProducts = products.filter((product) => product.isActive);

//   const handleImageClick = (image) => {
//     setSelectedImage(image);
//     setShowModal(true);
//   };

//   const handleClose = () => {
//     setShowModal(false);
//     setSelectedImage(null);
//   };

//   return (
//     <>
//       <Container fluid className="my-5 py-lg-0 d-none d-lg-block">
//         {activeProducts.length > 5 ? (
//           <Slider {...settings}>
//             {activeProducts.map((product) => (
//               <div
//                 key={product.id}
//                 className="ourprdcard d-grid text-center justify-content-center p-4"
//                 onClick={() => handleImageClick(product.img)}
//               >
//                 <img
//                   src={product.img}
//                   className="img-fluid ourprdimg w-100 h-100"
//                   alt={"Product Image"}
//                   title={"Product Image"}

//                 />
//                 <p className=" shadow-sm">{product.title}</p>
//               </div>
//             ))}
//           </Slider>
//         ) : (
//           <Row className="d-flex justify-content-center">
//             {activeProducts.map((product) => (
//               <Col key={product.id} xs={12} sm={6} md={2} className="mb-4">
//                 <div className="d-grid text-center justify-content-center">
//                   <img
//                     src={product.img}
//                     className="img-fluid ourprdimg w-100 h-100"
//                     alt={product.title || "Product Image"}
//                     title={product.title || "Product Image"}
//                     onClick={() => handleImageClick(product.img)}
//                   />
//                   <p className=" shadow-sm">{product.title}</p>

//                 </div>
//               </Col>
//             ))}
//           </Row>
//         )}
//       </Container>

//       <Modal
//         show={showModal}
//         onHide={handleClose}
//         style={{
//           backgroundColor: "transparent",
//         }}
//         centered
//       >
//         <Modal.Body className="position-relative p-0" style={{
//           backgroundColor: "transparent",
//         }}>
//           <button
//             type="button"
//             className=" position-absolute top-0 end-0 m-2"
//             onClick={handleClose}
//             style={{
//               backgroundColor: "transparent",
//               border: "none",
//               fontSize: "1.5rem",
//               color: "white",
//             }}
//           >
//             <FaTimes />
//           </button>
//           <img src={selectedImage} className="img-fluid w-100" alt="Product" title="Product" />
//         </Modal.Body>
//       </Modal>
//     </>
//   );
// }

// export default OurProducts2;


import React, { useState, useEffect } from "react";
import "../../assets/CSS/mainbanner.css";
import Slider from "react-slick";
import { Container, Row, Col, Modal } from "react-bootstrap";
import { FaTimes } from "react-icons/fa";
import axios from "axios";
import Heading from "../../components/Heading";
import { useNavigate } from "react-router-dom";

function OurProducts2() {
  const [products, setProducts] = useState([]);
  const [productsDetails, setProductDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await axios.get("/productdetails/get-productdetails");
        if (response.data.result) {
          setProductDetails(response.data.responseData);
        } else {
          setError("Failed to fetch product details");
        }
      } catch (err) {
        setError("Error fetching product details");
      }
    };
    fetchProductDetails();
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("carrousal/get-carrousal");
        if (response.data.result) {
          setProducts(response.data.responseData);
        } else {
          setError(response.data.message);
        }
      } catch (error) {
        setError("There was an error making the request!");
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  if (loading) return <p></p>;
  if (error) return <p></p>;

  // ⭐ MATCHING LOGIC ADDED HERE
  const activeProducts = products
    .filter((p) => p.isActive)
    .map((p) => {
      const matchedDetail = productsDetails.find(
        (d) =>
          d.productName.toLowerCase().trim() === p.title.toLowerCase().trim()
      );

      return {
        ...p,
        details: matchedDetail || null,
      };
    });

  const slidesToShow = 5;
  const slidesToScroll = 1;

  const settings = {
    speed: 500,
    centerMode: true,
    infinite: true,
    slidesToShow: slidesToShow,
    slidesToScroll: slidesToScroll,
    autoplay: true,
    speed: 3500,
    autoplaySpeed: 3500,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1600,
        settings: { slidesToShow: 5, slidesToScroll: 5, infinite: true, dots: true },
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 2, slidesToScroll: 2, initialSlide: 2 },
      },
      { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setSelectedImage(null);
  };

  return (
    <>
      <Container fluid className="my-5 py-lg-0 d-none d-lg-block">
        {activeProducts.length > 5 ? (
          <Slider {...settings}>
            {activeProducts.map((product) => (
              <div
                key={product.id}
                className="ourprdcard d-grid text-center justify-content-center p-4"
                // onClick={() => handleImageClick(product.img)}
                onClick={() => {
                  localStorage.setItem("prd", product.details?.id)
                  navigate(
                    `/product/${encodeURIComponent(
                      (product.details?.productName || product.title)
                        .toLowerCase()
                        .replace(/\s+/g, "-")
                    )}`
                  )
                }}

              >
                <img
                  src={product.img}
                  className="img-fluid ourprdimg w-100 h-100"
                  alt={product.title}
                  title={product.title}
                />
                <p
                  style={{ minHeight: "3rem" }}
                  className="shadow-sm"
                  onClick={() => {
                    localStorage.setItem("prd", product.details?.id)
                    navigate(
                      `/product/${encodeURIComponent(
                        (product.details?.productName || product.title)
                          .toLowerCase()
                          .replace(/\s+/g, "-")
                      )}`
                    )
                  }
                  }
                >
                  {product.title}
                </p>
              </div>
            ))}
          </Slider>
        ) : (
          <Row className="d-flex justify-content-center">
            {activeProducts.map((product) => (

              <Col key={product.id} xs={12} sm={6} md={2} className="mb-4">
                <div className="d-grid text-center justify-content-center">
                  <img
                    src={product.img}
                    className="img-fluid ourprdimg w-100 h-100"
                    alt={product.title}
                    title={product.title}
                    // onClick={() => handleImageClick(product.img)}
                    onClick={() => {
                      localStorage.setItem("prd", product.details?.id)
                      navigate(
                        `/product/${encodeURIComponent(
                          (product.details?.productName || product.title)
                            .toLowerCase()
                            .replace(/\s+/g, "-")
                        )}`
                      )
                    }}
                  />

                  <p
                    style={{ minHeight: "3rem" }}
                    className="shadow-sm"
                    onClick={() => {
                      localStorage.setItem("prd", product.details?.id)
                      navigate(
                        `/product/${encodeURIComponent(
                          (product.details?.productName || product.title)
                            .toLowerCase()
                            .replace(/\s+/g, "-")
                        )}`
                      )
                    }
                    }
                  >
                    {product.title}
                  </p>
                </div>
              </Col>
            ))}
          </Row>
        )}
      </Container >

      <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Body className="position-relative p-0 bg-transparent">
          <button
            type="button"
            className="position-absolute top-0 end-0 m-2"
            onClick={handleClose}
            style={{
              backgroundColor: "transparent",
              border: "none",
              fontSize: "1.5rem",
              color: "white",
            }}
          >
            <FaTimes />
          </button>
          <img
            src={selectedImage}
            className="img-fluid w-100"
            alt="Product"
            title="Product"
          />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default OurProducts2;
