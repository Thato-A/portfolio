import { useState } from "react";
import "./ContactModal.css";
import emailjs from "emailjs-com";
import { FaPaperPlane } from "react-icons/fa";

function ContactModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    message: "",
  });

  const closeModal = () => {
    onClose();
  };

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_fkwnzfb",
        "template_czmnu2s",
        formData,
        "YZZwzT18L0T6ajjDE"
      )
      .then(
        () => {
          alert("Message sent successfully!");
          closeModal();
        },
        (error) => {
          console.error(error);
          alert("Something went wrong. Please try again.");
        }
      );
  };

  return (
    <div className="modal">
      <div className="modal__content">
        <button className="modal__close-btn" onClick={onClose}>
          ×
        </button>
        <h2 className="modal__heading">Send Me a Message</h2>
        <p className="modal__subtext">
          Fill out the form below and I’ll respond within 24 hours or email me
          directly at thatoanderson92@gmail.com
        </p>

        <form onSubmit={handleSubmit} className="modal__form">
          <div className="form-row">
            <div className="form-group">
              <label>Name *</label>
              <input
                type="text"
                name="name"
                placeholder="John Doe"
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Email *</label>
              <input
                type="email"
                name="email"
                placeholder="john@example.com"
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label>Company</label>
            <input
              type="text"
              name="company"
              placeholder="Your Company"
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Phone</label>
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Message *</label>
            <textarea
              name="message"
              placeholder="Tell me about your project or opportunity..."
              rows="4"
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button type="submit" className="modal__submit-btn">
            <FaPaperPlane /> Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactModal;
