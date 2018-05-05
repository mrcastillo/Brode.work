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
            message: "Hello,\n\nI need help understanding how technology can make me more beautiful.\n\nRegards\nMarilyn Monroe"
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
                        <h1>Anthony Castillo</h1>
                        <h3>Application's Engineer</h3>
                    </Col>
                </Row>

                <Row className={"main show-grid"}>
                    <Col>
                        <Carousel>
                            <Carousel.Item>
                                <img width={900} height={500} alt="900x500" src="https://raw.githubusercontent.com/MrRio/vtop/master/docs/example.gif" />
                                <Carousel.Caption>
                                    <h3 id={"code"}>Solutions Expert</h3>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img width={900} height={500} alt="900x500" src={keyboard} />
                                <Carousel.Caption>
                                    <h3 id={"wtc"}>Technology Consultant</h3>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img width={900} height={500} alt="900x500" src="https://www.som.com/FILE/14790/7worldtrade_1400x800_davidsundberg_esto_03jpg.jpg" />
                                <Carousel.Caption>
                                    <h3 id={"code"}>7 World Trade Center Office</h3>
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
                        <h3>Application Engineer</h3>
                        
                        <p>I spend most of my time working for my company IPsoft in the Financial District of Manhattan in World Trade Center. Here I am able to use all of the skills that
                        I have learned in technology to benefit our clients. Our team deals with high critical financial applications in a fast spaced environment. We are responsible for the
                        management of these applications, from deployments to troubleshooting in production. Keeping up with the demands of finance can be overwhelming but fun at times. However
                        I still manage to work on my own projects outside of work.
                        </p>
                        
                        <div className={"skill-badges"}>
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
            </Grid>
        )
    }
}

export default Home;