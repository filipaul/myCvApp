import React from "react";
import "./Contact.css"
import emailjs from "emailjs-com"
import "./Contact.css"
import Particles from 'react-tsparticles';
import particlesConfig from "../../config/configParticles";
import { useHistory } from 'react-router-dom';


const Mailer = () => {
        function sendEmail(e){
            emailjs.sendForm(
                "service_24x0h0u",
                 "template_7ikml7m", 
                 e.target, 
                 "user_8Q6wC5KWrP6z2Nf3TvDXm" 
                 ).then(res=>{
                    console.log(res);
                 }).catch(err=> console.log(err));
        }

        let history = useHistory();
  
    const redirect = (e) => {
        e.preventDefault();
      history.push('thank-you')
    }
    return (
        <div className="border-0"
        style={{marginTop:"200px",
        width: "100%",
        zIndex: "-1",
        backgroundColor: "rgb(26, 23, 23)",
        backgroundPosition: "center",
        backgroundSize: "cover",
        }}
        >
            <Particles className="particles" height="100vh" width="100vw" params={particlesConfig} />
            <h1 style={{marginTop: "25px", color: "white"}}>Contact Me</h1>
            <form className="row" style={{ margin:"25px 85px 75px 100px"}} onSubmit={sendEmail} method="get"> 
            <label style={{color: "white"}}>Name</label>
            <input type="text" name="name" className="form-control" required/>

            <label style={{color: "white"}}>Email</label>
            <input 
            type="email" 
            name="user_email" 
            className="form-control" 
            required />

            <label style={{color: "white"}}>Message</label>
            <textarea name="message" rows="4" required/>
            <input 
                type="submit" 
                value="Submit" 
                className="form-control btn"
                style={{marginTop: "30px", backgroundColor:' orange'}}
                onClick={redirect}
                />
            </form>    
        </div>
    );
};

export default Mailer;