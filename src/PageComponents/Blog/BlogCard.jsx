import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import Heading from '../../components/Heading';
import img1 from "../../assets/img/blog/Rectangle 113.png";

const blogData = [
    {
        title: "Phosphate Dosing in propane Dehydrogenation PDH Unit integrated with Polypropylene PP Unit",
        text: "Propylene can be produced as a by-product in the Ethylene Plants or Oil Refining processes.But the demand of Propylene is much higher as compared to the produce that is available in the above sources.",
        img: img1,
        bgColor: "#EE585D"
    },
    {
        title: "Phosphate Dosing in propane Dehydrogenation PDH Unit integrated with Polypropylene PP Unit",
        text: "Propylene can be produced as a by-product in the Ethylene Plants or Oil Refining processes.But the demand of Propylene is much higher as compared to the produce that is available in the above sources.",
        img: img1,
        bgColor: "#CDCDCD"
    },
    {
        title: "Phosphate Dosing in propane Dehydrogenation PDH Unit integrated with Polypropylene PP Unit",
        text: "Propylene can be produced as a by-product in the Ethylene Plants or Oil Refining processes.But the demand of Propylene is much higher as compared to the produce that is available in the above sources.",
        img: img1,
        bgColor: "#727171"
    },
    {
        title: "Phosphate Dosing in propane Dehydrogenation PDH Unit integrated with Polypropylene PP Unit",
        text: "Propylene can be produced as a by-product in the Ethylene Plants or Oil Refining processes.But the demand of Propylene is much higher as compared to the produce that is available in the above sources.",
        img: img1,
        bgColor: "#EE585D"
    }
];

const BlogCard = () => {
    return (
        <>
            <section>
                <Heading heading={"Blog"} />
                <Container fluid>
                    <Row>
                        {blogData.map((blog, index) => (
                            <Col xl={3} key={index} className='mb-4'>
                                <Card className='border-0'>
                                    <Row className={`text-white ${index % 2 === 1 ? 'flex-lg-column-reverse' : 'd-lg-grid'}`}>
                                        <Col xl={12} className='pe-0 ps-0'>
                                            <Card.Img variant="top" src={blog.img} />
                                        </Col>
                                        <Col xl={12} className='ps-0' style={{ background: blog.bgColor }}>
                                            <Card.Body className='pt-4' style={{ background: blog.bgColor }}>
                                                <Card.Title style={{
                                                    fontWeight: "600",
                                                    fontSize: "1rem",
                                                    letterSpacing: "1.2px"
                                                }}>{blog.title}</Card.Title>
                                                <Card.Text style={{ fontSize: "0.72rem" }}>
                                                    {blog.text}
                                                </Card.Text>
                                                <Button variant="transparant" className='text-white py-2 mt-xl-3' style={{ border: "3px solid white", borderRadius: "30px" }}>Read More</Button>
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
}

export default BlogCard;
