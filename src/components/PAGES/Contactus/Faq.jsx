import React from 'react';

import './contactus.scss';

const Faq = () => {
  return (
<section>
    <section className="text-gray-700 ">
    <div className="container px-5 py-24 mx-auto">
      <div className="text-center mb-20">
        <h1 className="pb-3 bg-gradient-to-r from-yellow-300 via-orange-700 to-yellow-400 bg-clip-text text-5xl font-extrabold text-transparent sm:text-7xl ">
          Frequently Asked Question
        </h1>
        <p className="text-white text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
          The most common questions about how our business works and what can do
          for you.
        </p>
      </div></div>
  </section>
      
  <div className="faq-coloum">
    <div>
      <input type="checkbox" id="question1" name="q" className="questions" />
      <div className="plus">+</div>
      <label htmlFor="question1" className="question">
      Why Do I Need a Website?
      </label>
      <div className="answers">
      If you run a business, it’s a great idea to launch a website or an online store to act as the cornerstone of your online presence. Even if you just have a personal brand and would like to increase its visibility, a basic website can help with just that.

A website can function as a portfolio to showcase your work, a storefront for your products or services, or a medium for your message to reach a bigger audience. It’s great if you want to host your content without relying on a third-party platform.

Professional-looking websites give a business more credibility and authority. Even a simple business website can anchor your brand, allow you to get discovered on search engines, and aid with digital marketing.

Sure, you can probably get by without a small business website, but once you have one, there’s no looking back.
      </div>
    </div>
    <div>
      <input type="checkbox" id="question2" name="q" className="questions" />
      <div className="plus">+</div>
      <label htmlFor="question2" className="question">
      What Do I Need For a Website?
      </label>
      <div className="answers">While you may know that a website is an important part of your business plan, it’s natural if you’re unsure what actually goes into building one. Each website is unique, but the basic elements of them are the same.

First, you need to secure a domain and somewhere to host your website.

Your domain is your website’s address on the internet, and what users enter into their address bar to navigate to your site. You can find and register a domain with Hostinger’s domain checker.

Web hosting is where your website exists online. A web hosting provider, like Hostinger, will store all the files related to your website on their servers, so when a user enters your domain address, they’ll have access to your site on that server. Some even offer free domain name registration with your plan.

Once you’ve got a domain and hosting sorted, you need to decide how to build your website. Unless you want to code your website yourself, your main choice is between content management systems (CMSs) like WordPress, or website builders like Hostinger.

While a content management system gives you more control and freedom to create, they require a higher level of skill and experience to get the most out of them. A WordPress website is the best choice for someone who know what they’re doing. Most website builders, however, can be used by anyone, regardless of knowhow.

Once you know which web builder you’re going to use, you move onto designing your website. At this point, you should add your branding and establish the look and feel of your site. This is also where you’d add things like contact forms, email marketing integrations, and eCommerce features if you plan to sell online.

Finally, you need to add copy to your site. This is the content that visitors will read. Many website builders, including Hostinger’s, include tools for automatically creating content. The top website builders will also include SEO tools, that guide you to create copy that will help you get found on search engines.</div>
    </div>
    <div>
      <input type="checkbox" id="question3" name="q" className="questions" />
      <div className="plus">+</div>
      <label htmlFor="question3" className="question">
      What Is a Website Builder?
      </label>
      <div className="answers">A website builder is a tool that allows anyone to create a website with minimal effort. Choosing the right one for you means deciding on the look of your site, its features, and your budget.

Hostinger Website Builder is designed to be beginner-friendly, meaning you don’t need to hire web designers or developers. With its intuitive drag-and-drop editor, you can create a professional site without any design or coding experience.

All the hard work is taken care of for you. Simply drag and drop the elements you need onto the page, and you’re ready to go. Our professional website builder makes it easy – it’s the perfect choice for beginners and small business owners that want to get online for the first time.

The top website builders also help you sell products online, market your business, and find your audience. Hostinger Website Builder comes packed with SEO and marketing tools, as well as plenty of integrations designed to help get your professional website discovered by the right people.

Most of Hostinger’s hosting plans also come with free domain registration to help you save money, time, and energy and focus on the things that you do best.</div>
    </div>
  </div>

    
</section>

  )
}

export default Faq

