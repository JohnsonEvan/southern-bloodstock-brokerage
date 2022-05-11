import React from "react"
import "./MessageSeller.css"
function MessageSeller (){
    return (
    <form action="https://formsubmit.co/southernbloodstockbrokerage@gmail.com" method="POST">
        <h1> Please fill out this form</h1>
        <input class="MessageSeller" type="text" name="name" placeholder="name" required/>
        <br/>
        <input class="MessageSeller" type="email" name="email" placeholder="email" required/>
        <br/>
        <textarea class="MessageSeller" type="message" name="message" placeholder="Write your message" required/>
        <br/>
        <button class="MessageSeller" type="submit">Send</button>
    </form>)
      
   
}
export default MessageSeller