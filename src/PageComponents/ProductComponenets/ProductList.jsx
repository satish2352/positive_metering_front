import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Productlistimgs from './Productlistimgs';
import Hydraulic_Diaphragm_Pumps from './Hydraulic_Diaphragm_Pumps';
import Sanwich_Diaphragm_Pumps from './Sanwich_Diaphragm_Pumps';
import Mechanical_Diaphragm from './Mechanical_Diaphragm';

import '../../assets/CSS/productlist.css';
import Electronic_Dosing_Pump_ED from './Electronic_Dosing_Pump_ED';
import Electronic_Dosing_Pump_DD from './Electronic_Dosing_Pump_DD';
import Screw_Pumps from './Screw_Pumps';
import Chemical_Injection_Skid from './Chemical_Injection_Skid';
import Agitators from './Agitators';
import Side_Entry_Mixers from './Side_Entry_Mixers';
import Portable_Mixers from './Portable_Mixers';
import Flocculators from './Flocculators';
import Impellers from './Impellers';
//import './Productlist.css'

// import Card from 'react-bootstrap/Card';
// import ListGroup from 'react-bootstrap/ListGroup';

const ProductList = () => {
    const [selectedProduct, setSelectedProduct] = useState(null);

    const list = [
        { title: "Plunger Type Dosing Pumps", link: '/' },
        { title: "Hydraulic Diaphragm Pumps", link: 'Hydraulic-Diaphragm-Pumps' },
        { title: "Sanwich Diaphragm Pumps", link: 'Sanwich-Diaphragm-Pumps' },
        { title: "Mechanical Diaphragm", link: 'Mechanical-Diaphragm' },
        // { title: "Pumps", link: 'Pumps' },
        { title: "Electronic Dosing Pump ED", link: 'Electronic-Dosing-Pump-ED' },
        // { title: "Series 1", link: 'Series-1' },
        { title: "Electronic Dosing Pump DD", link: 'Electronic-Dosing-Pump-DD' },
        // { title: "Series 2", link: 'Series-2' },
        { title: "Screw Pumps", link: 'Screw-Pumps' },
        { title: "Chemical Injection Skid", link: 'Chemical-Injection-Skid' },
        { title: "Agitators", link: 'Agitators' },
        { title: "Side Entry Mixers", link: 'Side-Entry-Mixers' },
        { title: "Portable Mixers", link: 'Portable-Mixers' },
        { title: "Flocculators", link: 'Flocculators' },
        { title: "Impellers", link: 'Impellers' }
    ];

    const renderProductComponent = () => {
        switch (selectedProduct) {
            case 'Hydraulic-Diaphragm-Pumps':
                return <Hydraulic_Diaphragm_Pumps />;
            case 'Sanwich-Diaphragm-Pumps':
                return <Sanwich_Diaphragm_Pumps />;
            case 'Mechanical-Diaphragm':
                return <Mechanical_Diaphragm />;
            case 'Electronic-Dosing-Pump-ED':
                return <Electronic_Dosing_Pump_ED />;
            case 'Electronic-Dosing-Pump-DD':
                return <Electronic_Dosing_Pump_DD />;
            case 'Screw-Pumps':
                return <Screw_Pumps />;
            case 'Chemical-Injection-Skid':
                return <Chemical_Injection_Skid />;
            case 'Agitators':
                return <Agitators />;
            case 'Side-Entry-Mixers':
                return <Side_Entry_Mixers />;
            case 'Portable-Mixers':
                return <Portable_Mixers />;
            case 'Flocculators':
                return <Flocculators />;
            case 'Impellers':
                return <Impellers />;
            default:
                return <Productlistimgs />;
        }
    };

    return (
        <Container className='py-4'>
            <Row>
                <Col lg={4}>
                    {/* <Card>
                        <Card.Header style={{textAlign:'center', backgroundColor:'#e84c52', color:'white'}}><b>Products</b></Card.Header>
                        <ListGroup variant="flush">
                            {list.map((a, index) => (
                                <ListGroup.Item>
                                    <div key={index} onClick={() => setSelectedProduct(a.link)}>
                                        <p>{a.title}</p>
                                    </div>
                                </ListGroup.Item>

                            ))}
                        </ListGroup>
                    </Card> */}
                    <Container className='produclistbox'>
                        {/* <div className='produclistfttop' id='menu'>
                            <h5 className='text-white text-center py-3'>Products</h5>
                        </div> */}
                        <div className='py-3' id='menu'>
                            <h5 className='text-white text-center py-3'>Products</h5>
                            <hr></hr>
                            {list.map((a, index) => (
                                <div key={index} className='product-list-item' onClick={() => setSelectedProduct(a.link)}>
                                    <p className='produclistcontetst ps-3 mx-3 pb-2'>{a.title}</p>
                                </div>
                            ))}
                        </div>
                    </Container>
                </Col>
                <Col lg={8}>
                    {renderProductComponent()}
                </Col>
            </Row>
        </Container>
    );
};

export default ProductList;
