import React from "react";

const ContactForm = () => {
  return (
    <form className="border-2 w-full border-[#E9EBF1] flex flex-col p-4 rounded-lg shadow-md">
      <h2
        className="border rounded-full bg-gradient-to-b from-[#9580E7]
   to-[#2563EB] text-transparent bg-clip-text text-[28px]"
      >
        Send Us a Message
      </h2>

      <div className="flex flex-col gap-4">
        {/* first name and last name */}
        <div className="flex justify-between gap-4">
          {/* First name */}
          <div className="flex flex-col w-full">
            <label htmlFor="firstname">First Name</label>
            <input
              type="text"
              name="firstname"
              placeholder="Enter your First Name"
              className="formInput"
            />
          </div>

          {/* last name */}
          <div className="flex flex-col w-full">
            <label htmlFor="lastname">Last Name</label>
            <input
              type="text"
              name="lastname"
              placeholder="Enter your Last Name"
              className="formInput"
            />
          </div>
        </div>

        {/* Email and company name */}
        <div className="flex justify-between gap-4">
          {/* Email */}
          <div className="flex flex-col w-full">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              className="formInput"
              placeholder="Enter your Email"
            />
          </div>

          {/* Company name */}
          <div className="flex flex-col w-full">
            <label htmlFor="company">Company</label>
            <input
              type="text"
              name="company"
              placeholder="Enter your Company Name"
              className="formInput"
            />
          </div>
        </div>

        {/* Services */}
        <div className="flex flex-col">
          <label htmlFor="service">Service</label>
          <select name="service" id="" className="fullInput">
            <option value="Select a Service">Select a Service</option>
            <option value="Select a Service">other option</option>
          </select>
        </div>

        {/* Messsage */}
        <div>
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            className="fullInput"
            id=""
            placeholder="Tell Us about your project requirements..."
          ></textarea>
        </div>
      </div>

      <button className="gradiantButton w-[300px] mx-auto mt-[10px]">
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
