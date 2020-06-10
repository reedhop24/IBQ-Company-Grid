import React from 'src/components/node_modules/src/components/node_modules/react';
import {Container, Row, Col} from 'src/components/node_modules/react-bootstrap';
import Image from 'src/components/node_modules/react-image-resizer';
var imageCheck = require('src/images/check-icon-vector-10850982.jpg');
var companyImage;
const GridContainer = (props) => {
        const availableProducts = ['Personal Auto', 'Personal Home', 'Commercial BOP', 'Commercial BAP', 'Commercial WC'];
        return(
            <Container>
                <Row >
                    <Col xs={3} md={1} style={{justifyContent: 'center', padding: '10px'}}>Company</Col>
                    {availableProducts.map((elem) => {
                        return <Col xs={3} md={1} style={{justifyContent: 'center', padding: '10px'}}>{elem}</Col>
                    })}
                </Row>
                <br></br>
                        {props.products.map((elem) => {
                            return <Row>
                                <Col xs={3} md={1} style={{justifyContent: 'left'}}>
                                    {elem.Image ? <Image style={{right:'10px'}} src={require('../images'+elem.Image)} height={70} width={70}/> : null}
                                </Col>
                                {availableProducts.map((innerElem) => {
                                    if(elem.Products.hasOwnProperty(innerElem)) {
                                        return <Col xs={3} md={1} style={{justifyContent: 'center', padding: '10px'}}>
                                            {elem.Image ? <Image src={imageCheck} height={50} width={50}/> : null}
                                        </Col>
                                    } else {
                                        return <Col xs={3} md={1} style={{justifyContent: 'center'}}>
                                        </Col>
                                    }
                                })}
                            </Row>
                        })}
            </Container>
        )
}

export default GridContainer;