import React from "react";
import FormComponent from "./components/FormComponent.jsx";

const Contact = () => {

	// function to directly send mail to the company.
  const sendEmail = () => {
    const email = "harshofficialrawat@gmail.com";
    const subject = "Hello";
    const body = "Hi lets connect";
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  // function to open google sheet
  const redirectToGoogleSheet = () => {
    window.location.href = "https://docs.google.com/spreadsheets/d/1S10TgX1J6QuH6DDKoUG4G-3QX3hgvrz65J6wQ_neW0w/edit#gid=0";
  };

  // Main parent component having text and the form component

  return (
    <div className="flex items-center bg-gradient-to-r from-gray-900 to-gray-800">
      <div className="container flex flex-col justify-center p-4 mx-auto sm:py-12 lg:pt-4 lg:flex-row lg:justify-between ">
        <div className="flex flex-col  justify-center text-white  p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
          <h2 className="text-blue-400 text-4xl font-bold sm:text-5xl">
            Have a question ?
          </h2>
          <h1 className="text-5xl font-bold sm:text-6xl">Get in Touch</h1>
          <p className="mt-6 mb-8 text-lg sm:mb-12">
            Feel free to reach out to us. We're here to help! Please fill out
            the form,
            <br className="hidden md:inline lg:hidden" />
            and we'll get back to you as soon as possible.
          </p>
          <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            <button
              className="px-8 py-3 text-lg font-semibold rounded bg-blue-400 text-gray-900"
              onClick={sendEmail}
            >
              Send Mail
            </button>
            <button className="px-8 py-3 text-lg font-semibold border rounded border-gray-100" onClick={redirectToGoogleSheet} >
              Open SpreadSheet
            </button>
          </div>
        </div>

		{/* Form component */}

        <FormComponent />
      </div>
    </div>
  );
};

export default Contact;
