import React from "react";
import { Helmet } from "react-helmet-async";
import aboutcover from "../assets/Aboutus/about.webp";
import CEO from "../assets/Aboutus/Founder.webp";
import CTO from "../assets/Aboutus/CTO.webp";
import COO from "../assets/Aboutus/COO.webp";
import Chaitanya from "../assets/Aboutus/chaitanya.webp";
import SaiKiran from "../assets/Aboutus/saikiran.webp";
import Srikar from "../assets/Aboutus/srikar.webp";
import Varun from "../assets/Aboutus/varun.webp";

const Aboutus = () => {
  return (
    <div className="Aboutus">
      <Helmet>
        <title>About Us - Cyber Space Digital</title>
        <meta
          name="description"
          content="Know more about our Company and our team Cyber Space Digital."
        />
        <link rel="canonical" href="/aboutus" />
      </Helmet>

      <main>
        {/*for drive visiblity (https://drive.google.com/uc?export=view&id=) */}
        <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
          <div className="flex flex-col lg:flex-row justify-between gap-8">
            <div className="w-full lg:w-5/12 flex flex-col justify-center">
              <h1 className="text-3xl mt-20 lg:text-4xl lg:mt-10 font-bold leading-9  pb-4  md:text-8xl text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600 ">
                About Us
              </h1>
              <p className="font-normal text-base leading-6 text-black pb-4">
                We are a group of 5 experienced individuals working in web
                development and digital services for a diverse range of local
                and international brands. We have been in business for the past
                6 years, providing high-quality, innovative solutions to meet
                the unique needs of each of our clients. With a strong focus on
                user experience and a deep understanding of the latest industry
                trends and technologies, we have established a reputation for
                delivering exceptional results. Our team has a wide range of
                skills and expertise, including front-end and back-end
                development, digital marketing, and project management, which
                allows us to provide comprehensive services that drive real
                results for our clients. Whether you're a small startup or a
                large enterprise, we have the skills and experience to help you
                achieve your goals.
              </p>
              <h2 className="text-3xl lg:text-4xl font-bold leading-9  pb-4 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600">
                Our Story
              </h2>
              <p className="font-normal text-base leading-6 text-black ">
                Our story began 6 years ago, when a group of 5 engineers
                students came together with a shared passion for web development
                and digital services. We had all studied computer science and
                had a keen interest in technology, and we saw an opportunity to
                use our skills to help local and international brands grow their
                online presence.
                <br />
                We started small, working on freelance projects and building our
                portfolio. We quickly realized that there was a high demand for
                our services and that we had a real talent for creating custom
                websites and web applications that met the unique needs of each
                of our clients.
                <br />
                As our business grew, we decided to form a digital agency, and
                we were able to attract a diverse range of clients, from small
                startups to large enterprises. We were driven by our desire to
                provide high-quality, innovative solutions that would help our
                clients achieve their goals.
                <br />
                Over the past 6 years, we have built a reputation for delivering
                exceptional results, and we have established a loyal customer
                base. We have a wide range of skills and expertise, including
                front-end and back-end development, digital marketing, and
                project management, which allows us to provide comprehensive
                services that drive real results for our clients.
              </p>
            </div>
            <div className="w-full lg:w-8/12 lg:h-3/5">
              <img
                className="w-full h-full rounded-2xl shadow-2xl"
                src={aboutcover}
                alt="A group of People"
              />
              <p className="font-normal text-base leading-6 mt-10 text-black ">
                We have had many successes and also faced many challenges, but
                we have learned from our mistakes and have grown as a team. Now,
                we are a team of experts who have worked with a variety of
                industries and have developed a deep understanding of what works
                best for each of them.
                <br />
                We are proud of our achievements and are excited about the
                future. We are committed to continuously learning and staying
                up-to-date with the latest industry trends and technologies, so
                that we can continue to provide the best possible service to our
                clients.
                <br />
                Looking back, we can say that we are grateful for the
                opportunity to turn our passion into a successful business and
                we are looking forward to continue providing our clients with
                the best solutions to help them grow their online presence.
              </p>
            </div>
          </div>
        </div>
        <h2 className="text-3xl text-center lg:text-4xl font-bold leading-9 pb-4 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600">
          More About us
        </h2>
        <p className="font-normal text-base leading-6 text-black px-10 pb-4">
          As a group of web developers and digital service providers, we
          specialize in creating custom websites and web applications that are
          tailored to the specific needs of each of our clients. Our team has a
          wealth of experience in various web development technologies and
          frameworks, including HTML, CSS, JavaScript, React, Angular, Vue, and
          more.
          <br /> We are also proficient in back-end development, using
          technologies such as NodeJS, PHP, and Python to create robust and
          scalable systems that can handle high traffic and complex business
          logic. Our team is also well-versed in database management and
          optimization, ensuring that our solutions are performant and
          efficient.
          <br />
          In addition to web development, we also provide a range of digital
          services such as digital marketing, search engine optimization (SEO),
          social media marketing, and email marketing to help our clients reach
          a wider audience and generate more leads. We have a team of experts
          who have worked with a variety of industries and have developed a deep
          understanding of what works best for each of them.
          <br />
          We also have a strong focus on user experience and design, creating
          visually stunning and user-friendly websites that are easy to navigate
          and engage with. Our design team works closely with our development
          team to ensure that each project is aesthetically pleasing and fully
          functional.
          <br />
          Finally, we pride ourselves on our project management skills, ensuring
          that each project is delivered on time, within budget, and to the
          highest standards of quality. We keep our clients informed throughout
          the development process, making sure that they are happy with the
          progress and that any issues are addressed in a timely manner.
        </p>

        {/*.....Owners.....
        <div className=" py-20">
          <div className="container mx-auto px-6 md:px-12 xl:px-32">
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-center text-2xl  font-bold md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600">
                Leadership Board
              </h2>
              <p className="text-black lg:w-8/12 lg:mx-auto">
                CSD is known for its multi-project handeling. we deal with
                various technology and with on development projects,the talent
                of its people of some of the brightest minds and most
                experienced executives in business.
              </p>
            </div>
            <div className="grid gap-12 items-center md:grid-cols-3">
              <div className="space-y-4 text-center">
                <img
                  className=" w-64 h-64 mx-auto object-cover rounded-xl md:w-40 md:h-40 lg:w-64 lg:h-64"
                  src={COO}
                  loading="lazy"
                  width={640}
                  height={805}
                />
                <div>
                  <h4 className="text-2xl text-black">Jayaraj Gedela</h4>
                  <span className="block text-sm text-gray-900">
                    Chief Operations Officer
                  </span>
                </div>
              </div>
              <div className="space-y-4 text-center">
                <img
                  className=" w-64 h-64 mx-auto object-cover rounded-xl md:w-48 md:h-64 lg:w-64 lg:h-80"
                  src={CEO}
                  loading="lazy"
                  width={1000}
                  height={667}
                />
                <div>
                  <h4 className="text-2xl text-black ">Akhil Thej Reddy</h4>
                  <span className="block text-sm text-gray-900">
                    Founder
                    <br />
                    Chief Executive Officer
                  </span>
                </div>
              </div>
              <div className="space-y-4 text-center">
                <img
                  className="w-64 h-64 mx-auto object-cover rounded-xl md:w-40 md:h-40 lg:w-64 lg:h-64"
                  src={CTO}
                  loading="lazy"
                  width={1000}
                  height={667}
                />
                <div>
                  <h4 className="text-2xl text-black">Pavan Kumar</h4>
                  <span className="block text-sm text-gray-900">
                    Chief Technical Officer
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>*/}

        {/*...Teams...
        <section>
          <div className="container px-6 py-10 mx-auto">
            <h2 className="text-3xl pb-1 font-semibold text-center capitalize lg:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600">
              Our Team, Friends & Family
            </h2>
            <p className="max-w-2xl mx-auto my-6 text-center text-gray-900">
              We have a dedicated team of quick-learners and more than 10 years
              of experince in each craft.
            </p>
            <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-4">
              <div className="flex flex-col items-center p-8 transition-colors duration-200 transform cursor-pointer group hover:bg-yellow-600 rounded-xl">
                <img
                  className="object-cover w-32 h-40 rounded-full ring-4 ring-gray-300"
                  src={Chaitanya}
                />
                <h2 className="mt-4 text-2xl font-semibold  capitalize text-black group-hover:text-black">
                  Chaitanya Teja
                </h2>
                <p className="mt-2  capitalize text-gray-900 group-hover:text-gray-900">
                  Full Stack Developer
                </p>

                <div className="flex mt-3 -mx-2">
                  <a
                    href="#"
                    className="mx-2 text-gray-900 hover:text-gray-900 group-hover:text-black"
                    aria-label="Reddit"
                  >
                    <svg
                      className="w-6 h-6 fill-current"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="https://www.w3.org/2000/svg"
                    >
                      <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C21.9939 17.5203 17.5203 21.9939 12 22ZM6.807 10.543C6.20862 10.5433 5.67102 10.9088 5.45054 11.465C5.23006 12.0213 5.37133 12.6558 5.807 13.066C5.92217 13.1751 6.05463 13.2643 6.199 13.33C6.18644 13.4761 6.18644 13.6229 6.199 13.769C6.199 16.009 8.814 17.831 12.028 17.831C15.242 17.831 17.858 16.009 17.858 13.769C17.8696 13.6229 17.8696 13.4761 17.858 13.33C18.4649 13.0351 18.786 12.3585 18.6305 11.7019C18.475 11.0453 17.8847 10.5844 17.21 10.593h27.157C16.7988 10.6062 16.458 10.7512 16.2 11C15.0625 10.2265 13.7252 9.79927 12.35 9.77L13 6.65L15.138 7.1C15.1931 7.60706 15.621 7.99141 16.131 7.992C16.1674 7.99196 16.2038 7.98995 16.24 7.986C16.7702 7.93278 17.1655 7.47314 17.1389 6.94094C17.1122 6.40873 16.6729 5.991 16.14 5.991C16.1022 5.99191 16.0645 5.99491 16.027 6C15.71 6.03367 15.4281 6.21641 15.268 6.492L12.82 6C12.7983 5.99535 12.7762 5.993 12.754 5.993C12.6094 5.99472 12.4851 6.09583 12.454 6.237L11.706 9.71C10.3138 9.7297 8.95795 10.157 7.806 10.939C7.53601 10.6839 7.17843 10.5422 6.807 10.543ZM12.18 16.524C12.124 16.524 12.067 16.524 12.011 16.524C11.955 16.524 11.898 16.524 11.842 16.524C11.0121 16.5208 10.2054 16.2497 9.542 15.751C9.49626 15.6958 9.47445 15.6246 9.4814 15.5533C9.48834 15.482 9.52348 15.4163 9.579 15.371C9.62737 15.3318 9.68771 15.3102 9.75 15.31C9.81233 15.31 9.87275 15.3315 9.921 15.371C10.4816 15.7818 11.159 16.0022 11.854 16C11.9027 16 11.9513 16 12 16C12.059 16 12.119 16 12.178 16C12.864 16.0011 13.5329 15.7863 14.09 15.386C14.1427 15.3322 14.2147 15.302 14.29 15.302C14.3653 15.302 14.4373 15.3322 14.49 15.386C14.5985 15.4981 14.5962 15.6767 14.485 15.786V15.746C13.8213 16.2481 13.0123 16.5208 12.18 16.523V16.524ZM14.307 14.08h24.291L14.299 14.041C13.8591 14.011 13.4994 13.6789 13.4343 13.2429C13.3691 12.8068 13.6162 12.3842 14.028 12.2269C14.4399 12.0697 14.9058 12.2202 15.1478 12.5887C15.3899 12.9572 15.3429 13.4445 15.035 13.76C14.856 13.9554 14.6059 14.0707 14.341 14.08h24.306h24.307ZM9.67 14C9.11772 14 8.67 13.5523 8.67 13C8.67 12.4477 9.11772 12 9.67 12C10.2223 12 10.67 12.4477 10.67 13C10.67 13.5523 10.2223 14 9.67 14Z"></path>
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="mx-2 text-gray-900 hover:text-gray-900 group-hover:text-black"
                    aria-label="Facebook"
                  >
                    <svg
                      className="w-6 h-6 fill-current"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="https://www.w3.org/2000/svg"
                    >
                      <path d="M2.00195 12.002C2.00312 16.9214 5.58036 21.1101 10.439 21.881V14.892H7.90195V12.002h20.442V9.80204C10.3284 8.75958 10.6845 7.72064 11.4136 6.96698C12.1427 6.21332 13.1693 5.82306 14.215 5.90204C14.9655 5.91417 15.7141 5.98101 16.455 6.10205V8.56104h25.191C14.7558 8.50405 14.3183 8.64777 14.0017 8.95171C13.6851 9.25566 13.5237 9.68693 13.563 10.124V12.002h26.334L15.891 14.893h23.563V21.881C18.8174 21.0506 22.502 16.2518 21.9475 10.9611C21.3929 5.67041 16.7932 1.73997 11.4808 2.01722C6.16831 2.29447 2.0028 6.68235 2.00195 12.002Z"></path>
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="mx-2 text-gray-900 hover:text-gray-900 group-hover:text-black"
                    aria-label="Github"
                  >
                    <svg
                      className="w-6 h-6 fill-current"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="https://www.w3.org/2000/svg"
                    >
                      <path d="M12.026 2C7.13295 1.99937 2.96183 5.54799 2.17842 10.3779C1.395 15.2079 4.23061 19.893 8.87302 21.439C9.37302 21.529 9.55202 21.222 9.55202 20.958C9.55202 20.721 9.54402 20.093 9.54102 19.258C6.76602 19.858 6.18002 17.92 6.18002 17.92C5.99733 17.317 5.60459 16.7993 5.07302 16.461C4.17302 15.842 5.14202 15.856 5.14202 15.856C5.78269 15.9438 6.34657 16.3235 6.66902 16.884C6.94195 17.3803 7.40177 17.747 7.94632 17.9026C8.49087 18.0583 9.07503 17.99 9.56902 17.713C9.61544 17.207 9.84055 16.7341 10.204 16.379C7.99002 16.128 5.66202 15.272 5.66202 11.449C5.64973 10.4602 6.01691 9.5043 6.68802 8.778C6.38437 7.91731 6.42013 6.97325 6.78802 6.138C6.78802 6.138 7.62502 5.869 9.53002 7.159C11.1639 6.71101 12.8882 6.71101 14.522 7.159C16.428 5.868 17.264 6.138 17.264 6.138C17.6336 6.97286 17.6694 7.91757 17.364 8.778C18.0376 9.50423 18.4045 10.4626 18.388 11.453C18.388 15.286 16.058 16.128 13.836 16.375C14.3153 16.8651 14.5612 17.5373 14.511 18.221C14.511 19.555 14.499 20.631 14.499 20.958C14.499 21.225 14.677 21.535 15.186 21.437C19.8265 19.8884 22.6591 15.203 21.874 10.3743C21.089 5.54565 16.9181 1.99888 12.026 2Z"></path>
                    </svg>
                  </a>
                </div>
              </div>
              <div className="flex flex-col items-center p-8 transition-colors duration-200 transform cursor-pointer group hover:bg-yellow-600 rounded-xl">
                <img
                  className="object-cover w-32 h-40 rounded-full ring-4 ring-gray-300"
                  src={Srikar}
                />
                <h2 className="mt-4 text-2xl font-semibold capitalize text-black group-hover:text-black">
                  Srikar
                </h2>
                <p className="mt-2  capitalize text-gray-900 group-hover:text-gray-900">
                  Devops engineer
                </p>

                <div className="flex mt-3 -mx-2">
                  <a
                    href="#"
                    className="mx-2 text-gray-900 hover:text-gray-900 group-hover:text-black"
                    aria-label="Reddit"
                  >
                    <svg
                      className="w-6 h-6 fill-current"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="https://www.w3.org/2000/svg"
                    >
                      <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C21.9939 17.5203 17.5203 21.9939 12 22ZM6.807 10.543C6.20862 10.5433 5.67102 10.9088 5.45054 11.465C5.23006 12.0213 5.37133 12.6558 5.807 13.066C5.92217 13.1751 6.05463 13.2643 6.199 13.33C6.18644 13.4761 6.18644 13.6229 6.199 13.769C6.199 16.009 8.814 17.831 12.028 17.831C15.242 17.831 17.858 16.009 17.858 13.769C17.8696 13.6229 17.8696 13.4761 17.858 13.33C18.4649 13.0351 18.786 12.3585 18.6305 11.7019C18.475 11.0453 17.8847 10.5844 17.21 10.593h27.157C16.7988 10.6062 16.458 10.7512 16.2 11C15.0625 10.2265 13.7252 9.79927 12.35 9.77L13 6.65L15.138 7.1C15.1931 7.60706 15.621 7.99141 16.131 7.992C16.1674 7.99196 16.2038 7.98995 16.24 7.986C16.7702 7.93278 17.1655 7.47314 17.1389 6.94094C17.1122 6.40873 16.6729 5.991 16.14 5.991C16.1022 5.99191 16.0645 5.99491 16.027 6C15.71 6.03367 15.4281 6.21641 15.268 6.492L12.82 6C12.7983 5.99535 12.7762 5.993 12.754 5.993C12.6094 5.99472 12.4851 6.09583 12.454 6.237L11.706 9.71C10.3138 9.7297 8.95795 10.157 7.806 10.939C7.53601 10.6839 7.17843 10.5422 6.807 10.543ZM12.18 16.524C12.124 16.524 12.067 16.524 12.011 16.524C11.955 16.524 11.898 16.524 11.842 16.524C11.0121 16.5208 10.2054 16.2497 9.542 15.751C9.49626 15.6958 9.47445 15.6246 9.4814 15.5533C9.48834 15.482 9.52348 15.4163 9.579 15.371C9.62737 15.3318 9.68771 15.3102 9.75 15.31C9.81233 15.31 9.87275 15.3315 9.921 15.371C10.4816 15.7818 11.159 16.0022 11.854 16C11.9027 16 11.9513 16 12 16C12.059 16 12.119 16 12.178 16C12.864 16.0011 13.5329 15.7863 14.09 15.386C14.1427 15.3322 14.2147 15.302 14.29 15.302C14.3653 15.302 14.4373 15.3322 14.49 15.386C14.5985 15.4981 14.5962 15.6767 14.485 15.786V15.746C13.8213 16.2481 13.0123 16.5208 12.18 16.523V16.524ZM14.307 14.08h24.291L14.299 14.041C13.8591 14.011 13.4994 13.6789 13.4343 13.2429C13.3691 12.8068 13.6162 12.3842 14.028 12.2269C14.4399 12.0697 14.9058 12.2202 15.1478 12.5887C15.3899 12.9572 15.3429 13.4445 15.035 13.76C14.856 13.9554 14.6059 14.0707 14.341 14.08h24.306h24.307ZM9.67 14C9.11772 14 8.67 13.5523 8.67 13C8.67 12.4477 9.11772 12 9.67 12C10.2223 12 10.67 12.4477 10.67 13C10.67 13.5523 10.2223 14 9.67 14Z"></path>
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="mx-2 text-gray-900 hover:text-gray-900 group-hover:text-black"
                    aria-label="Facebook"
                  >
                    <svg
                      className="w-6 h-6 fill-current"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="https://www.w3.org/2000/svg"
                    >
                      <path d="M2.00195 12.002C2.00312 16.9214 5.58036 21.1101 10.439 21.881V14.892H7.90195V12.002h20.442V9.80204C10.3284 8.75958 10.6845 7.72064 11.4136 6.96698C12.1427 6.21332 13.1693 5.82306 14.215 5.90204C14.9655 5.91417 15.7141 5.98101 16.455 6.10205V8.56104h25.191C14.7558 8.50405 14.3183 8.64777 14.0017 8.95171C13.6851 9.25566 13.5237 9.68693 13.563 10.124V12.002h26.334L15.891 14.893h23.563V21.881C18.8174 21.0506 22.502 16.2518 21.9475 10.9611C21.3929 5.67041 16.7932 1.73997 11.4808 2.01722C6.16831 2.29447 2.0028 6.68235 2.00195 12.002Z"></path>
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="mx-2 text-gray-900 hover:text-gray-900 group-hover:text-black"
                    aria-label="Github"
                  >
                    <svg
                      className="w-6 h-6 fill-current"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="https://www.w3.org/2000/svg"
                    >
                      <path d="M12.026 2C7.13295 1.99937 2.96183 5.54799 2.17842 10.3779C1.395 15.2079 4.23061 19.893 8.87302 21.439C9.37302 21.529 9.55202 21.222 9.55202 20.958C9.55202 20.721 9.54402 20.093 9.54102 19.258C6.76602 19.858 6.18002 17.92 6.18002 17.92C5.99733 17.317 5.60459 16.7993 5.07302 16.461C4.17302 15.842 5.14202 15.856 5.14202 15.856C5.78269 15.9438 6.34657 16.3235 6.66902 16.884C6.94195 17.3803 7.40177 17.747 7.94632 17.9026C8.49087 18.0583 9.07503 17.99 9.56902 17.713C9.61544 17.207 9.84055 16.7341 10.204 16.379C7.99002 16.128 5.66202 15.272 5.66202 11.449C5.64973 10.4602 6.01691 9.5043 6.68802 8.778C6.38437 7.91731 6.42013 6.97325 6.78802 6.138C6.78802 6.138 7.62502 5.869 9.53002 7.159C11.1639 6.71101 12.8882 6.71101 14.522 7.159C16.428 5.868 17.264 6.138 17.264 6.138C17.6336 6.97286 17.6694 7.91757 17.364 8.778C18.0376 9.50423 18.4045 10.4626 18.388 11.453C18.388 15.286 16.058 16.128 13.836 16.375C14.3153 16.8651 14.5612 17.5373 14.511 18.221C14.511 19.555 14.499 20.631 14.499 20.958C14.499 21.225 14.677 21.535 15.186 21.437C19.8265 19.8884 22.6591 15.203 21.874 10.3743C21.089 5.54565 16.9181 1.99888 12.026 2Z"></path>
                    </svg>
                  </a>
                </div>
              </div>

              <div className="flex flex-col items-center p-8 transition-colors duration-200 transform cursor-pointer group hover:bg-yellow-600 rounded-xl">
                <img
                  className="object-cover w-32 h-40 rounded-full ring-4 ring-gray-300"
                  src={Varun}
                />
                <h2 className="mt-4 text-2xl font-semibold  capitalize text-black group-hover:text-black">
                  Tej Varun
                </h2>
                <p className="mt-2  capitalize text-gray-900 group-hover:text-gray-900">
                  Senior Graphic Designer
                </p>

                <div className="flex mt-3 -mx-2">
                  <a
                    href="#"
                    className="mx-2 text-gray-900 hover:text-gray-900 group-hover:text-black"
                    aria-label="Reddit"
                  >
                    <svg
                      className="w-6 h-6 fill-current"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="https://www.w3.org/2000/svg"
                    >
                      <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C21.9939 17.5203 17.5203 21.9939 12 22ZM6.807 10.543C6.20862 10.5433 5.67102 10.9088 5.45054 11.465C5.23006 12.0213 5.37133 12.6558 5.807 13.066C5.92217 13.1751 6.05463 13.2643 6.199 13.33C6.18644 13.4761 6.18644 13.6229 6.199 13.769C6.199 16.009 8.814 17.831 12.028 17.831C15.242 17.831 17.858 16.009 17.858 13.769C17.8696 13.6229 17.8696 13.4761 17.858 13.33C18.4649 13.0351 18.786 12.3585 18.6305 11.7019C18.475 11.0453 17.8847 10.5844 17.21 10.593h27.157C16.7988 10.6062 16.458 10.7512 16.2 11C15.0625 10.2265 13.7252 9.79927 12.35 9.77L13 6.65L15.138 7.1C15.1931 7.60706 15.621 7.99141 16.131 7.992C16.1674 7.99196 16.2038 7.98995 16.24 7.986C16.7702 7.93278 17.1655 7.47314 17.1389 6.94094C17.1122 6.40873 16.6729 5.991 16.14 5.991C16.1022 5.99191 16.0645 5.99491 16.027 6C15.71 6.03367 15.4281 6.21641 15.268 6.492L12.82 6C12.7983 5.99535 12.7762 5.993 12.754 5.993C12.6094 5.99472 12.4851 6.09583 12.454 6.237L11.706 9.71C10.3138 9.7297 8.95795 10.157 7.806 10.939C7.53601 10.6839 7.17843 10.5422 6.807 10.543ZM12.18 16.524C12.124 16.524 12.067 16.524 12.011 16.524C11.955 16.524 11.898 16.524 11.842 16.524C11.0121 16.5208 10.2054 16.2497 9.542 15.751C9.49626 15.6958 9.47445 15.6246 9.4814 15.5533C9.48834 15.482 9.52348 15.4163 9.579 15.371C9.62737 15.3318 9.68771 15.3102 9.75 15.31C9.81233 15.31 9.87275 15.3315 9.921 15.371C10.4816 15.7818 11.159 16.0022 11.854 16C11.9027 16 11.9513 16 12 16C12.059 16 12.119 16 12.178 16C12.864 16.0011 13.5329 15.7863 14.09 15.386C14.1427 15.3322 14.2147 15.302 14.29 15.302C14.3653 15.302 14.4373 15.3322 14.49 15.386C14.5985 15.4981 14.5962 15.6767 14.485 15.786V15.746C13.8213 16.2481 13.0123 16.5208 12.18 16.523V16.524ZM14.307 14.08h24.291L14.299 14.041C13.8591 14.011 13.4994 13.6789 13.4343 13.2429C13.3691 12.8068 13.6162 12.3842 14.028 12.2269C14.4399 12.0697 14.9058 12.2202 15.1478 12.5887C15.3899 12.9572 15.3429 13.4445 15.035 13.76C14.856 13.9554 14.6059 14.0707 14.341 14.08h24.306h24.307ZM9.67 14C9.11772 14 8.67 13.5523 8.67 13C8.67 12.4477 9.11772 12 9.67 12C10.2223 12 10.67 12.4477 10.67 13C10.67 13.5523 10.2223 14 9.67 14Z"></path>
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="mx-2 text-gray-900 hover:text-gray-900 group-hover:text-black"
                    aria-label="Facebook"
                  >
                    <svg
                      className="w-6 h-6 fill-current"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="https://www.w3.org/2000/svg"
                    >
                      <path d="M2.00195 12.002C2.00312 16.9214 5.58036 21.1101 10.439 21.881V14.892H7.90195V12.002h20.442V9.80204C10.3284 8.75958 10.6845 7.72064 11.4136 6.96698C12.1427 6.21332 13.1693 5.82306 14.215 5.90204C14.9655 5.91417 15.7141 5.98101 16.455 6.10205V8.56104h25.191C14.7558 8.50405 14.3183 8.64777 14.0017 8.95171C13.6851 9.25566 13.5237 9.68693 13.563 10.124V12.002h26.334L15.891 14.893h23.563V21.881C18.8174 21.0506 22.502 16.2518 21.9475 10.9611C21.3929 5.67041 16.7932 1.73997 11.4808 2.01722C6.16831 2.29447 2.0028 6.68235 2.00195 12.002Z"></path>
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="mx-2 text-gray-900 hover:text-gray-900 group-hover:text-black"
                    aria-label="Github"
                  >
                    <svg
                      className="w-6 h-6 fill-current"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="https://www.w3.org/2000/svg"
                    >
                      <path d="M12.026 2C7.13295 1.99937 2.96183 5.54799 2.17842 10.3779C1.395 15.2079 4.23061 19.893 8.87302 21.439C9.37302 21.529 9.55202 21.222 9.55202 20.958C9.55202 20.721 9.54402 20.093 9.54102 19.258C6.76602 19.858 6.18002 17.92 6.18002 17.92C5.99733 17.317 5.60459 16.7993 5.07302 16.461C4.17302 15.842 5.14202 15.856 5.14202 15.856C5.78269 15.9438 6.34657 16.3235 6.66902 16.884C6.94195 17.3803 7.40177 17.747 7.94632 17.9026C8.49087 18.0583 9.07503 17.99 9.56902 17.713C9.61544 17.207 9.84055 16.7341 10.204 16.379C7.99002 16.128 5.66202 15.272 5.66202 11.449C5.64973 10.4602 6.01691 9.5043 6.68802 8.778C6.38437 7.91731 6.42013 6.97325 6.78802 6.138C6.78802 6.138 7.62502 5.869 9.53002 7.159C11.1639 6.71101 12.8882 6.71101 14.522 7.159C16.428 5.868 17.264 6.138 17.264 6.138C17.6336 6.97286 17.6694 7.91757 17.364 8.778C18.0376 9.50423 18.4045 10.4626 18.388 11.453C18.388 15.286 16.058 16.128 13.836 16.375C14.3153 16.8651 14.5612 17.5373 14.511 18.221C14.511 19.555 14.499 20.631 14.499 20.958C14.499 21.225 14.677 21.535 15.186 21.437C19.8265 19.8884 22.6591 15.203 21.874 10.3743C21.089 5.54565 16.9181 1.99888 12.026 2Z"></path>
                    </svg>
                  </a>
                </div>
              </div>
              <div className="flex flex-col items-center p-8 transition-colors duration-200 transform cursor-pointer group hover:bg-yellow-600 rounded-xl">
                <img
                  className="object-cover w-32 h-40 rounded-full ring-4 ring-gray-300"
                  src={SaiKiran}
                />
                <h2 className="mt-4 text-2xl font-semibold  capitalize text-black group-hover:text-black">
                  Sai Kiran
                </h2>
                <p className="mt-2  capitalize text-gray-900 group-hover:text-gray-900">
                  Brand Designer
                </p>
                <div className="flex mt-3 -mx-2">
                  <a
                    href="#"
                    className="mx-2 text-gray-900 hover:text-gray-900 group-hover:text-black"
                    aria-label="Reddit"
                  >
                    <svg
                      className="w-6 h-6 fill-current"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="https://www.w3.org/2000/svg"
                    >
                      <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C21.9939 17.5203 17.5203 21.9939 12 22ZM6.807 10.543C6.20862 10.5433 5.67102 10.9088 5.45054 11.465C5.23006 12.0213 5.37133 12.6558 5.807 13.066C5.92217 13.1751 6.05463 13.2643 6.199 13.33C6.18644 13.4761 6.18644 13.6229 6.199 13.769C6.199 16.009 8.814 17.831 12.028 17.831C15.242 17.831 17.858 16.009 17.858 13.769C17.8696 13.6229 17.8696 13.4761 17.858 13.33C18.4649 13.0351 18.786 12.3585 18.6305 11.7019C18.475 11.0453 17.8847 10.5844 17.21 10.593h27.157C16.7988 10.6062 16.458 10.7512 16.2 11C15.0625 10.2265 13.7252 9.79927 12.35 9.77L13 6.65L15.138 7.1C15.1931 7.60706 15.621 7.99141 16.131 7.992C16.1674 7.99196 16.2038 7.98995 16.24 7.986C16.7702 7.93278 17.1655 7.47314 17.1389 6.94094C17.1122 6.40873 16.6729 5.991 16.14 5.991C16.1022 5.99191 16.0645 5.99491 16.027 6C15.71 6.03367 15.4281 6.21641 15.268 6.492L12.82 6C12.7983 5.99535 12.7762 5.993 12.754 5.993C12.6094 5.99472 12.4851 6.09583 12.454 6.237L11.706 9.71C10.3138 9.7297 8.95795 10.157 7.806 10.939C7.53601 10.6839 7.17843 10.5422 6.807 10.543ZM12.18 16.524C12.124 16.524 12.067 16.524 12.011 16.524C11.955 16.524 11.898 16.524 11.842 16.524C11.0121 16.5208 10.2054 16.2497 9.542 15.751C9.49626 15.6958 9.47445 15.6246 9.4814 15.5533C9.48834 15.482 9.52348 15.4163 9.579 15.371C9.62737 15.3318 9.68771 15.3102 9.75 15.31C9.81233 15.31 9.87275 15.3315 9.921 15.371C10.4816 15.7818 11.159 16.0022 11.854 16C11.9027 16 11.9513 16 12 16C12.059 16 12.119 16 12.178 16C12.864 16.0011 13.5329 15.7863 14.09 15.386C14.1427 15.3322 14.2147 15.302 14.29 15.302C14.3653 15.302 14.4373 15.3322 14.49 15.386C14.5985 15.4981 14.5962 15.6767 14.485 15.786V15.746C13.8213 16.2481 13.0123 16.5208 12.18 16.523V16.524ZM14.307 14.08h24.291L14.299 14.041C13.8591 14.011 13.4994 13.6789 13.4343 13.2429C13.3691 12.8068 13.6162 12.3842 14.028 12.2269C14.4399 12.0697 14.9058 12.2202 15.1478 12.5887C15.3899 12.9572 15.3429 13.4445 15.035 13.76C14.856 13.9554 14.6059 14.0707 14.341 14.08h24.306h24.307ZM9.67 14C9.11772 14 8.67 13.5523 8.67 13C8.67 12.4477 9.11772 12 9.67 12C10.2223 12 10.67 12.4477 10.67 13C10.67 13.5523 10.2223 14 9.67 14Z"></path>
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="mx-2 text-gray-900 hover:text-gray-900 group-hover:text-black"
                    aria-label="Facebook"
                  >
                    <svg
                      className="w-6 h-6 fill-current"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="https://www.w3.org/2000/svg"
                    >
                      <path d="M2.00195 12.002C2.00312 16.9214 5.58036 21.1101 10.439 21.881V14.892H7.90195V12.002h20.442V9.80204C10.3284 8.75958 10.6845 7.72064 11.4136 6.96698C12.1427 6.21332 13.1693 5.82306 14.215 5.90204C14.9655 5.91417 15.7141 5.98101 16.455 6.10205V8.56104h25.191C14.7558 8.50405 14.3183 8.64777 14.0017 8.95171C13.6851 9.25566 13.5237 9.68693 13.563 10.124V12.002h26.334L15.891 14.893h23.563V21.881C18.8174 21.0506 22.502 16.2518 21.9475 10.9611C21.3929 5.67041 16.7932 1.73997 11.4808 2.01722C6.16831 2.29447 2.0028 6.68235 2.00195 12.002Z"></path>
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="mx-2 text-gray-900 hover:text-gray-900 group-hover:text-black"
                    aria-label="Github"
                  >
                    <svg
                      className="w-6 h-6 fill-current"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="https://www.w3.org/2000/svg"
                    >
                      <path d="M12.026 2C7.13295 1.99937 2.96183 5.54799 2.17842 10.3779C1.395 15.2079 4.23061 19.893 8.87302 21.439C9.37302 21.529 9.55202 21.222 9.55202 20.958C9.55202 20.721 9.54402 20.093 9.54102 19.258C6.76602 19.858 6.18002 17.92 6.18002 17.92C5.99733 17.317 5.60459 16.7993 5.07302 16.461C4.17302 15.842 5.14202 15.856 5.14202 15.856C5.78269 15.9438 6.34657 16.3235 6.66902 16.884C6.94195 17.3803 7.40177 17.747 7.94632 17.9026C8.49087 18.0583 9.07503 17.99 9.56902 17.713C9.61544 17.207 9.84055 16.7341 10.204 16.379C7.99002 16.128 5.66202 15.272 5.66202 11.449C5.64973 10.4602 6.01691 9.5043 6.68802 8.778C6.38437 7.91731 6.42013 6.97325 6.78802 6.138C6.78802 6.138 7.62502 5.869 9.53002 7.159C11.1639 6.71101 12.8882 6.71101 14.522 7.159C16.428 5.868 17.264 6.138 17.264 6.138C17.6336 6.97286 17.6694 7.91757 17.364 8.778C18.0376 9.50423 18.4045 10.4626 18.388 11.453C18.388 15.286 16.058 16.128 13.836 16.375C14.3153 16.8651 14.5612 17.5373 14.511 18.221C14.511 19.555 14.499 20.631 14.499 20.958C14.499 21.225 14.677 21.535 15.186 21.437C19.8265 19.8884 22.6591 15.203 21.874 10.3743C21.089 5.54565 16.9181 1.99888 12.026 2Z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>*/}
      </main>
    </div>
  );
};

export default Aboutus;
