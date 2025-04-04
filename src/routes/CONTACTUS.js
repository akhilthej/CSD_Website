import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import Contactcover from "../assets/CoverImages/Contact_us.png";

const ContactForm = () => {
  const [honeypot, setHoneypot] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    phonenumber: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Stop submission if honeypot field is filled
    if (honeypot) {
      console.warn("Bot detected! Submission blocked.");
      return;
    }

    const discordWebhookUrl =
      "https://discord.com/api/webhooks/1357789374594416791/a84l5wCS3gxtFkS_YyJy2We02mXvAgqPdnHulmjrLzVaIW0bWaaJgB3juGzuKPqoznKz"; // Replace with your actual webhook URL

    const message = {
      content: `Contact Form Submission\n\nName: ${formData.name}\nEmail: ${formData.email}\nSubject: ${formData.subject}\nPhone Number 1: ${formData.phonenumber}\nMessage: ${formData.message}`,
    };

    try {
      const response = await fetch(discordWebhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(message),
      });

      if (response.ok) {
        alert("Form submitted successfully!");
        setFormData({ name: "", email: "", subject: "", phonenumber: "", message: "" });
      } else {
        alert("Error submitting the form. Please try again later.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An unexpected error occurred. Please try again later.");
    }
  };

  return (
    <div>
      <Helmet>
        <title>Contact us - Cyber Space Digital</title>
        <meta
          name="description"
          content="Web Development and Digital Marketing Company. We are here to build you business online. One stop for all your digital needs."
        />
        <link rel="canonical" href="/contactus" />
      </Helmet>

      {/* Title Card */}
      <section
        className="py-10 sm:py-40"
        style={{
          backgroundImage: `url("${Contactcover}")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex flex-col items-center md:flex-row justify-center">
          <div className="md:w-1/2 md:pr-10"></div>
          <div className="md:w-1/2 px-5">
            <div className="text-right md:text-left">
              {" "}
              {/* Align titles to the right on mobile, left on larger screens */}
              <h3 className="cursor-default  text-2xl pb-5 md:text-6xl fade-in-down font-extrabold text-center text-white tracking-tight">
                Get in touch,
                <br />
                we’d love to hear from you.
              </h3>
              <p className="cursor-default text-white sm:text-sm text-xs text-center sm:ml-0">
                You can contact us through mail or you can get in touch at our
                digital office.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <a href="mailto:admin@cyberspacedigital.in">
                  <a className="transform rounded-md bg-white px-5 py-3 font-medium text-black transition-colors hover:bg-black hover:text-white">
                    Email
                  </a>
                </a>
                <a href="tel:+91-814-340-7758">
                  <a className="transform rounded-md bg-white px-5 py-3 font-medium text-black transition-colors hover:bg-black hover:text-white">
                    Phone
                  </a>
                </a>

                <a href="https://api.whatsapp.com/send?phone=918143407758&text=Welcome%20to%20Cyberspacedigital">
                  <a className="transform rounded-md bg-white px-5 py-3 font-medium text-black transition-colors hover:bg-black hover:text-white">
                    WhatsApp
                  </a>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*contact form*/}
      <section
      id="contact"
      className="min-h-screen flex items-center justify-center bg-primary"
    >
      <div className="p-6 mx-auto max-w-xl bg-white rounded-md shadow-md font-[sans-serif]">
        <h1 className="text-3xl text-black font-bold text-center mb-4">
          Get in Touch
        </h1>
        <p className="text-lg text-gray-600 text-center mb-8">
          We'd love to hear from you! Please fill out the form below to get in
          touch with us.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col">
            <input
              type="text"
              name="honeypot"
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
              style={{ display: "none" }} // Hide the field from real users
            />

            <label className="text-lg text-gray-600 mb-2">Name:</label>
            <input
              type="text"
              name="name"
              placeholder="John Doe"
              value={formData.name}
              onChange={handleChange}
              className="py-2.5 px-4 text-gray-800 bg-gray-100 border focus:border-black focus:bg-transparent text-sm outline-none transition-all"
              required
            />
          </div>
          <div className="flex flex-col">
            <label className="text-lg text-gray-600 mb-2">Email:</label>
            <input
              type="email"
              name="email"
              placeholder="john.doe@example.com"
              value={formData.email}
              onChange={handleChange}
              className="py-2.5 px-4 text-gray-800 bg-gray-100 border focus:border-black focus:bg-transparent text-sm outline-none transition-all"
              required
            />
          </div>
          <div className="flex flex-col">
            <label className="text-lg text-gray-600 mb-2">Subject:</label>
            <input
              type="text"
              name="subject"
              placeholder="Hello World"
              value={formData.subject}
              onChange={handleChange}
              className="py-2.5 px-4 text-gray-800 bg-gray-100 border focus:border-black focus:bg-transparent text-sm outline-none transition-all"
              required
            />
          </div>
          <div className="flex flex-col">
            <label className="text-lg text-gray-600 mb-2">Phone Number:</label>
            <input
              type="tel"
              name="phonenumber"
              placeholder="123-456-7890"
              value={formData.phonenumber}
              onChange={handleChange}
              className="py-2.5 px-4 text-gray-800 bg-gray-100 border focus:border-black focus:bg-transparent text-sm outline-none transition-all"
              required
            />
          </div>
         
          <div className="flex flex-col">
            <label className="text-lg text-gray-600 mb-2">Message:</label>
            <textarea
              name="message"
              placeholder="Type your message here..."
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className="px-4 text-gray-800 bg-gray-100 border focus:border-black focus:bg-transparent text-sm pt-3 outline-none transition-all"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="text-white bg-black hover:bg-gray-900 tracking-wide text-sm px-4 py-2.5 w-full outline-none"
          >
            Send
          </button>
        </form>
      </div>
    </section>

    </div>
  );
};

export default ContactForm;
