import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
const ContactScreen = () => {
  return (
    <div>
      <Header />
      <section id="page-header" className="about-header">
    
      </section>

      <section id="contact-details" className="section-p1">
        <div className="details">
          <span>GET IN TOUCH</span>
          <h2>Visit one of our agency location or contact us today</h2>
          <h3>Head Office</h3>
          <div>
            <li>
              <i className="fa-regular fa-map"></i>
              <p>56 Glassford Street Glasgow 1UL New York</p>
            </li>
            <li>
              <i className="fa-regular fa-envelope"></i>
              <p>contact@example.com</p>
            </li>
            <li>
              <i className="fa-solid fa-phone"></i>
              <p>0999.999.999</p>
            </li>
            <li>
              <i className="fa-sharp fa-solid fa-business-time"></i>
              <p>Monday to Saturday: 9.00am to 16.pm</p>
            </li>
          </div>
        </div>
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51491.492410697465!2d108.14103341960609!3d16.063229724758315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314218d68dff9545%3A0x714561e9f3a7292c!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBCw6FjaCBLaG9hIC0gxJDhuqFpIGjhu41jIMSQw6AgTuG6tW5n!5e0!3m2!1svi!2s!4v1668767739062!5m2!1svi!2s"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>

      <section id="form-details">
        <form action="">
          <span>LEAVE A MESSAGE</span>
          <h2>We love to hear from you</h2>
          <input type="text" placeholder="Your name"></input>
          <input type="text" placeholder="E-mail"></input>
          <input type="text" placeholder="Subject"></input>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Your message"
          ></textarea>
          <button className="normal">Submit</button>
        </form>

        <div className="people">
          <div>
            {" "}
            <img src="img/people/1.png" alt=""></img>
            <p>
              <span>John Doe</span>
              Senior Marketing Manager<br></br>
              Phone: +000 123 000 77 88<br></br>
              Email: contact@xample.com
            </p>
          </div>
          <div>
            <img src="img/people/1.png" alt=""></img>
            <p>
              <span>John Doe</span>
              Senior Marketing Manager<br></br>
              Phone: +000 123 000 77 88<br></br>
              Email: contact@xample.com
            </p>
          </div>
          <div>
            <img src="img/people/1.png" alt=""></img>
            <p>
              <span>John Doe</span>
              Senior Marketing Manager<br></br>
              Phone: +000 123 000 77 88<br></br>
              Email: contact@xample.com
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ContactScreen;
