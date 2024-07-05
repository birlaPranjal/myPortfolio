"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: "", email: "", message: "" });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="h-[65vh] sm:h-[50vh] bg-dark p-[5vw]  w-[350px] sm:w-[700px] lg:w-[800px] mx-auto ">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="rounded-lg shadow-xl py-10 sm:py-0 w-full"
      >
        <h2 className="text-4xl font-mono  mb-8 ">Contact Me</h2>
        <form onSubmit={handleSubmit} className="px-5  ">
          <div className=" sm:flex gap-5">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-wheat">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-1 block border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black  min-w-[250px] lg:w-[300px]"
            />
          </div>
          <div>
            <label htmlFor="email" className="mt-4 sm:mt-0 block text-sm font-medium text-wheat">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 block  border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black min-w-[250px] lg:w-[300px]"
            />
          </div>
          </div>
          <div>
            <label htmlFor="message" className="mt-4  block text-sm font-medium text-wheat">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              required
              className="mt-1 block text-black w-[250px] sm:w-[520px] lg:w-[620px] border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black"
            ></textarea>
          </div>
          <div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              disabled={isSubmitting}
              className="w-[150px]  mx-auto my-5 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </motion.button>
          </div>
        </form>
        {submitStatus === 'success' && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-4 text-green-600 text-center"
          >
            Message sent successfully!
          </motion.p>
        )}
        {submitStatus === 'error' && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-4 text-red-600 text-center"
          >
            An error occurred. Please try again.
          </motion.p>
        )}
      </motion.div>
    </div>
  );
};

export default ContactForm;