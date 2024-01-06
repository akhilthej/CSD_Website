// WebsiteQuotationForm.js
import React, { useState, useRef, useEffect } from "react";
import './popup.css'; // Import your Tailwind CSS file

const WebsiteQuotationForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    message: '',
    selectedOption: '',
  });

  const [submissionStatus, setSubmissionStatus] = useState(null);
  const formRef = useRef();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const discordWebhookUrl = 'https://discord.com/api/webhooks/1188142399332032512/t_u3FNseO4CzVYp-yn7eUWNdF8wweauOpcjlqeA3xkh6XWQrVGTulVlkTXcQnYQLr1GE';

    const message = {
      content: `Contact Form Submission\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone Number: ${formData.phoneNumber}\nMessage: ${formData.message}\nSelected Website Type: ${formData.selectedOption}`,
    };

    try {
      const response = await fetch(discordWebhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(message),
      });

      if (response.ok) {
        setSubmissionStatus('success');
        setFormData({ name: '', email: '', phoneNumber: '', message: '', selectedOption: '' });
      } else {
        setSubmissionStatus('error');
      }
    } catch (error) {
      console.error('Error:', error);
      setSubmissionStatus('error');
    }
  };

  const handleClose = () => {
    setSubmissionStatus(null);
    setFormData({
      name: '',
      email: '',
      phoneNumber: '',
      message: '',
      selectedOption: '',
    });
    onClose();
  };

  const handleOutsideClick = (e) => {
    if (formRef.current && !formRef.current.contains(e.target)) {
      handleClose();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75" onClick={handleOutsideClick}>
      <div ref={formRef} className="bg-white rounded-lg shadow-xl p-8 space-y-6" onClick={(e) => e.stopPropagation()}>
        <button onClick={handleClose} className="absolute top-2 right-2 text-gray-600 hover:text-black">
          Close
        </button>

        {submissionStatus === 'success' && (
          <div className="text-green-600 font-medium">Form submitted successfully!</div>
        )}
        {submissionStatus === 'error' && (
          <div className="text-red-600 font-medium">Error submitting the form. Please try again later.</div>
        )}

        <div>
          <label htmlFor="Name" className="block text-sm font-medium text-gray-700">
            Name:
            <input
              type="text"
              name="name"
              className="mt-1 p-2.5 w-full rounded-md border border-gray-300"
              placeholder="Sam"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>
        </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email:
                <input
                  type="email"
                  name="email"
                  className="mt-1 p-2.5 w-full rounded-md border border-gray-300"
                  placeholder="sam@mail.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </label>
            </div>

            <div>
              <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">
                Phone Number:
                <input
                  type="tel"
                  name="phoneNumber"
                  className="mt-1 p-2.5 w-full rounded-md border border-gray-300"
                  placeholder="123-456-7890"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  required
                />
              </label>
            </div>

            <div>
              <label htmlFor="selectedOption" className="block text-sm font-medium text-gray-700">
                Select Website Type:
                <select
                  name="selectedOption"
                  className="mt-1 p-2.5 w-full rounded-md border border-gray-300"
                  value={formData.selectedOption}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select...</option>
                  <optgroup label="Business Website">
                    <option value="Startup Website">Startup Company - A website suitable for a startup business.</option>
                    <option value="Marketing Website">Marketing Website - Website for Marketing and Sales.</option>
                    <option value="Single Page Website">Single Page Website- A Best solution for small business with 100% SEO.</option>
                    <option value="Enterprise Website">Enterprise - A Website to showcase your brand value to build your empire.</option>
                  </optgroup>
                  <optgroup label="E-commerce Website">
                    <option value="E-commerce Website">E-commerce Website - A website for online shopping.</option>
                  </optgroup>
                  <optgroup label="Web Redesign">
                    <option value="Web Redesign">Web Redesign - Improving and updating an existing website.</option>
                  </optgroup>
                  <optgroup label="CRM/ERP Panels">
                    <option value="CRM/ERP Panels">CRM/ERP Panels - Custom panels for managing business processes.</option>
                  </optgroup>
                </select>
              </label>
            </div>

           
            <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">
            Message:
            <textarea
              name="message"
              className="mt-1 p-2.5 w-full rounded-md border border-gray-300"
              placeholder="Leave a comment..."
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </label>
        </div>

        <div>
          <button
            type="submit"
            onClick={handleSubmit}
            className="inline-block bg-black text-white rounded-full px-6 py-3 font-medium hover:bg-white hover:text-black hover:border hover:border-black transition duration-300"
          >
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default WebsiteQuotationForm;