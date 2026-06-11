import React, { useState } from "react";
import axios from "axios";

const API_URL =
  process.env.REACT_APP_API_URL  ;

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSending(true);
    setStatus("");

    try {
      const response = await axios.post(
        `${API_URL}/api/contact`,
        formData
      );

      if (response.data.success) {
        setStatus("✅ Message sent successfully!");

        setFormData({
          name: "",
          email: "",
          message: "",
        });
      }
    } catch (error) {
      console.error(error);

      setStatus(
        error.response?.data?.message ||
          "❌ Failed to send message. Please try again."
      );
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section className="contact-section">
      <div className="contact-card">
        <h2>Let's Connect</h2>

        <p>
          Have a project, internship, or job opportunity?
          Feel free to send me a message.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name</label>

            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Email</label>

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Message</label>

            <textarea
              name="message"
              rows="5"
              maxLength="500"
              placeholder="Type your message here..."
              value={formData.message}
              onChange={handleChange}
              required
            />

            <small>
              {formData.message.length}/500 characters
            </small>
          </div>

          <button
            type="submit"
            className="submit-btn"
            disabled={isSending}
          >
            {isSending ? "Sending..." : "Send Message"}
          </button>
        </form>

        {status && (
          <div
            className={`status ${
              status.includes("success")
                ? "success"
                : "error"
            }`}
          >
            {status}
          </div>
        )}
      </div>
    </section>
  );
};

export default ContactForm;