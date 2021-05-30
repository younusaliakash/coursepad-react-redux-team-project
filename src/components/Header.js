import { Carousel } from 'react-bootstrap';
import React from 'react';
import './Header.css';
import banner1 from '../images/banner1.jpg';
import banner2 from '../images/banner2.png';
import banner3 from '../images/banner3.jpg';

const Header = () => {
    return (
        <div className="header">
            <div className="header-container">
                <div className="row">
                    <div className="col-md-5 header-title">
                        <h1>Welcome </h1>
                        <h2>To</h2>
                        <h1>Course Mania</h1>
                    </div>
                    <div className="col-md-7">
                        <Carousel>
                            <Carousel.Item>
                                <div className="header-img">
                                    <img
                                        className="d-block w-100"
                                        src={banner1}
                                        alt="First slide"
                                    />
                                </div>
                                <Carousel.Caption>
                                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div className="header-img">
                                    <img
                                        className="d-block w-100"
                                        src={banner2}
                                        alt="Second slide"
                                    />
                                </div>
                                <Carousel.Caption>                          
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div className="header-img">
                                    <img
                                        className="d-block w-100"
                                        src={banner3}
                                        alt="Third slide"
                                    />
                                </div>
                                <Carousel.Caption>
                                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
