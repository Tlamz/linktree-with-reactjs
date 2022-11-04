import '../App.css';
import React from 'react';
import { Footer } from '../components/Footer.component';

function Contact() {
    return (
      <div className="contact-form">
        <header>
          <h1>Contact Me</h1>
          <p>Hi there, contact me to ask me about anything you have in mind.</p>
        </header>
        <form action="">
          <div className="fullname-div">
            <div>
              <label htmlFor="first_name">First Name</label>
              <input
                type="text"
                id="first_name"
                placeholder="Enter your first name"
                required
              />
            </div>
            <div>
              <label htmlFor="last_name">Last Name</label>
              <input
                type="text"
                id="last_name"
                placeholder="Enter your last name"
                required
              />
            </div>
          </div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="yourname@email.com"
            required
          />
          <label htmlFor="message">Message</label>
          <textarea
            name=""
            id="message"
            cols="30"
            rows="10"
            placeholder="Send me a message and I'll reply you as soon as possible..."
            required
          ></textarea>
          <div className='accept'>
            <input type="checkbox" id="" required />
            <span>
              You agree to providing your data to Tlamz who may contact you.
            </span>
          </div>
          <button type="submit" id="btn__submit">
            Send message
          </button>
        </form>
        <Footer />
      </div>
    );
}

export default Contact