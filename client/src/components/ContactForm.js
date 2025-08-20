import React, { useState } from 'react';
import axios from 'axios';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Sending...');

    axios.post('http://localhost:5000/api/contact', formData)
      .then(response => {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      })
      .catch(error => {
        setStatus('Failed to send message. Please try again.');
      });
  };

  return (
    <section className="card">
      <h2>CONTACT ME</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" value={formData.message} onChange={handleChange} required></textarea>
        </div>
        <button type="submit" className="btn-submit">Send Message</button>
      </form>
      {status && <p className="form-status">{status}</p>}
    </section>
  );
};

export default ContactForm;