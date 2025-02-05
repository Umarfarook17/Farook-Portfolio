import React, { useState } from "react";
import emailjs from 'emailjs-com'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [responseMessage, setResponseMessage] = useState('')

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm('service_3x3do2h', 'template_p0nx6ve', e.target, 'hl-uAu2BEOlMTzsbT')
      .then(
        (result) => {
          console.log(result.text);
          setResponseMessage('Message sent successfully!');
          setFormData({ name: '', email: '', phone: '', message: '' });
        },
        (error) => {
          console.log(error.text);
          setResponseMessage('Error sending message.');
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });

  }
  return (
    <div className="container" id="contact">
      {/* Contact Info Section */}
      <div className="row text-center mb-5">
        <h1 className="contact-title">Contact</h1>
        {/* Call */}
        <div className="col-md-6">
          <div className="mb-3 text-success" style={{ fontSize: "2rem" }}>
            <i className="fas fa-phone-alt"></i>
          </div>
          <h5 className="fw-bold text-light">Call</h5>
          <p className="text-light">+91 8300538640</p>
        </div>
        {/* Email */}
        <div className="col-md-6">
          <div className="mb-3 text-success" style={{ fontSize: "2rem" }}>
            <i className="fas fa-envelope"></i>
          </div>
          <h5 className="fw-bold text-light ">Email</h5>
          <p className="text-light">umar17082000@gmail.com</p>
        </div>
      </div>

      {/* Contact Form Section */}
      <form onSubmit={handleSubmit}>
        <div className="row mb-3">
          <div className="col-md-6 mb-3">
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleInputChange}
              required
              style={{ borderColor: "#50C878" }}
            />
          </div>
          <div className="col-md-6 mb-3">
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleInputChange}
              required
              style={{ borderColor: "#50C878" }}
            />
          </div>
          <div className="col-md-12">
            <input
              type="number"
              name="phone"
              className="form-control"
              placeholder="Your Phone Number"
              value={formData.phone}
              onChange={handleInputChange}
              required
              style={{ borderColor: "#50C878" }}
            />
          </div>
        </div>

        <div className="mb-3">
          <textarea
            name="message"
            className="form-control"
            rows="5"
            placeholder="Message"
            value={formData.message}
            onChange={handleInputChange}

            required
            style={{ borderColor: "#50C878" }}
          ></textarea>
        </div>
        <div className="text-center pb-5">
          <button
            type="submit"
            className="btn btn-outline-success px-4 py-2 "
            disabled={isSubmitting}
          >

            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </div>
        {responseMessage && <div>{responseMessage}</div>}
      </form>
    </div>
  );
};

export default Contact;
