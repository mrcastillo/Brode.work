import React from "react";
import { Link } from "react-router-dom";

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
            <div>
                <div className={"construction"}>
                    <h1>Currently under construction</h1>
                </div>

                <div className={"menu"}>
                    <ul id={"menu-list"}>
                        <li style={{ "marginLeft": "-1.5em" }}> <Link id={"link"} to={"/"}>Home</Link></li>
                        <li><Link id={"link"} to={"/projects"}>Projects</Link></li>
                        <li><Link id={"link"} to={"/blog"}>My Blog</Link></li>
                    </ul>
                </div>

                <div className={"header"}>
                    <h1>Bro's Computer Expertise and Web Dev</h1>
                    <h3>Application Administrator and Programmer</h3>
                    <h3>7 World Trade Center</h3>
                </div>

                <div className={"main"}>
                    <img className={"img-fluid"} src={"https://www.som.com/FILE/14793/7worldtrade_1400x800_davidsundberg_esto_04jpg.jpg"} alt={"7worldtrade"}/>
                </div>


                <div className={"quote"}>
                    <blockquote className={"blockquote"}>
                        <p className={"mb-0 test"}>I have no idols. I admire work, dedication and competence.</p>
                        <footer className="blockquote-footer"><cite title="Source Title">Ayrton Senna</cite></footer>
                    </blockquote>
                </div>


                <div className={"skills row"}>
                    <div className={"col-lg-12 box"}>
                        <h1 id={"skill"}>What I Do</h1>


                        <div className={"tool"}>
                            <hr style={{ background: "white" }} />
                            <h3>Expert Advice, Information, and Converstations on Technology</h3>
                            <p>Bro has been involved with Technology since the 1990s. I was always curious about computers and knew that they were going to
                            be a huge thing in our lifetime, and that we would eventually rely on them. I got involved early after realizing that I spent
                            over 5 hours on the computer at a time when possible. I did the calculations of my time spent on a computer times the minimum wage and
                            as a teen I knew that I should make a career out of this, knowing the product of this equatation was almost worse case senario.</p>

                            <p>Nowadays I spend most of my time working for an expert systems management company, and I'm responsible for managing a load of
                            applications in the financial district of Manhattan. I enjoy what I do and love to speak about anything related to technology.
                            A lot of people are also interested in computers or are getting into them as well. How does the internet work? How can 100 people play
                            Fortnite? How can I start an online business? How does Facebook know what to sell me based on my own dreams? These are questions that I
                            get asked a lot as a computer professional. Send me an inquery now, and we can begin to talk about your computer questions and desires.
                            </p>
                        </div>
                    </div>

                    <div className={"col-xs-12 col-md-6 col-lg-12 box"}>
                        <h1 id={"skill"}>Web Development, Automation</h1>
                        
                        <div className={"tool"}> 
                            <h2>Modern Web Development</h2>
                            <hr style={{background: "white"}}/>
                            
                            <h3>Javascript</h3>
                                <span className={"skill-badges"}>
                                    <span className="badge badge-pill badge-primary">NodeJS</span>
                                    <span className="badge badge-pill badge-primary">EcmaScript 6</span>
                                </span>

                                <p>Even though I was introduced to programming with PHP and it taught me about web languages, I could still not ignore Javascript.
                                Back then it was a client-side language and I knew it had a lot of limitations. Nowadays NodeJS ends these limitations and allows you
                                to many amazing things on the backend, and still allow you to use the same language of the frontend web, Javascript.</p>

                            <h3>ReactJS</h3>
                                <span className={"skill-badges"}>
                                    <span className="badge badge-pill badge-primary">CSS</span>
                                    <span className="badge badge-pill badge-primary">SASS</span>
                                    <span className="badge badge-pill badge-primary">Ajax</span>
                                </span>
                                <p>Nowadays some of the best way to render the frontend are frameworks such as ReactJS. React introduces and provides many new features
                                for a developer to render the DOM(Document Object Module), this is an object; think of it like a box that contains everything your browser
                                needs to display a webpage. It uses JSX (Javascript XML) which allows you to write HTML almost like you were programming
                                in Javascript. Before ReactJS I was loading HTML with a rendering engine in ExpressJS with EJS. </p>  
                            <h3>MySQL</h3>
                            <span className={"skill-badges"}>
                                <span className="badge badge-pill badge-primary">Relational Database</span>
                            </span>
                                <p>A database is part of the backend and MySQL is the standard for relational databases. With it we can store information. I find that for most 
                                projects a relational database makes more sense. </p>
                            <h3>MongoDB</h3>
                            <span className={"skill-badges"}>
                                <span className="badge badge-pill badge-primary">Document Database</span>
                            </span>
                                <p>MongoDB is a document based database. Its easier to use with Javascript as it is works easily with JSON, I find that a 
                                document-oriented database is useful for certain sites. It's usually the first database that Node developers learn as there 
                                are a ton of tutorials for it. </p>
                        </div>
                    </div>
                </div>

               
            </div>
        )
    }
}

export default Home;

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