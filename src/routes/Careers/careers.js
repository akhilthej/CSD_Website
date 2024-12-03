import React, { useState } from "react";
import { APPLY_JOB } from "../../hooks/Apis";

const JobApplication = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    middle_name: "",
    last_name: "",
    birth_date: "",
    month: "",
    day: "",
    year: "",
    current_address: "",
    city: "",
    state: "",
    postal_code: "",
    email: "",
    phone_number: "",
    linkedin_url: "",
    position_applied: "",
    referral_source: "",
    start_date: "",
    cover_letter: "",
  });
  const [resume, setResume] = useState(null);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = new FormData();
    Object.keys(formData).forEach((key) => {
      form.append(key, formData[key]);
    });
    if (resume) form.append("resume", resume);

    try {
      const response = await fetch(APPLY_JOB, {
        method: "POST",
        body: form,
      });
      const data = await response.json();
      setMessage(data.message);
      if (data.success) {
        setFormData({
          first_name: "",
          middle_name: "",
          last_name: "",
          birth_date: "",
          month: "",
          day: "",
          year: "",
          current_address: "",
          city: "",
          state: "",
          postal_code: "",
          email: "",
          phone_number: "",
          linkedin_url: "",
          position_applied: "",
          referral_source: "",
          start_date: "",
          cover_letter: "",
        });
        setResume(null);
      }
    } catch (error) {
      setMessage("Error submitting application.");
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-md">
      <h1 className="text-2xl font-bold text-center mb-6">Job Application</h1>
      {message && <p className="text-center text-green-500 mb-4">{message}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Full Name */}

        {/* First Name */}
        <input
          type="text"
          name="first_name"
          placeholder="First Name"
          value={formData.first_name}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />

        {/* Middle Name */}
        <input
          type="text"
          name="middle_name"
          placeholder="Middle Name"
          value={formData.middle_name}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />

        {/* Last Name */}
        <input
          type="text"
          name="last_name"
          placeholder="Last Name"
          value={formData.last_name}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />

        {/* Birth Date */}
        <label className="block">Date of Birth</label>
        <input
          type="date"
          name="birth_date"
          value={formData.birth_date}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />

        {/* Address */}
        <textarea
          name="current_address"
          placeholder="Current Address"
          value={formData.current_address}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />

        {/* City */}
        <input
          type="text"
          name="city"
          placeholder="City"
          value={formData.city}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />

        {/* State */}
        <input
          type="text"
          name="state"
          placeholder="State"
          value={formData.state}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />

        {/* Postal Code */}
        <input
          type="text"
          name="postal_code"
          placeholder="Postal Code"
          value={formData.postal_code}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />

        {/* Email */}
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />

        {/* Phone Number */}
        <input
          type="text"
          name="phone_number"
          placeholder="Phone Number"
          value={formData.phone_number}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />

        {/* LinkedIn */}
        <input
          type="text"
          name="linkedin_url"
          placeholder="LinkedIn URL"
          value={formData.linkedin_url}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />

        {/* Position Applied */}
        <input
          type="text"
          name="position_applied"
          placeholder="Position Applied"
          value={formData.position_applied}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />

        {/* Referral Source */}
        <input
          type="text"
          name="referral_source"
          placeholder="How did you hear about us?"
          value={formData.referral_source}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />

        {/* Available Start Date */}
        <input
          type="date"
          name="start_date"
          value={formData.start_date}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />

      
        {/* Cover Letter */}
        <textarea
          name="cover_letter"
          placeholder="Cover Letter"
          value={formData.cover_letter}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Apply
        </button>
      </form>
    </div>
  );
};

export default JobApplication;
