import React from "react";
import "../../App.css"
import "./ThankYou.css"

export default function ThankYou() {

    return (
        <div class="thankyou-page">
    <div class="_header">
        <h1>Thank You!</h1>
        <i class="fas fa-check-circle fa-9x"></i>
    </div>
    <div class="_body">
        <div class="_box">
            <h2>
                <strong>The form was submitted successfully</strong> 
            </h2>
            <p>
                I am incredibly excited to have you here. You've been added to my list and you will hear from me soon.
            </p>
        </div>
    </div>
    <form class="_footer">
        <button className="btn btn-primary" formAction="./">Back to homepage</button>
    </form>
</div>
    )
}