import React, { useState } from "react";

const ContactUs = () => {
  return (
    <div className="maincontact" id="contact">
      <div class="bg-white px-6 py-12 sm:py-24 lg:px-8">
        <div class="mx-auto max-w-xl flex flex-col items-center justify-center text-center">
          <h1 class="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
            ColabCube Contact
          </h1>
          <p class="mt-3 text-lg text-gray-600">
            Feature request? Suggestion? or maybe you'd like to be our critic!
            Here's a form just for that.
          </p>
        </div>
        <form class="mx-auto mt-16 max-w-xl sm:mt-20">
          <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div>
              <label
                for="first-name"
                class="block text-sm font-semibold leading-6 text-gray-900"
              >
                First name
              </label>
              <div class="mt-2.5">
                <input
                  required=""
                  type="text"
                  name="first-name"
                  id="first-name"
                  autocomplete="given-name"
                  placeholder="Your First Name"
                  class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label
                for="last-name"
                class="block text-sm font-semibold leading-6 text-gray-900"
              >
                Last name
              </label>
              <div class="mt-2.5">
                <input
                  required=""
                  type="text"
                  name="last-name"
                  id="last-name"
                  autocomplete="family-name"
                  placeholder="Your Last Name"
                  class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div class="sm:col-span-2">
              <label
                for="company"
                class="block text-sm font-semibold leading-6 text-gray-900"
              >
                Company
              </label>
              <div class="mt-2.5">
                <input
                  required=""
                  type="text"
                  name="company"
                  id="company"
                  autocomplete="organization"
                  placeholder="Your Company Name"
                  class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div class="sm:col-span-2">
              <label
                for="email"
                class="block text-sm font-semibold leading-6 text-gray-900"
              >
                Email
              </label>
              <div class="mt-2.5">
                <input
                  required=""
                  type="email"
                  name="email"
                  id="email"
                  autocomplete="email"
                  placeholder="Your Email Address"
                  class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div class="sm:col-span-2">
              <label
                for="phone"
                class="block text-sm font-semibold leading-6 text-gray-900"
              >
                Phone number
              </label>
              <div class="mt-2.5">
                <input
                  required=""
                  type="tel"
                  name="phone"
                  id="phone"
                  autocomplete="tel"
                  placeholder="Your Phone Number"
                  class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div class="sm:col-span-2">
              <label
                for="message"
                class="block text-sm font-semibold leading-6 text-gray-900"
              >
                Message
              </label>
              <div class="mt-2.5">
                <textarea
                  name="message"
                  id="message"
                  rows="4"
                  placeholder="Share your thoughts..."
                  class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                ></textarea>
              </div>
            </div>
          </div>
          <div class="mt-10">
            <button
              type="submit"
              class="bg-blue-600 text-white rounded-sm py-2 w-full block"
            >
              Submit →
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
