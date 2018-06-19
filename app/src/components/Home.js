import React from "react";
import { Link } from "react-router-dom";
import { Carousel } from 'react-bootstrap';
import { Grid, Row, Col } from "react-bootstrap";

import keyboard from "../img/keyboard.jpg";
import computer from "../img/web-development_2.png";
class Home extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            message: "Hello,\n\nI need an amazing website or web application for my business!\n\nThanks,\nBusiness Partner"
        }

        this._onTextChange = this._onTextChange.bind(this);
    }


    _onTextChange(event){
        let value = event.target.value;

        this.setState = {
            message: value
        }
    }

    render(){
        return(
            <Grid fluid>
                <Row className={"header show-grid"}>
                    <Col xs={12} lg={12}>
                        <h1>Application Portfolio</h1>
                        <h3>Anthony Castillo</h3>
                    </Col>
                </Row>

                <Row className={"main show-grid"}>
                    <Col>
                        <Carousel>
                            <Carousel.Item>
                                <img width={900} height={500} alt="900x500" src={keyboard} />
                                <Carousel.Caption>
                                    <h3 id={"wtc"}>Modern Web Development</h3>
                                    <p>Using some of the newest tools and languages</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img width={900} height={500} alt="900x500" src="https://raw.githubusercontent.com/MrRio/vtop/master/docs/example.gif" />
                                <Carousel.Caption>
                                    <h3 id={"code"}>Applications Expert</h3>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img width={900} height={500} alt="900x500" src="https://www.som.com/FILE/14790/7worldtrade_1400x800_davidsundberg_esto_03jpg.jpg" />
                                <Carousel.Caption>
                                    <h3 id={"wtc"}>7 World Trade Center</h3>
                                    <p>IPsoft, Expert Managed Systems</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                </Row>


                <Row className={"quote"}>
                    <Col lg={12}>
                        <blockquote className={"blockquote"}>
                            <p className={"mb-0 test"}>I have no idols. I admire work, dedication and competence.</p>
                            <footer className="blockquote-footer"><cite title="Source Title">Ayrton Senna</cite></footer>
                        </blockquote>
                    </Col>
                </Row>


                <Row className={"skills"} style={{"border-top": "0.75px solid black"}}>
                    
                    <Col lg={12} className={"pc"} md={12} sm={12} xs={12}>
                        <img src={computer} height={200} />
                    </Col>
                    
                    <Col lg={12} sm={12} md={12} xs={12} className={"tool-box"}>
                        <h3>Design </h3>
                        
                        <div className={"info-box"}>
                            <p>Web Development with NodeJS.<br/><br/><kbd>Issue bad issue</kbd> .</p>
                        </div>

                        <div className={"skill-badges"}>
                            <span className="badge badge-pill badge-primary">JavaScript</span>
                            <span className="badge badge-pill badge-primary">NodeJS</span>
                            <span className="badge badge-pill badge-primary">MySQL</span>
                            <span className="badge badge-pill badge-primary">MongoDB</span>
                            <span className="badge badge-pill badge-primary">WebSphere</span>
                            <span className="badge badge-pill badge-primary">WebLogic</span>
                            <span className="badge badge-pill badge-primary">WebSeal</span>
                            <span className="badge badge-pill badge-primary">JBoss</span>
                            <span className="badge badge-pill badge-primary">Tomcat</span>
                            <span className="badge badge-pill badge-primary">Linux</span>
                            <span className="badge badge-pill badge-primary">Apache/NGINX</span>
                        </div>
                        
                        <hr style={{ background: "white" }} />
                    </Col>
                </Row>
                <Row className={"form-container"}>
                    <form>
                        <Col className="form-group">
                            <h1>Need a Web Developer?</h1>
                            <label htmlFor="name" id={"name"}>My Name</label>
                            <input type="text" className={"form-control"} id={"name"} placeholder={".."} />
                        </Col>
                        <Col className="form-group">
                            <label htmlFor="email">Email Address</label>
                            <input type="email" className={"form-control"} id={"email"} placeholder={"...@gmail.com"} />
                        </Col>
                        <Col className="form-group">
                            <label htmlFor="message">Inquiry</label>
                            <textarea onChange={this._onTextChange} className={"form-control"} id={"message"} rows={"7"} cols={"59"} placeholder={this.state.message}></textarea>
                        </Col>
                        <Col className="form-group">
                            <input type="submit" className={"form-control"} id={"email"} placeholder={"mm@icon.com"} />
                        </Col>
                    </form>
                </Row>
            </Grid>
        )
    }
}

export default Home;