import React from "react";
import contactImg from "../../assets/contact-animation.gif";
import Reveal from "../../animation/Reveal";

const Contact = () => {
  return (
    <section className="pt-28 pb-5">
      <div className="container max-w-7xl mx-auto px-4">
        <h2 className=" text-3xl font-semibold mb-12 text-center">
          Get in Touch
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          {/* text */}
          <Reveal>
            <div className=" space-y-4">
              <img src={contactImg} alt="contact animation" className="w-44 " />
              <h3 className="text-xl font-semibold ">Contact Information</h3>
              <p>
                Lorem ipsum do-dipisci asperiores ipsum, quidem aliquid earum
                ad.
              </p>
              <div className=" flex flex-col">
                <strong>
                  Email:{" "}
                  <a href="mailto:1B5f1@example.com">1B5f1@example.com</a>
                </strong>
                <strong>
                  Phone: <a href="tel:1234567890">123-456-7890</a>
                </strong>
                <strong>Address: 123 Main Street, City, Country</strong>
              </div>
            </div>
          </Reveal>

          {/* for,mail */}
          <Reveal>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <form>
                {/* name, email, message */}
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Name"
                    className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="Email"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="Email"
                    name="Email"
                    id="Email"
                    placeholder="Type your email here"
                    className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="number"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    type="number"
                    name="name"
                    id="name"
                    placeholder="Your phone number"
                    className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="message"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your message here"
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full bg-secondary text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-opacity-50"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
