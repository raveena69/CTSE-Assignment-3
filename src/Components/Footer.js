import React from 'react';
import { Col, Container, Row, Footer } from 'mdbreact';
import '../css/Allcss.css'

export class FooterPage extends React.Component {
    render() {
        return (
            <Footer  className="page-footer font-small pt-4 mt-4 footerBack">
                <Container className="text-left">
                    <Row>
                        <Col md="6">
                            <h2 className="text-uppercase mt-3 font-weight-bold">Smart Buy online Shop</h2>
                            <div className="mb-5">
                                <b>Your favourite items are one click away.</b>
                            </div>
                            <p>Our mission is to deliver the most compelling shopping experience for our customers.</p>
                        </Col>
                        <Col md="4">
                            <h5 className="text-capitalize mb-4 mt-3 text-center font-weight-bold">Quick Links</h5>
                            <ul className="list-unstyled text-center">
                                <li><a href="/">Home</a></li>
                                <li><a href="/contact-us">Contact Us</a></li>
                                <li><a href="/products">Products</a></li>
                                <li><a href="/about-us">About Us</a></li>
                                <li><a href="/login">Log In</a></li>
                            </ul>
                        </Col>
                        <Col md="2">
                            <div className="text-center pb-3 pt-2">
                                <ul className="list-unstyled list-inline mb-0">
                                    <li className="list-inline-item">
                                        <h3 className="mb-1">Register Now !</h3>
                                    </li>
                                    <li className="list-inline-item mt-3"><a href="#" className="btn btn-danger btn-rounded">Sign up!</a></li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <div className="clearfix w-100 d-md-none line" style={{ backgroundColor: 'black', height : "10px", width : "100%" }}></div>
                <div className="text-center">
                    <ul className="list-unstyled list-inline">
                        <li className="list-inline-item"><a className="btn-floating btn-sm btn-fb mx-1"><i class="fab fa-facebook"></i></a></li>
                        <li className="list-inline-item"><a className="btn-floating btn-sm btn-tw mx-1"><i class="fab fa-twitter"></i></a></li>
                        <li className="list-inline-item"><a className="btn-floating btn-sm btn-gplus mx-1"><i class="fab fa-google-plus-g"></i></a></li>
                        <li className="list-inline-item"><a className="btn-floating btn-sm btn-li mx-1"><i class="fab fa-youtube"></i></a></li>
                        <li className="list-inline-item"><a className="btn-floating btn-sm btn-dribbble mx-1"><i class="fab fa-instagram"></i></a></li>
                    </ul>
                </div>
                <div className="footer-copyright text-center">
                    <Container fluid>
                        &copy; {(new Date().getFullYear())} Copyright: <a href="#"> Smart Buy</a>
                    </Container>
                </div>
            </Footer>
        );
    }
}

export default FooterPage;