import React from 'react'

const Reactblog = () => {
  return (
    <>
  {/* Component Code */}
  <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16 relative">
    <div
      className="bg-cover h-64 text-center overflow-hidden"
      style={{
        height: 450,
        backgroundImage:
          'url("http://drive.google.com/uc?export=view&id=1IEuFboh98HbpXskEXiY6CRzQ8izXTf0d")'
      }}
      
    ></div>
    <div className="max-w-2xl mx-auto">
      <div className="mt-3 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
        <div className="">
          <a
            className="text-xs text-indigo-600 uppercase font-medium hover:text-gray-900 transition duration-500 ease-in-out"
          >
            Web Development
          </a>
          ,{" "}
          <a
            className="text-xs text-indigo-600 uppercase font-medium hover:text-gray-900 transition duration-500 ease-in-out"
          >
            Front-end
          </a>
          <h1 href="#" className="text-gray-900 font-bold text-3xl mb-2">
            React.js
          </h1>
          <p className="text-gray-700 text-xs mt-2">
            Written By:{" "}
            <a
              href="https://cyberspacedigital.in/"
              className="text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out"
            >
              CSD
            </a>
          </p>
          <p className="text-base leading-8 my-5">
          React is a popular JavaScript library used for web development. 
          React.js or ReactJS or React are different ways to represent ReactJS. 
          Today’s many large-scale companies (Netflix, Instagram, to name a few) 
          also use React JS. There are many advantages of using this framework over 
          other frameworks, and It’s ranking under the top 10 programming languages 
          for the last few years under various language ranking indices.
          </p>
          <h3 className="text-2xl font-bold my-5">#1. What is Lorem Ipsum?</h3>
          <p className="text-base leading-8 my-5">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <blockquote className="border-l-4 text-base italic leading-8 my-5 p-5 text-indigo-600">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </blockquote>
          <p className="text-base leading-8 my-5">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <a
            href="#"
            className="text-xs text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out"
          >
            #Election
          </a>
          ,{" "}
          <a
            href="#"
            className="text-xs text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out"
          >
            #people
          </a>
          ,{" "}
          <a
            href="#"
            className="text-xs text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out"
          >
            #Election2020
          </a>
          ,{" "}
          <a
            href="#"
            className="text-xs text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out"
          >
            #trump
          </a>
          ,
          <a
            href="#"
            className="text-xs text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out"
          >
            #Joe
          </a>
        </div>
      </div>
    </div>
  </div>
</>

  )
}

export default Reactblog