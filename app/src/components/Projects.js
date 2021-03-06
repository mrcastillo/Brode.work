import React from "react";
import { Link } from "react-router-dom";
import { Grid, Row, Col } from "react-bootstrap";

class Projects extends React.Component {
    render(){
        return(
            <Grid fluid>
                <Row className={"header show-grid"}>
                    <Col xs={12} lg={12}>
                        <h1>Web Projects</h1>
                        <h3>Current</h3>
                    </Col>
                </Row>

                <Row className={"projects-container"}>
                    <Col id={"soundbox-project"} sm={12}>
                        <h1>Soundbox</h1>
                        <h3><Link to={"https://www.bigmischiefproductions.com/"}>Recording Studio Management Software</Link></h3>
                        
                        <p className="project-paragraph">Soundbox is a web application that will assist engineers with daily task that involve managing a studio. It will allow owners to properly manage client's music and 
                        give private access to their tracks anytime. It will show artist where their song is in the mastering process, and they will be able to interact with the studio by requesting
                        work for their songs, checking updates, even requesting studio time. This software is being tested and used with <span id={"bmp"}>Big Mischief Productions(BMP)</span> in the Bronx.</p>
                    </Col>

                    <Col id={"nba"}>
                        <h1>NBA</h1>
                        <h3>Cryptocurrency League</h3>
                        <p>A Web Application that is able to keep and show live NBA scores and details. This site is Cryptocurrency integrated, so if you think something is going to happen in the NBA, you can 
                        wager against someone else. This is mostly a backend project for me, as intregating Cryptocurrency to an application is no easy task. The application will also store a lot of information, 
                        including game scores and wagers. The application will be automated to payout depending on scrapped NBA data, </p>
                    </Col>

                    <Col id={"ig"}>
                        <h1>Instagram</h1>
                        <h3>for Business</h3>   
                        <p>I am currently under the development of tools for instagram business. This is a web application that will provide you with tools for growing multiple instagram accounts. 
                        We are currently testing and checking to see how useful these tools are and using them ourselves first before we release to the public.</p>
                    </Col>
                </Row>

                <Row className={"your-project-container"}>
                    <Col xs={12}>
                        <h1>Your Project</h1>
                        <p>Do you need a web developer to create or maintain a project?</p>
                        <p>Send us an inquiry and let us know what you're thinking.</p>
                        <button type={"submit"} className={"btn btn-primary"}>Contact</button>
                    </Col>
                </Row>
            </Grid>
        )
    }
}

export default Projects;