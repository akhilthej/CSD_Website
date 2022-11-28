import React from 'react'
import './sitemaps.scss'

const sitemaps = () => {

                  return (
              
                    <ul className="sitemap">
                      <li className="sitemap-root"><a href="/">Home</a></li>
                      <li className="sitemap-main">   
                        <ul>
                          <li>
                            <a href="/services">Services</a>
                            {/*<ul>
                              <li>
                                <a href="/about/careers/">Careers</a>
                              </li>
                              <li>
                                <a href="/about/giving/">Giving</a>
                                <ul>
                                  <li><a href="/about/giving/2013">2013</a></li>
                                  <li><a href="/about/giving/2014">2014</a></li>
                                  <li><a href="/about/giving/2015">2015</a></li>
                                </ul>
                              </li>
                  </ul>*/}
                          </li>

                          <li>
                            <a href="/technologies">Technologies</a>
                            <ul>
                              <li>
                                <a href="/technologies/reactblog">React.js</a>
                              </li>
                            </ul>

                          </li>
                          <li>
                            <a href="/getquotation">Get Quotation</a>
                          </li>

                          <li><a href="/aboutus">About us</a></li>
                          <li><a href="/contactus">Contact us</a></li>

                          <li>
                            <a href="/clients">Clients</a>
                           </li>

                          <li>
                            <a href="/reviews">Reviews</a>
                          </li>

                        </ul> 
                      </li>
                      
                      
                      <li className="sitemap-aux">
                        <ul>
                          <li>
                            <a href="/disclaimer">Disclaimer</a>
                          </li>
                          <li>
                            <a href="/privacypolicy">Privacy</a>
                          </li>
                          <li>
                            <a href="/terms&conditions">Terms &amp; Conditions</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  );
                }
       
   

export default sitemaps