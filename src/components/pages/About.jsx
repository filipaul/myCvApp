import React from "react";
import "../../App.css"
import "./About.css"


export default function About() {
    return (
    <>
<div class="section">
		<div class="container">
			<div class="content-section">
				<div class="title">
					<h1>About Me</h1>
				</div>
				<div class="content">
					<h2>Junior Front-End Web Developer</h2>
					<p>I'm a person oriented to self improvement, a good observer of the trends and 
                        I have good knowledge of the processes related to human interaction and communication. 
                        Also, I have a good understanding of the needs of people and a willingness to learn new things. 
                        Moreover, I like to get creative and to add a pinch of "art" in people’s lives.
                    </p>
					<div class="button">
						<a href="/cv/CV Filip Paul.pdf" download>Download My Resume</a>
					</div>
				</div>
				<div class="social">
                    <a href="https://www.linkedin.com/in/filip-paul-09b114116/" target="_blank" rel="noreferrer"><i class="fab fa-linkedin-in"></i></a>
					<a href="https://github.com/filipaul/SIIT-PAUL-FILIP" target="_blank" rel="noreferrer"><i class="fab fa-github"></i></a>
					<a href="https://www.facebook.com/pfilip19/" target="_blank" rel="noreferrer"><i class="fab fa-facebook-f"></i></a>
					<a href="https://www.instagram.com/filipauldesign/" target="_blank" rel="noreferrer"><i class="fab fa-instagram"></i></a>
				</div>
			</div>
			<div class="image-section">
				<img className="rotate" src="images/logoproject.png" alt="logo"></img>
			</div>
		</div>
	</div>
    </>
    )
}