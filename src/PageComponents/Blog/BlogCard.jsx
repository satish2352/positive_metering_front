import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import Heading from "../../components/Heading";
import img1 from "../../assets/img/blog/Blog-Cart-img-1.png";
import img2 from "../../assets/img/blog/Blog-Cart-img-2.png";
import img3 from "../../assets/img/blog/Blog-Cart-img-3.png";
import img4 from "../../assets/img/blog/Blog-Cart-img-4.png";
import ResponsiveImage from "../../pages/ResponsiveImage";
import imgmobile from "../../assets/img/services/mobileview.png";
import imgtop from "../../assets/img/services/diskimg.png";

//hi edit 04/07/24  
// test1
const blogData = [
  {
    title: "Plastic to diesel",
    text: "Feeling Proud to contribute successfully in the first Plant in India to convert Diesel from Plastic. Dosing Pumps specially designed & manufactured by my engineers (@Positive Metering Pumps India Pvt Ltd ) for this plant established in Dehradun, India is being used for an important role. Many thanks to Technip FMC for the opportunity.",
    img: img1,
    bgColor: "#EE585D",
  },
  {
    title: "Phosphate Dosing in propane Dehydrogenation PDH Unit integrated with Polypropylene PP Unit",
    text: "Propylene can be produced as a by-product in the Ethylene Plants or Oil Refining processes. But the demand of Propylene is much higher as compared to the produce that is available in the above sources.",
    img: img2,
    bgColor: "#CDCDCD",
  },
  {
    title: "Wash Filthy Water",
    text: "We are a company into manufacturing of: 1) Chemical Dosing Pumps 2) Skid Mounted Chemical Dosing system 3) Progressive Cavity Screw Pumps 4) High-Pressure Triplex Plunger Pumps 5) Electronic Dosing Pumps 6) Stirrers / Agitators We are supplying to all the well-known EPC companies in the field of Water & Waste Water Treatment like BHEL, L&T, VA Tech ...",
    img: img3,
    bgColor: "#727171",
  },
  {
    title: "For Sonatrach Refinery, Algeria",
    text: "Sonatrach Refinery is the national state-owned oil company of Algeria. Founded in 1963, it is known today to be the largest company in Africa with 154 subsidiaries, and is often referred to as the first African oil “major”.",
    img: img4,
    bgColor: "#EE585D",
  },
];

const BlogCard = () => {
  return (
    <>
      <ResponsiveImage mobileSrc={imgmobile} desktopSrc={imgtop} />
      <section>
        <Heading heading="Blog" />
        <Container fluid>
          <Row className=" px-4">
            {blogData.map((blog, index) => (
              <Col
                key={index}
                xl={3}
                lg={3}
                md={6}
                sm={6}
                className="mb-4"
              >
                <Card className=" border-0 h-100">
                  <Row
                    className={` text-white ${
                      index % 2 === 1 ? 
                      "flex-lg-column-reverse" :
                       "d-lg-grid"
                    }`
                    
                    }
                  >
                    <Col xs={12} className="pe-0 ps-0 bg-light">
               
                    
                      <Card.Img
                        variant="top"
                        src={blog.img}
                        className="bg-light"
                      />
                    </Col>
                    <Col
                      xs={12}
                      className="ps-0"
                      style={{ background: blog.bgColor }}
                    >
                      <Card.Body
             
                        className="pt-4 pb-4 d-flex flex-column justify-content-between"
                        style={{
                          background: blog.bgColor,
                     minHeight:"342px",
                    
                     
                        }}
                      >
                        <div>
                          <Card.Title
                            className="blogCardTitle fw-bolder pt-3"
                            style={{
                              fontWeight: "600",
                              fontSize: "0.95rem",
                              letterSpacing: "1.2px",
                            }}
                          >
                            {blog.title}
                          </Card.Title>
                          <Card.Text
                            className="blogCardDesc pt-3"
                            style={{ fontSize: "0.85rem" }}
                          >
                            {blog.text}
                          </Card.Text>
                        </div>
                        <div className="d-flex justify-content-start">
                          <Button
                            variant="transparent"
                            className="text-white py-2 mt-xl-3 align-self-end fw-bolder"
                            style={{
                              border: "3px solid white",
                              borderRadius: "30px",
                            }}
                          >
                            Read More
                          </Button>
                        </div>
                      </Card.Body>
                    </Col>
                  </Row>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default BlogCard;













//shubham sir original code
  //   return (
  //     <>
  //       <ResponsiveImage mobileSrc={imgmobile} desktopSrc={imgtop} />
  //       <section>
  //         <Heading heading={"Blog"} />
  //         <Container fluid>
  //           <Row>
  //             {blogData.map((blog, index) => (
  //               <Col xl={3} key={index} className="mb-4 ">
  //                 <Card className="border-0">
  //                   <Row
  //                     className={`text-white ${
  //                       index % 2 === 1 ? "flex-lg-column-reverse" : "d-lg-grid"
  //                     }`}
  //                   >
  //                     <Col xl={12} className="pe-0 ps-0 bg-light">
  //                       <Card.Img variant="top" src={blog.img} className="bg-light" />
  //                     </Col>
  //                     <Col
  //                       xl={12}
  //                       className="ps-0"
  //                       style={{ background: blog.bgColor }}
  //                     >
  //                       <Card.Body
  //                         className="pt-4"
  //                         style={{ background: blog.bgColor }}
  //                       >
  //                         <Card.Title
  //                           style={{
  //                             fontWeight: "600",
  //                             fontSize: "1rem",
  //                             letterSpacing: "1.2px",
  //                           }}
  //                         >
  //                           {blog.title}
  //                         </Card.Title>
  //                         <Card.Text style={{ fontSize: "0.72rem" }}>
  //                           {blog.text}
  //                         </Card.Text>
  //                         <Button
  //                           variant="transparant"
  //                           className="text-white py-2 mt-xl-3"
  //                           style={{
  //                             border: "3px solid white",
  //                             borderRadius: "30px",
  //                           }}
  //                         >
  //                           Read More
  //                         </Button>
  //                       </Card.Body>
  //                     </Col>
  //                   </Row>
  //                 </Card>
  //               </Col>
  //             ))}
  //           </Row>
  //         </Container>
  //       </section>
  //     </>
  //   );
