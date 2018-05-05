import React from "react";
import { Link } from "react-router-dom";
import { Grid, Row, Col } from "react-bootstrap";

class Blog extends React.Component {
    render(){
        return(
            <Grid>
                <Row className={"header"}>
                    <h3>Personal Blog</h3>
                    <br />
                    <p>Using this space to write about the crazy and fast paced world of technology.</p>
                    <br />
                    <p>For now please enjoy some stand up comedy.</p>
                </Row>
                <Row className={"blog-video"}>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/CeEiq_C6j3c" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                </Row>
            </Grid>
        )
    }
}

export default Blog;