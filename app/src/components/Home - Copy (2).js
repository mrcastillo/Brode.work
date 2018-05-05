import React from "react";
import { Link } from "react-router-dom";
import { Carousel } from 'react-bootstrap';
import { Grid, Row, Col } from "react-bootstrap";

import keyboard from "../img/keyboard.jpg";

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
                        <h3>Application Administrator and Computer Programmer</h3>
                    </Col>
                </Row>

                <Row className={"main show-grid"}>
                    <Col>
                        <Carousel>
                            <Carousel.Item>
                                <img width={900} height={500} alt="900x500" src="https://raw.githubusercontent.com/MrRio/vtop/master/docs/example.gif" />
                                <Carousel.Caption>
                                    <h3 id={"keyboard"}>Professional Programmer</h3>
                                    <p id={"keyboard"}>Javascript / NodeJS</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img width={900} height={500} alt="900x500" src={keyboard} />
                                <Carousel.Caption>
                                    <h3 id={"wtc"}>7 World Trade Center</h3>
                                    <p id={"wtc"}>250 Greenwich Street.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img width={900} height={500} alt="900x500" src="https://www.som.com/FILE/14790/7worldtrade_1400x800_davidsundberg_esto_03jpg.jpg" />
                                <Carousel.Caption>
                                    <h3 id={"code"}>7 World Trade Center</h3>
                                    <p id={"code"}>250 Greenwich Street.</p>
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
                    
                    <Col lg={6} sm={12}>
                            <div className={"tool-box"}>
                                
                                <h3>IPsoft - Web/Application Administrator</h3>
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
                            </div>

                    </Col>
                    <Col lg={6} sm={12}>
                            <div className={"tool-box"}>
                                
                                <h3>Backend Javascript Developer</h3>
                                <p>I am a professional Javascript Developer and am able to use this programming language to my advantage. I have first taken Javascript serious in 2011 but my Web Development experience
                                goes back to 2007 when I was using PHP to let people make accounts for my private game server. With the addition of NodeJS, Javascript has become a extremely powerful tool for the backend.
                                I am able to perform backend functionality to websites and also troubleshoot the backend of many Applications with IPsoft. </p>
                                <div className={"skill-badges"}>
                                    <span className="badge badge-pill badge-primary">NodeJS</span>
                                    <span className="badge badge-pill badge-primary">EcmaScript 6</span>
                                </div>

                                <hr style={{ background: "white" }} />
                            </div>
                    </Col>
                </Row>
                <Row className={"skills"}>
                    <Col lg={6} sm={12}>
                            <div className={"tool-box"}>
                                <h3>FrontEnd Development with ReactJS</h3>
                                <p>Nowadays some of the best way to render the frontend are frameworks such as ReactJS made by Facebook. I have always been a backend developer but am now getting started with website design.
                                Using the ReactJS framework I am able to do more with the frontend of websites and currently learning more about design. I am currently working on frontend projects to better my design skills
                                so that I can tie it perfectly together with my solid backend skills. This website is running ReactJS on its frontend.</p>
                                <div className={"skill-badges"}>
                                    <span className="badge badge-pill badge-primary">CSS</span>
                                    <span className="badge badge-pill badge-primary">SASS</span>
                                    <span className="badge badge-pill badge-primary">Ajax</span>
                                </div>
                                <hr style={{ background: "white" }} />
                            </div>
                    </Col>
                    <Col lg={6} sm={12}>
                            <div className={"tool-box"}>
                                <h3>MySQL</h3>
                                <p>A database is part of the backend and MySQL is the standard for relational databases. With databases we are able to store data from our users and make powerful applications possible.
                                Having </p>
                                <div className={"skill-badges"}>
                                    <span className="badge badge-pill badge-primary">Relational Database</span>
                                </div>
                                <hr style={{ background: "white" }} />
                            </div>
                    </Col>
                </Row>
            </Grid>
        )
    }
}

export default Home;

/*
<div className={"menu"}>
    <ul id={"menu-list"}>
        <li style={{ "marginLeft": "-1.5em" }}> <Link id={"link"} to={"/"}>Home</Link></li>
        <li><Link id={"link"} to={"/projects"}>Projects</Link></li>
        <li><Link id={"link"} to={"/blog"}>My Blog</Link></li>
    </ul>
</div>
*/

/* 
<div className="progress" id={"progress"}>
    <div className="progress-bar" role="progressbar" style={{width: "90%"}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
</div>
*/


/*
    <div className={"form-container row"}>
        <form>
            <div className="form-group">
                <label htmlFor="name" id={"name"}>Name</label>
                <input type="text" className={"form-control"} id={"name"} placeholder={"Marilyn Monroe"} />
            </div>
            <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input type="email" className={"form-control"} id={"email"} placeholder={"mm@icon.com"} />
            </div>
            <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea onChange={this._onTextChange} className={"form-control"} id={"message"} rows={"7"} cols={"59"} placeholder={this.state.message}></textarea>
            </div>
            <div className="form-group">
                <input type="submit" className={"form-control"} id={"email"} placeholder={"mm@icon.com"} />
            </div>
        </form>
    </div>
*/



/*
    <div id="demo" className="carousel slide" data-ride="carousel">
        <ul className="carousel-indicators">
            <li data-target="#demo" data-slide-to="0" className="active"></li>
            <li data-target="#demo" data-slide-to="1"></li>
            <li data-target="#demo" data-slide-to="2"></li>
        </ul>
        <div className="carousel-inner">
            <div className="carousel-item active">
                <img className={"img-fluid"} src={"https://www.som.com/FILE/14793/7worldtrade_1400x800_davidsundberg_esto_04jpg.jpg"} alt={"7worldtrade"} />
            </div>
            <div className="carousel-item">
                <img className={"img-fluid"} src={"https://cdn.vox-cdn.com/thumbor/gjmQ-JrhebSdWGBOB84oAqwOY8E=/0x0:2000x1333/1200x675/filters:focal(840x507:1160x827)/cdn.vox-cdn.com/uploads/chorus_image/image/56614485/170909_17_10_06_5DSR7869.0.jpg"} alt={"7worldtrade"} />
            </div>
            <div className="carousel-item">
                <img className={"img-fluid"} src={"https://www.som.com/FILE/14793/7worldtrade_1400x800_davidsundberg_esto_04jpg.jpg"} alt={"7worldtrade"} />
            </div>
        </div>
        <a className="carousel-control-prev" href="#demo" data-slide="prev">
            <span className="carousel-control-prev-icon"></span>
        </a>
        <a className="carousel-control-next" href="#demo" data-slide="next">
            <span className="carousel-control-next-icon"></span>
        </a>
    </div>
*/