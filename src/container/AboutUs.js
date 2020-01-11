import React from 'react';
import HeaderApp from './../components/HeaderApp.js';

const AboutUs = function(props) {

  
   
        return (
            <div>
    <HeaderApp />
        {/* Home */}
        <div className="home">
          <div className="home_background parallax-window" data-parallax="scroll" data-image-src="images/about_background.jpg" />
          <div className="home_content">
            <div className="home_title">about us</div>
          </div>
        </div>
        {/* Intro */}
        <div className="intro">
          <div className="container">
            <div className="row">
              <div className="col-lg-7">
                <div className="intro_image"><img src="images/intro.png" alt="" /></div>
              </div>
              <div className="col-lg-5">
                <div className="intro_content">
                  <div className="intro_title">we have the best tours</div>
                  <p className="intro_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis vulputate eros, iaculis consequat nisl. Nunc et suscipit urna. Integer elementum orci eu vehicula pretium. Donec bibendum tristique condimentum. Aenean in lacus ligula. Phasellus euismod gravida eros. Aenean nec ipsum aliquet, pharetra magna id, interdum sapien. Etiam id lorem eu nisl pellentesque semper. Nullam tincidunt metus placerat, suscipit leo ut, tempus nulla. Fusce at eleifend tellus. Ut eleifend dui nunc, non fermentum quam placerat non. Etiam venenatis nibh augue, sed eleifend justo tristique eu</p>
                  <div className="button intro_button"><div className="button_bcg" /><a href="#">explore now<span /><span /><span /></a></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Stats */}
        <div className="stats">
          <div className="container">
            <div className="row">
              <div className="col text-center">
                <div className="section_title">years statistics</div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-10 offset-lg-1 text-center">
                <p className="stats_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis vulputate eros, iaculis consequat nisl. Nunc et suscipit urna. Integer elementum orci eu vehicula pretium. Donec bibendum tristique condimentum. Aenean in lacus ligula. </p>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="stats_years">
                  <div className="stats_years_last">2016</div>
                  <div className="stats_years_new float-right">2017</div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="stats_contents">
                  {/* Stats Item */}
                  <div className="stats_item d-flex flex-md-row flex-column clearfix">
                    <div className="stats_last order-md-1 order-3">
                      <div className="stats_last_icon d-flex flex-column align-items-center justify-content-end">
                        <img src="images/stats_1.png" alt="" />
                      </div>
                      <div className="stats_last_content">
                        <div className="stats_number">1642</div>
                        <div className="stats_type">Clients</div>
                      </div>
                    </div>
                    <div className="stats_bar order-md-2 order-2" data-x={1642} data-y={3527} data-color="#31124b">
                      <div className="stats_bar_perc">
                        <div>
                          <div className="stats_bar_value" />
                        </div>
                      </div>
                    </div>
                    <div className="stats_new order-md-3 order-1 text-right">
                      <div className="stats_new_icon d-flex flex-column align-items-center justify-content-end">
                        <img src="images/stats_1.png" alt="" />
                      </div>
                      <div className="stats_new_content">
                        <div className="stats_number">3527</div>
                        <div className="stats_type">Clients</div>
                      </div>
                    </div>
                  </div>
                  {/* Stats Item */}
                  <div className="stats_item d-flex flex-md-row flex-column clearfix">
                    <div className="stats_last order-md-1 order-3">
                      <div className="stats_last_icon d-flex flex-column align-items-center justify-content-end">
                        <img src="images/stats_2.png" alt="" />
                      </div>
                      <div className="stats_last_content">
                        <div className="stats_number">768</div>
                        <div className="stats_type">Returning Clients</div>
                      </div>
                    </div>
                    <div className="stats_bar order-md-2 order-2" data-x={768} data-y={145} data-color="#a95ce4">
                      <div className="stats_bar_perc">
                        <div>
                          <div className="stats_bar_value" />
                        </div>
                      </div>
                    </div>
                    <div className="stats_new order-md-3 order-1 text-right">
                      <div className="stats_new_icon d-flex flex-column align-items-center justify-content-end">
                        <img src="images/stats_2.png" alt="" />
                      </div>
                      <div className="stats_new_content">
                        <div className="stats_number">145</div>
                        <div className="stats_type">Returning Clients</div>
                      </div>
                    </div>
                  </div>
                  {/* Stats Item */}
                  <div className="stats_item d-flex flex-md-row flex-column clearfix">
                    <div className="stats_last order-md-1 order-3">
                      <div className="stats_last_icon d-flex flex-column align-items-center justify-content-end">
                        <img src="images/stats_3.png" alt="" />
                      </div>
                      <div className="stats_last_content">
                        <div className="stats_number">11546</div>
                        <div className="stats_type">Reach</div>
                      </div>
                    </div>
                    <div className="stats_bar order-md-2 order-2" data-x={11546} data-y={9321} data-color="#fa6f1b">
                      <div className="stats_bar_perc">
                        <div>
                          <div className="stats_bar_value" />
                        </div>
                      </div>
                    </div>
                    <div className="stats_new order-md-3 order-1 text-right">
                      <div className="stats_new_icon d-flex flex-column align-items-center justify-content-end">
                        <img src="images/stats_3.png" alt="" />
                      </div>
                      <div className="stats_new_content">
                        <div className="stats_number">9321</div>
                        <div className="stats_type">Reach</div>
                      </div>
                    </div>
                  </div>
                  {/* Stats Item */}
                  <div className="stats_item d-flex flex-md-row flex-column clearfix">
                    <div className="stats_last order-md-1 order-3">
                      <div className="stats_last_icon d-flex flex-column align-items-center justify-content-end">
                        <img src="images/stats_4.png" alt="" />
                      </div>
                      <div className="stats_last_content">
                        <div className="stats_number">3729</div>
                        <div className="stats_type">Items</div>
                      </div>
                    </div>
                    <div className="stats_bar order-md-2 order-2" data-x={3729} data-y={17429} data-color="#fa9e1b">
                      <div className="stats_bar_perc">
                        <div>
                          <div className="stats_bar_value" />
                        </div>
                      </div>
                    </div>
                    <div className="stats_new order-md-3 order-1 text-right">
                      <div className="stats_new_icon d-flex flex-column align-items-center justify-content-end">
                        <img src="images/stats_4.png" alt="" />
                      </div>
                      <div className="stats_new_content">
                        <div className="stats_number">17429</div>
                        <div className="stats_type">More Items</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Add */}
        <div className="add">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="add_container">
                  <div className="add_background" style={{backgroundImage: 'url(images/add.jpg)'}} />
                  <div className="add_content">
                    <h1 className="add_title">thailand</h1>
                    <div className="add_subtitle">From <span>$999</span></div>
                    <div className="button add_button"><div className="button_bcg" /><a href="#">explore now<span /><span /><span /></a></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Milestones */}
        <div className="milestones">
          <div className="container">
            <div className="row">
              {/* Milestone */}
              <div className="col-lg-3 milestone_col">
                <div className="milestone text-center">
                  <div className="milestone_icon"><img src="images/milestone_1.png" alt="" /></div>
                  <div className="milestone_counter" data-end-value={255}>0</div>
                  <div className="milestone_text">Clients</div>
                </div>
              </div>
              {/* Milestone */}
              <div className="col-lg-3 milestone_col">
                <div className="milestone text-center">
                  <div className="milestone_icon"><img src="images/milestone_2.png" alt="" /></div>
                  <div className="milestone_counter" data-end-value={1176}>0</div>
                  <div className="milestone_text">Projects</div>
                </div>
              </div>
              {/* Milestone */}
              <div className="col-lg-3 milestone_col">
                <div className="milestone text-center">
                  <div className="milestone_icon"><img src="images/milestone_3.png" alt="" /></div>
                  <div className="milestone_counter" data-end-value={39}>0</div>
                  <div className="milestone_text">Countries</div>
                </div>
              </div>
              {/* Milestone */}
              <div className="col-lg-3 milestone_col">
                <div className="milestone text-center">
                  <div className="milestone_icon"><img src="images/milestone_4.png" alt="" /></div>
                  <div className="milestone_counter" data-end-value={127}>0</div>
                  <div className="milestone_text">Coffees</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Footer */}
        <footer className="footer">
          <div className="container">
            <div className="row">
              {/* Footer Column */}
              <div className="col-lg-3 footer_column">
                <div className="footer_col">
                  <div className="footer_content footer_about">
                    <div className="logo_container footer_logo">
                      <div className="logo"><a href="#"><img src="images/logo.png" alt="" />travelix</a></div>
                    </div>
                    <p className="footer_about_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis vu lputate eros, iaculis consequat nisl. Nunc et suscipit urna. Integer eleme ntum orci eu vehicula pretium.</p>
                    <ul className="footer_social_list">
                      <li className="footer_social_item"><a href="#"><i className="fa fa-pinterest" /></a></li>
                      <li className="footer_social_item"><a href="#"><i className="fa fa-facebook-f" /></a></li>
                      <li className="footer_social_item"><a href="#"><i className="fa fa-twitter" /></a></li>
                      <li className="footer_social_item"><a href="#"><i className="fa fa-dribbble" /></a></li>
                      <li className="footer_social_item"><a href="#"><i className="fa fa-behance" /></a></li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* Footer Column */}
              <div className="col-lg-3 footer_column">
                <div className="footer_col">
                  <div className="footer_title">blog posts</div>
                  <div className="footer_content footer_blog">
                    {/* Footer blog item */}
                    <div className="footer_blog_item clearfix">
                      <div className="footer_blog_image"><img src="images/footer_blog_1.jpg" alt="https://unsplash.com/@avidenov" /></div>
                      <div className="footer_blog_content">
                        <div className="footer_blog_title"><a href="blog.html">Travel with us this year</a></div>
                        <div className="footer_blog_date">Nov 29, 2017</div>
                      </div>
                    </div>
                    {/* Footer blog item */}
                    <div className="footer_blog_item clearfix">
                      <div className="footer_blog_image"><img src="images/footer_blog_2.jpg" alt="https://unsplash.com/@deannaritchie" /></div>
                      <div className="footer_blog_content">
                        <div className="footer_blog_title"><a href="blog.html">New destinations for you</a></div>
                        <div className="footer_blog_date">Nov 29, 2017</div>
                      </div>
                    </div>
                    {/* Footer blog item */}
                    <div className="footer_blog_item clearfix">
                      <div className="footer_blog_image"><img src="images/footer_blog_3.jpg" alt="https://unsplash.com/@bergeryap87" /></div>
                      <div className="footer_blog_content">
                        <div className="footer_blog_title"><a href="blog.html">Travel with us this year</a></div>
                        <div className="footer_blog_date">Nov 29, 2017</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Footer Column */}
              <div className="col-lg-3 footer_column">
                <div className="footer_col">
                  <div className="footer_title">tags</div>
                  <div className="footer_content footer_tags">
                    <ul className="tags_list clearfix">
                      <li className="tag_item"><a href="#">design</a></li>
                      <li className="tag_item"><a href="#">fashion</a></li>
                      <li className="tag_item"><a href="#">music</a></li>
                      <li className="tag_item"><a href="#">video</a></li>
                      <li className="tag_item"><a href="#">party</a></li>
                      <li className="tag_item"><a href="#">photography</a></li>
                      <li className="tag_item"><a href="#">adventure</a></li>
                      <li className="tag_item"><a href="#">travel</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* Footer Column */}
              <div className="col-lg-3 footer_column">
                <div className="footer_col">
                  <div className="footer_title">contact info</div>
                  <div className="footer_content footer_contact">
                    <ul className="contact_info_list">
                      <li className="contact_info_item d-flex flex-row">
                        <div><div className="contact_info_icon"><img src="images/placeholder.svg" alt="" /></div></div>
                        <div className="contact_info_text">4127 Raoul Wallenber 45b-c Gibraltar</div>
                      </li>
                      <li className="contact_info_item d-flex flex-row">
                        <div><div className="contact_info_icon"><img src="images/phone-call.svg" alt="" /></div></div>
                        <div className="contact_info_text">2556-808-8613</div>
                      </li>
                      <li className="contact_info_item d-flex flex-row">
                        <div><div className="contact_info_icon"><img src="images/message.svg" alt="" /></div></div>
                        <div className="contact_info_text"><a href="mailto:contactme@gmail.com?Subject=Hello" target="_top">contactme@gmail.com</a></div>
                      </li>
                      <li className="contact_info_item d-flex flex-row">
                        <div><div className="contact_info_icon"><img src="images/planet-earth.svg" alt="" /></div></div>
                        <div className="contact_info_text"><a href="https://colorlib.com">www.colorlib.com</a></div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
        {/* Copyright */}
        <div className="copyright">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 order-lg-1 order-2  ">
                <div className="copyright_content d-flex flex-row align-items-center">
                  <div>{/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                    Copyright © All rights reserved | This template is made with <i className="fa fa-heart-o" aria-hidden="true" /> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
                    {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}</div>
                </div>
              </div>
              <div className="col-lg-9 order-lg-2 order-1">
                <div className="footer_nav_container d-flex flex-row align-items-center justify-content-lg-end">
                  <div className="footer_nav">
                    <ul className="footer_nav_list">
                      <li className="footer_nav_item"><a href="index.html">home</a></li>
                      <li className="footer_nav_item"><a href="#">about us</a></li>
                      <li className="footer_nav_item"><a href="offers.html">offers</a></li>
                      <li className="footer_nav_item"><a href="blog.html">news</a></li>
                      <li className="footer_nav_item"><a href="contact.html">contact</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      
        )
    
}
export default AboutUs;