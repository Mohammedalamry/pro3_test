import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Link
  } from 'react-router-dom';

export default class Home extends Component {
    render() {
        return (
            <Router>
            <div>
                <div className="menu trans_500">
          <div className="menu_content d-flex flex-column align-items-center justify-content-center text-center">
            <div className="menu_close_container"><div className="menu_close" /></div>
            <div className="logo menu_logo"><a href="#"><img src="images/logo.png" alt="" /></a></div>
            <ul>
              <li className="menu_item"><Link to="/"></Link>Homes</li>
              <li className="menu_item"><a href="about.html">aboutsss us</a></li>
              <li className="menu_item"><a href="offers.html">offers</a></li>
              <li className="menu_item"><a href="blog.html">news</a></li>
              <li className="menu_item"><a href="contact.html">contact</a></li>
            </ul>
          </div>
        </div>
        {/* Home */}
        <div className="home">
          {/* Home Slider */}
          <div className="home_slider_container">
            <div className="owl-carousel owl-theme home_slider">
              {/* Slider Item */}
              <div className="owl-item home_slider_item">
                {/* Image by https://unsplash.com/@anikindimitry */}
                <div className="home_slider_background" style={{backgroundImage: 'url(images/home_slider.jpg)'}} />
                <div className="home_slider_content text-center">
                  <div className="home_slider_content_inner" data-animation-in="flipInX" data-animation-out="animate-out fadeOut">
                    <h1>discover</h1>
                    <h1>the world</h1>
                    <div className="button home_slider_button"><div className="button_bcg" /><a href="#">explore now<span /><span /><span /></a></div>
                  </div>
                </div>
              </div>
              {/* Slider Item */}
              <div className="owl-item home_slider_item">
                <div className="home_slider_background" style={{backgroundImage: 'url(images/home_slider.jpg)'}} />
                <div className="home_slider_content text-center">
                  <div className="home_slider_content_inner" data-animation-in="flipInX" data-animation-out="animate-out fadeOut">
                    <h1>discover</h1>
                    <h1>the world</h1>
                    <div className="button home_slider_button"><div className="button_bcg" /><a href="#">explore now<span /><span /><span /></a></div>
                  </div>
                </div>
              </div>
              {/* Slider Item */}
              <div className="owl-item home_slider_item">
                <div className="home_slider_background" style={{backgroundImage: 'url(images/home_slider.jpg)'}} />
                <div className="home_slider_content text-center">
                  <div className="home_slider_content_inner" data-animation-in="flipInX" data-animation-out="animate-out fadeOut">
                    <h1>discover</h1>
                    <h1>the world</h1>
                    <div className="button home_slider_button"><div className="button_bcg" /><a href="#">explore now<span /><span /><span /></a></div>
                  </div>
                </div>
              </div>
            </div>
            {/* Home Slider Nav - Prev */}
            <div className="home_slider_nav home_slider_prev">
              <svg version="1.1" id="Layer_2" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="28px" height="33px" viewBox="0 0 28 33" enableBackground="new 0 0 28 33" xmlSpace="preserve">
                <defs>
                  <linearGradient id="home_grad_prev">
                    <stop offset="0%" stopColor="#fa9e1b" />
                    <stop offset="100%" stopColor="#8d4fff" />
                  </linearGradient>
                </defs>
                <path className="nav_path" fill="#F3F6F9" d="M19,0H9C4.029,0,0,4.029,0,9v15c0,4.971,4.029,9,9,9h10c4.97,0,9-4.029,9-9V9C28,4.029,23.97,0,19,0z
					M26,23.091C26,27.459,22.545,31,18.285,31H9.714C5.454,31,2,27.459,2,23.091V9.909C2,5.541,5.454,2,9.714,2h8.571
					C22.545,2,26,5.541,26,9.909V23.091z" />
                <polygon className="nav_arrow" fill="#F3F6F9" points="15.044,22.222 16.377,20.888 12.374,16.885 16.377,12.882 15.044,11.55 9.708,16.885 11.04,18.219 
					11.042,18.219 " />
              </svg>
            </div>
            {/* Home Slider Nav - Next */}
            <div className="home_slider_nav home_slider_next">
              <svg version="1.1" id="Layer_3" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="28px" height="33px" viewBox="0 0 28 33" enableBackground="new 0 0 28 33" xmlSpace="preserve">
                <defs>
                  <linearGradient id="home_grad_next">
                    <stop offset="0%" stopColor="#fa9e1b" />
                    <stop offset="100%" stopColor="#8d4fff" />
                  </linearGradient>
                </defs>
                <path className="nav_path" fill="#F3F6F9" d="M19,0H9C4.029,0,0,4.029,0,9v15c0,4.971,4.029,9,9,9h10c4.97,0,9-4.029,9-9V9C28,4.029,23.97,0,19,0z
				M26,23.091C26,27.459,22.545,31,18.285,31H9.714C5.454,31,2,27.459,2,23.091V9.909C2,5.541,5.454,2,9.714,2h8.571
				C22.545,2,26,5.541,26,9.909V23.091z" />
                <polygon className="nav_arrow" fill="#F3F6F9" points="13.044,11.551 11.71,12.885 15.714,16.888 11.71,20.891 13.044,22.224 18.379,16.888 17.048,15.554 
				17.046,15.554 " />
              </svg>
            </div>
            {/* Home Slider Dots */}
            <div className="home_slider_dots">
              <ul id="home_slider_custom_dots" className="home_slider_custom_dots">
                <li className="home_slider_custom_dot active"><div />01.</li>
                <li className="home_slider_custom_dot"><div />02.</li>
                <li className="home_slider_custom_dot"><div />03.</li>
              </ul>
            </div>
          </div>
        </div>
        {/* Search */}
        <div className="search">
          {/* Search Contents */}
          <div className="container fill_height">
            <div className="row fill_height">
              <div className="col fill_height">
                {/* Search Tabs */}
                <div className="search_tabs_container">
                  <div className="search_tabs d-flex flex-lg-row flex-column align-items-lg-center align-items-start justify-content-lg-between justify-content-start">
                    <div className="search_tab active d-flex flex-row align-items-center justify-content-lg-center justify-content-start"><img src="images/suitcase.png" alt="" /><span>hotels</span></div>
                    
                    <div className="search_tab d-flex flex-row align-items-center justify-content-lg-center justify-content-start"><i class="fa fa-globe" aria-hidden="true"></i>country</div>
                    <div className="search_tab d-flex flex-row align-items-center justify-content-lg-center justify-content-start"><img src="images/island.png" alt="" />trips</div>
                    <div className="search_tab d-flex flex-row align-items-center justify-content-lg-center justify-content-start"><i class="fa fa-money" aria-hidden="true"></i>curency</div>
                    <div className="search_tab d-flex flex-row align-items-center justify-content-lg-center justify-content-start"><img src="images/diving.png" alt="" />activities</div>
                  </div>		
                </div>
                {/* Search Panel */}
                <div className="search_panel active">
                  <form action="#" id="search_form_1" className="search_panel_content d-flex flex-lg-row flex-column align-items-lg-center align-items-start justify-content-lg-between justify-content-start">
                    <div className="search_item">
                      <div>destination</div>
                      <input type="text" className="destination search_input" required="required" />
                    </div>
                    <div className="search_item">
                      <div>check in</div>
                      <input type="text" className="check_in search_input" placeholder="YYYY-MM-DD" />
                    </div>
                    <div className="search_item">
                      <div>check out</div>
                      <input type="text" className="check_out search_input" placeholder="YYYY-MM-DD" />
                    </div>
                    <div className="search_item">
                      <div>adults</div>
                      <select name="adults" id="adults_1" className="dropdown_item_select search_input">
                        <option>01</option>
                        <option>02</option>
                        <option>03</option>
                      </select>
                    </div>
                    <div className="search_item">
                      <div>children</div>
                      <select name="children" id="children_1" className="dropdown_item_select search_input">
                        <option>0</option>
                        <option>02</option>
                        <option>03</option>
                      </select>
                    </div>
                    <button className="button search_button">search<span /><span /><span /></button>
                  </form>
                </div>
                {/* Search Panel */}
                <div className="search_panel">
                  <form action="#" id="search_form_2" className="search_panel_content d-flex flex-lg-row flex-column align-items-lg-center align-items-start justify-content-lg-between justify-content-start">
                    <div className="search_item">
                      <div>destination</div>
                      <input type="text" className="destination search_input" required="required" />
                    </div>
                    <div className="search_item">
                      <div>check in</div>
                      <input type="text" className="check_in search_input" placeholder="YYYY-MM-DD" />
                    </div>
                    <div className="search_item">
                      <div>check out</div>
                      <input type="text" className="check_out search_input" placeholder="YYYY-MM-DD" />
                    </div>
                    <div className="search_item">
                      <div>adults</div>
                      <select name="adults" id="adults_2" className="dropdown_item_select search_input">
                        <option>01</option>
                        <option>02</option>
                        <option>03</option>
                      </select>
                    </div>
                    <div className="search_item">
                      <div>children</div>
                      <select name="children" id="children_2" className="dropdown_item_select search_input">
                        <option>0</option>
                        <option>02</option>
                        <option>03</option>
                      </select>
                    </div>
                    <button className="button search_button">search<span /><span /><span /></button>
                  </form>
                </div>
                {/* Search Panel */}
                <div className="search_panel">
                  <form action="#" id="search_form_3" className="search_panel_content d-flex flex-lg-row flex-column align-items-lg-center align-items-start justify-content-lg-between justify-content-start">
                    <div className="search_item">
                      <div>destination</div>
                      <input type="text" className="destination search_input" required="required" />
                    </div>
                    <div className="search_item">
                      <div>check in</div>
                      <input type="text" className="check_in search_input" placeholder="YYYY-MM-DD" />
                    </div>
                    <div className="search_item">
                      <div>check out</div>
                      <input type="text" className="check_out search_input" placeholder="YYYY-MM-DD" />
                    </div>
                    <div className="search_item">
                      <div>adults</div>
                      <select name="adults" id="adults_3" className="dropdown_item_select search_input">
                        <option>01</option>
                        <option>02</option>
                        <option>03</option>
                      </select>
                    </div>
                    <div className="search_item">
                      <div>children</div>
                      <select name="children" id="children_3" className="dropdown_item_select search_input">
                        <option>0</option>
                        <option>02</option>
                        <option>03</option>
                      </select>
                    </div>
                    <button className="button search_button">search<span /><span /><span /></button>
                  </form>
                </div>
                {/* Search Panel */}
                <div className="search_panel">
                  <form action="#" id="search_form_4" className="search_panel_content d-flex flex-lg-row flex-column align-items-lg-center align-items-start justify-content-lg-between justify-content-start">
                    <div className="search_item">
                      <div>destination</div>
                      <input type="text" className="destination search_input" required="required" />
                    </div>
                    <div className="search_item">
                      <div>check in</div>
                      <input type="text" className="check_in search_input" placeholder="YYYY-MM-DD" />
                    </div>
                    <div className="search_item">
                      <div>check out</div>
                      <input type="text" className="check_out search_input" placeholder="YYYY-MM-DD" />
                    </div>
                    <div className="search_item">
                      <div>adults</div>
                      <select name="adults" id="adults_4" className="dropdown_item_select search_input">
                        <option>01</option>
                        <option>02</option>
                        <option>03</option>
                      </select>
                    </div>
                    <div className="search_item">
                      <div>children</div>
                      <select name="children" id="children_4" className="dropdown_item_select search_input">
                        <option>0</option>
                        <option>02</option>
                        <option>03</option>
                      </select>
                    </div>
                    <button className="button search_button">search<span /><span /><span /></button>
                  </form>
                </div>
                {/* Search Panel */}
                <div className="search_panel">
                  <form action="#" id="search_form_5" className="search_panel_content d-flex flex-lg-row flex-column align-items-lg-center align-items-start justify-content-lg-between justify-content-start">
                    <div className="search_item">
                      <div>destination</div>
                      <input type="text" className="destination search_input" required="required" />
                    </div>
                    <div className="search_item">
                      <div>check in</div>
                      <input type="text" className="check_in search_input" placeholder="YYYY-MM-DD" />
                    </div>
                    <div className="search_item">
                      <div>check out</div>
                      <input type="text" className="check_out search_input" placeholder="YYYY-MM-DD" />
                    </div>
                    <div className="search_item">
                      <div>adults</div>
                      <select name="adults" id="adults_5" className="dropdown_item_select search_input">
                        <option>01</option>
                        <option>02</option>
                        <option>03</option>
                      </select>
                    </div>
                    <div className="search_item">
                      <div>children</div>
                      <select name="children" id="children_5" className="dropdown_item_select search_input">
                        <option>0</option>
                        <option>02</option>
                        <option>03</option>
                      </select>
                    </div>
                    <button className="button search_button">search<span /><span /><span /></button>
                  </form>
                </div>
                {/* Search Panel */}
                <div className="search_panel">
                  <form action="#" id="search_form_6" className="search_panel_content d-flex flex-lg-row flex-column align-items-lg-center align-items-start justify-content-lg-between justify-content-start">
                    <div className="search_item">
                      <div>destination</div>
                      <input type="text" className="destination search_input" required="required" />
                    </div>
                    <div className="search_item">
                      <div>check in</div>
                      <input type="text" className="check_in search_input" placeholder="YYYY-MM-DD" />
                    </div>
                    <div className="search_item">
                      <div>check out</div>
                      <input type="text" className="check_out search_input" placeholder="YYYY-MM-DD" />
                    </div>
                    <div className="search_item">
                      <div>adults</div>
                      <select name="adults" id="adults_6" className="dropdown_item_select search_input">
                        <option>01</option>
                        <option>02</option>
                        <option>03</option>
                      </select>
                    </div>
                    <div className="search_item">
                      <div>children</div>
                      <select name="children" id="children_6" className="dropdown_item_select search_input">
                        <option>0</option>
                        <option>02</option>
                        <option>03</option>
                      </select>
                    </div>
                    <button className="button search_button">search<span /><span /><span /></button>
                  </form>
                </div>
              </div>
            </div>
          </div>		
        </div>
        {/* Intro */}
        <div className="intro">
          <div className="container">
            <div className="row">
              <div className="col">
                <h2 className="intro_title text-center">We have the best tours</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-10 offset-lg-1">
                <div className="intro_text text-center">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu convallis tortor. Suspendisse potenti. In faucibus massa arcu, vitae cursus mi hendrerit nec. </p>
                </div>
              </div>
            </div>
            <div className="row intro_items">
              {/* Intro Item */}
              <div className="col-lg-4 intro_col">
                <div className="intro_item">
                  <div className="intro_item_overlay" />
                  {/* Image by https://unsplash.com/@dnevozhai */}
                  <div className="intro_item_background" style={{backgroundImage: 'url(images/intro_1.jpg)'}} />
                  <div className="intro_item_content d-flex flex-column align-items-center justify-content-center">
                    <div className="intro_date">May 25th - June 01st</div>
                    <div className="button intro_button"><div className="button_bcg" /><a href="#">see more<span /><span /><span /></a></div>
                    <div className="intro_center text-center">
                      <h1>Mauritius</h1>
                      <div className="intro_price">From $1450</div>
                      <div className="rating rating_4">
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Intro Item */}
              <div className="col-lg-4 intro_col">
                <div className="intro_item">
                  <div className="intro_item_overlay" />
                  {/* Image by https://unsplash.com/@hellolightbulb */}
                  <div className="intro_item_background" style={{backgroundImage: 'url(images/intro_2.jpg)'}} />
                  <div className="intro_item_content d-flex flex-column align-items-center justify-content-center">
                    <div className="intro_date">May 25th - June 01st</div>
                    <div className="button intro_button"><div className="button_bcg" /><a href="#">see more<span /><span /><span /></a></div>
                    <div className="intro_center text-center">
                      <h1>Greece</h1>
                      <div className="intro_price">From $1450</div>
                      <div className="rating rating_4">
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Intro Item */}
              <div className="col-lg-4 intro_col">
                <div className="intro_item">
                  <div className="intro_item_overlay" />
                  {/* Image by https://unsplash.com/@willianjusten */}
                  <div className="intro_item_background" style={{backgroundImage: 'url(images/intro_3.jpg)'}} />
                  <div className="intro_item_content d-flex flex-column align-items-center justify-content-center">
                    <div className="intro_date">May 25th - June 01st</div>
                    <div className="button intro_button"><div className="button_bcg" /><a href="#">see more<span /><span /><span /></a></div>
                    <div className="intro_center text-center">
                      <h1>Scotland</h1>
                      <div className="intro_price">From $1450</div>
                      <div className="rating rating_4">
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* CTA */}
        <div className="cta">
          {/* Image by https://unsplash.com/@thanni */}
          <div className="cta_background" style={{backgroundImage: 'url(images/cta.jpg)'}} />
          <div className="container">
            <div className="row">
              <div className="col">
                {/* CTA Slider */}
                <div className="cta_slider_container">
                  <div className="owl-carousel owl-theme cta_slider">
                    {/* CTA Slider Item */}
                    <div className="owl-item cta_item text-center">
                      <div className="cta_title">maldives deluxe package</div>
                      <div className="rating_r rating_r_4">
                        <i />
                        <i />
                        <i />
                        <i />
                        <i />
                      </div>
                      <p className="cta_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu convallis tortor. Suspendisse potenti. In faucibus massa arcu, vitae cursus mi hendrerit nec. Proin bibendum, augue faucibus tincidunt ultrices, tortor augue gravida lectus, et efficitur enim justo vel ligula.</p>
                      <div className="button cta_button"><div className="button_bcg" /><a href="#">book now<span /><span /><span /></a></div>
                    </div>
                    {/* CTA Slider Item */}
                    <div className="owl-item cta_item text-center">
                      <div className="cta_title">maldives deluxe package</div>
                      <div className="rating_r rating_r_4">
                        <i />
                        <i />
                        <i />
                        <i />
                        <i />
                      </div>
                      <p className="cta_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu convallis tortor. Suspendisse potenti. In faucibus massa arcu, vitae cursus mi hendrerit nec. Proin bibendum, augue faucibus tincidunt ultrices, tortor augue gravida lectus, et efficitur enim justo vel ligula.</p>
                      <div className="button cta_button"><div className="button_bcg" /><a href="#">book now<span /><span /><span /></a></div>
                    </div>
                    {/* CTA Slider Item */}
                    <div className="owl-item cta_item text-center">
                      <div className="cta_title">maldives deluxe package</div>
                      <div className="rating_r rating_r_4">
                        <i />
                        <i />
                        <i />
                        <i />
                        <i />
                      </div>
                      <p className="cta_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu convallis tortor. Suspendisse potenti. In faucibus massa arcu, vitae cursus mi hendrerit nec. Proin bibendum, augue faucibus tincidunt ultrices, tortor augue gravida lectus, et efficitur enim justo vel ligula.</p>
                      <div className="button cta_button"><div className="button_bcg" /><a href="#">book now<span /><span /><span /></a></div>
                    </div>
                  </div>
                  {/* CTA Slider Nav - Prev */}
                  <div className="cta_slider_nav cta_slider_prev">
                    <svg version="1.1" id="Layer_4" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="28px" height="33px" viewBox="0 0 28 33" enableBackground="new 0 0 28 33" xmlSpace="preserve">
                      <defs>
                        <linearGradient id="cta_grad_prev">
                          <stop offset="0%" stopColor="#fa9e1b" />
                          <stop offset="100%" stopColor="#8d4fff" />
                        </linearGradient>
                      </defs>
                      <path className="nav_path" fill="#F3F6F9" d="M19,0H9C4.029,0,0,4.029,0,9v15c0,4.971,4.029,9,9,9h10c4.97,0,9-4.029,9-9V9C28,4.029,23.97,0,19,0z
								M26,23.091C26,27.459,22.545,31,18.285,31H9.714C5.454,31,2,27.459,2,23.091V9.909C2,5.541,5.454,2,9.714,2h8.571
								C22.545,2,26,5.541,26,9.909V23.091z" />
                      <polygon className="nav_arrow" fill="#F3F6F9" points="15.044,22.222 16.377,20.888 12.374,16.885 16.377,12.882 15.044,11.55 9.708,16.885 11.04,18.219 
								11.042,18.219 " />
                    </svg>
                  </div>
                  {/* CTA Slider Nav - Next */}
                  <div className="cta_slider_nav cta_slider_next">
                    <svg version="1.1" id="Layer_5" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="28px" height="33px" viewBox="0 0 28 33" enableBackground="new 0 0 28 33" xmlSpace="preserve">
                      <defs>
                        <linearGradient id="cta_grad_next">
                          <stop offset="0%" stopColor="#fa9e1b" />
                          <stop offset="100%" stopColor="#8d4fff" />
                        </linearGradient>
                      </defs>
                      <path className="nav_path" fill="#F3F6F9" d="M19,0H9C4.029,0,0,4.029,0,9v15c0,4.971,4.029,9,9,9h10c4.97,0,9-4.029,9-9V9C28,4.029,23.97,0,19,0z
							M26,23.091C26,27.459,22.545,31,18.285,31H9.714C5.454,31,2,27.459,2,23.091V9.909C2,5.541,5.454,2,9.714,2h8.571
							C22.545,2,26,5.541,26,9.909V23.091z" />
                      <polygon className="nav_arrow" fill="#F3F6F9" points="13.044,11.551 11.71,12.885 15.714,16.888 11.71,20.891 13.044,22.224 18.379,16.888 17.048,15.554 
							17.046,15.554 " />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Offers */}
        <div className="offers">
          <div className="container">
            <div className="row">
              <div className="col text-center">
                <h2 className="section_title">the best offers with rooms</h2>
              </div>
            </div>
            <div className="row offers_items">
              {/* Offers Item */}
              <div className="col-lg-6 offers_col">
                <div className="offers_item">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="offers_image_container">
                        {/* Image by https://unsplash.com/@kensuarez */}
                        <div className="offers_image_background" style={{backgroundImage: 'url(images/offer_1.jpg)'}} />
                        <div className="offer_name"><a href="#">grand castle</a></div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="offers_content">
                        <div className="offers_price">$70<span>per night</span></div>
                        <div className="rating_r rating_r_4 offers_rating">
                          <i />
                          <i />
                          <i />
                          <i />
                          <i />
                        </div>
                        <p className="offers_text">Suspendisse potenti. In faucibus massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu convallis tortor.</p>
                        <div className="offers_icons">
                          <ul className="offers_icons_list">
                            <li className="offers_icons_item"><img src="images/post.png" alt="" /></li>
                            <li className="offers_icons_item"><img src="images/compass.png" alt="" /></li>
                            <li className="offers_icons_item"><img src="images/bicycle.png" alt="" /></li>
                            <li className="offers_icons_item"><img src="images/sailboat.png" alt="" /></li>
                          </ul>
                        </div>
                        <div className="offers_link"><a href="offers.html">read more</a></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Offers Item */}
              <div className="col-lg-6 offers_col">
                <div className="offers_item">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="offers_image_container">
                        {/* Image by Egzon Bytyqi */}
                        <div className="offers_image_background" style={{backgroundImage: 'url(images/offer_2.jpg)'}} />
                        <div className="offer_name"><a href="#">turkey hills</a></div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="offers_content">
                        <div className="offers_price">$50<span>per night</span></div>
                        <div className="rating_r rating_r_4 offers_rating">
                          <i />
                          <i />
                          <i />
                          <i />
                          <i />
                        </div>
                        <p className="offers_text">Suspendisse potenti. In faucibus massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu convallis tortor.</p>
                        <div className="offers_icons">
                          <ul className="offers_icons_list">
                            <li className="offers_icons_item"><img src="images/post.png" alt="" /></li>
                            <li className="offers_icons_item"><img src="images/compass.png" alt="" /></li>
                            <li className="offers_icons_item"><img src="images/bicycle.png" alt="" /></li>
                            <li className="offers_icons_item"><img src="images/sailboat.png" alt="" /></li>
                          </ul>
                        </div>
                        <div className="offers_link"><a href="offers.html">read more</a></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Offers Item */}
              <div className="col-lg-6 offers_col">
                <div className="offers_item">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="offers_image_container">
                        {/* Image by https://unsplash.com/@nevenkrcmarek */}
                        <div className="offers_image_background" style={{backgroundImage: 'url(images/offer_3.jpg)'}} />
                        <div className="offer_name"><a href="#">island dream</a></div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="offers_content">
                        <div className="offers_price">$90<span>per night</span></div>
                        <div className="rating_r rating_r_4 offers_rating">
                          <i />
                          <i />
                          <i />
                          <i />
                          <i />
                        </div>
                        <p className="offers_text">Suspendisse potenti. In faucibus massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu convallis tortor.</p>
                        <div className="offers_icons">
                          <ul className="offers_icons_list">
                            <li className="offers_icons_item"><img src="images/post.png" alt="" /></li>
                            <li className="offers_icons_item"><img src="images/compass.png" alt="" /></li>
                            <li className="offers_icons_item"><img src="images/bicycle.png" alt="" /></li>
                            <li className="offers_icons_item"><img src="images/sailboat.png" alt="" /></li>
                          </ul>
                        </div>
                        <div className="offers_link"><a href="offers.html">read more</a></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Offers Item */}
              <div className="col-lg-6 offers_col">
                <div className="offers_item">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="offers_image_container">
                        {/* Image by https://unsplash.com/@mantashesthaven */}
                        <div className="offers_image_background" style={{backgroundImage: 'url(images/offer_4.jpg)'}} />
                        <div className="offer_name"><a href="#">travel light</a></div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="offers_content">
                        <div className="offers_price">$30<span>per night</span></div>
                        <div className="rating_r rating_r_4 offers_rating">
                          <i />
                          <i />
                          <i />
                          <i />
                          <i />
                        </div>
                        <p className="offers_text">Suspendisse potenti. In faucibus massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu convallis tortor.</p>
                        <div className="offers_icons">
                          <ul className="offers_icons_list">
                            <li className="offers_icons_item"><img src="images/post.png" alt="" /></li>
                            <li className="offers_icons_item"><img src="images/compass.png" alt="" /></li>
                            <li className="offers_icons_item"><img src="images/bicycle.png" alt="" /></li>
                            <li className="offers_icons_item"><img src="images/sailboat.png" alt="" /></li>
                          </ul>
                        </div>
                        <div className="offers_link"><a href="offers.html">read more</a></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Testimonials */}
        <div className="testimonials">
          <div className="test_border" />
          <div className="container">
            <div className="row">
              <div className="col text-center">
                <h2 className="section_title">what our clients say about us</h2>
              </div>
            </div>
            <div className="row">
              <div className="col">
                {/* Testimonials Slider */}
                <div className="test_slider_container">
                  <div className="owl-carousel owl-theme test_slider">
                    {/* Testimonial Item */}
                    <div className="owl-item">
                      <div className="test_item">
                        <div className="test_image"><img src="images/test_1.jpg" alt="https://unsplash.com/@anniegray" /></div>
                        <div className="test_icon"><img src="images/backpack.png" alt="" /></div>
                        <div className="test_content_container">
                          <div className="test_content">
                            <div className="test_item_info">
                              <div className="test_name">carla smith</div>
                              <div className="test_date">May 24, 2017</div>
                            </div>
                            <div className="test_quote_title">" Best holliday ever "</div>
                            <p className="test_quote_text">Nullam eu convallis tortor. Suspendisse potenti. In faucibus massa arcu, vitae cursus mi hendrerit nec.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Testimonial Item */}
                    <div className="owl-item">
                      <div className="test_item">
                        <div className="test_image"><img src="images/test_2.jpg" alt="https://unsplash.com/@tschax" /></div>
                        <div className="test_icon"><img src="images/island_t.png" alt="" /></div>
                        <div className="test_content_container">
                          <div className="test_content">
                            <div className="test_item_info">
                              <div className="test_name">carla smith</div>
                              <div className="test_date">May 24, 2017</div>
                            </div>
                            <div className="test_quote_title">" Best holliday ever "</div>
                            <p className="test_quote_text">Nullam eu convallis tortor. Suspendisse potenti. In faucibus massa arcu, vitae cursus mi hendrerit nec.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Testimonial Item */}
                    <div className="owl-item">
                      <div className="test_item">
                        <div className="test_image"><img src="images/test_3.jpg" alt="https://unsplash.com/@seefromthesky" /></div>
                        <div className="test_icon"><img src="images/kayak.png" alt="" /></div>
                        <div className="test_content_container">
                          <div className="test_content">
                            <div className="test_item_info">
                              <div className="test_name">carla smith</div>
                              <div className="test_date">May 24, 2017</div>
                            </div>
                            <div className="test_quote_title">" Best holliday ever "</div>
                            <p className="test_quote_text">Nullam eu convallis tortor. Suspendisse potenti. In faucibus massa arcu, vitae cursus mi hendrerit nec.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Testimonial Item */}
                    <div className="owl-item">
                      <div className="test_item">
                        <div className="test_image"><img src="images/test_2.jpg" alt="" /></div>
                        <div className="test_icon"><img src="images/island_t.png" alt="" /></div>
                        <div className="test_content_container">
                          <div className="test_content">
                            <div className="test_item_info">
                              <div className="test_name">carla smith</div>
                              <div className="test_date">May 24, 2017</div>
                            </div>
                            <div className="test_quote_title">" Best holliday ever "</div>
                            <p className="test_quote_text">Nullam eu convallis tortor. Suspendisse potenti. In faucibus massa arcu, vitae cursus mi hendrerit nec.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Testimonial Item */}
                    <div className="owl-item">
                      <div className="test_item">
                        <div className="test_image"><img src="images/test_1.jpg" alt="" /></div>
                        <div className="test_icon"><img src="images/backpack.png" alt="" /></div>
                        <div className="test_content_container">
                          <div className="test_content">
                            <div className="test_item_info">
                              <div className="test_name">carla smith</div>
                              <div className="test_date">May 24, 2017</div>
                            </div>
                            <div className="test_quote_title">" Best holliday ever "</div>
                            <p className="test_quote_text">Nullam eu convallis tortor. Suspendisse potenti. In faucibus massa arcu, vitae cursus mi hendrerit nec.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Testimonial Item */}
                    <div className="owl-item">
                      <div className="test_item">
                        <div className="test_image"><img src="images/test_3.jpg" alt="" /></div>
                        <div className="test_icon"><img src="images/kayak.png" alt="" /></div>
                        <div className="test_content_container">
                          <div className="test_content">
                            <div className="test_item_info">
                              <div className="test_name">carla smith</div>
                              <div className="test_date">May 24, 2017</div>
                            </div>
                            <div className="test_quote_title">" Best holliday ever "</div>
                            <p className="test_quote_text">Nullam eu convallis tortor. Suspendisse potenti. In faucibus massa arcu, vitae cursus mi hendrerit nec.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Testimonials Slider Nav - Prev */}
                  <div className="test_slider_nav test_slider_prev">
                    <svg version="1.1" id="Layer_6" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="28px" height="33px" viewBox="0 0 28 33" enableBackground="new 0 0 28 33" xmlSpace="preserve">
                      <defs>
                        <linearGradient id="test_grad_prev">
                          <stop offset="0%" stopColor="#fa9e1b" />
                          <stop offset="100%" stopColor="#8d4fff" />
                        </linearGradient>
                      </defs>
                      <path className="nav_path" fill="#F3F6F9" d="M19,0H9C4.029,0,0,4.029,0,9v15c0,4.971,4.029,9,9,9h10c4.97,0,9-4.029,9-9V9C28,4.029,23.97,0,19,0z
								M26,23.091C26,27.459,22.545,31,18.285,31H9.714C5.454,31,2,27.459,2,23.091V9.909C2,5.541,5.454,2,9.714,2h8.571
								C22.545,2,26,5.541,26,9.909V23.091z" />
                      <polygon className="nav_arrow" fill="#F3F6F9" points="15.044,22.222 16.377,20.888 12.374,16.885 16.377,12.882 15.044,11.55 9.708,16.885 11.04,18.219 
								11.042,18.219 " />
                    </svg>
                  </div>
                  {/* Testimonials Slider Nav - Next */}
                  <div className="test_slider_nav test_slider_next">
                    <svg version="1.1" id="Layer_7" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="28px" height="33px" viewBox="0 0 28 33" enableBackground="new 0 0 28 33" xmlSpace="preserve">
                      <defs>
                        <linearGradient id="test_grad_next">
                          <stop offset="0%" stopColor="#fa9e1b" />
                          <stop offset="100%" stopColor="#8d4fff" />
                        </linearGradient>
                      </defs>
                      <path className="nav_path" fill="#F3F6F9" d="M19,0H9C4.029,0,0,4.029,0,9v15c0,4.971,4.029,9,9,9h10c4.97,0,9-4.029,9-9V9C28,4.029,23.97,0,19,0z
							M26,23.091C26,27.459,22.545,31,18.285,31H9.714C5.454,31,2,27.459,2,23.091V9.909C2,5.541,5.454,2,9.714,2h8.571
							C22.545,2,26,5.541,26,9.909V23.091z" />
                      <polygon className="nav_arrow" fill="#F3F6F9" points="13.044,11.551 11.71,12.885 15.714,16.888 11.71,20.891 13.044,22.224 18.379,16.888 17.048,15.554 
							17.046,15.554 " />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="trending">
          <div className="container">
            <div className="row">
              <div className="col text-center">
                <h2 className="section_title">trending now</h2>
              </div>
            </div>
            <div className="row trending_container">
              {/* Trending Item */}
              <div className="col-lg-3 col-sm-6">
                <div className="trending_item clearfix">
                  <div className="trending_image"><img src="images/trend_1.png" alt="https://unsplash.com/@fransaraco" /></div>
                  <div className="trending_content">
                    <div className="trending_title"><a href="#">grand hotel</a></div>
                    <div className="trending_price">From $182</div>
                    <div className="trending_location">madrid, spain</div>
                  </div>
                </div>
              </div>
              {/* Trending Item */}
              <div className="col-lg-3 col-sm-6">
                <div className="trending_item clearfix">
                  <div className="trending_image"><img src="images/trend_2.png" alt="https://unsplash.com/@grovemade" /></div>
                  <div className="trending_content">
                    <div className="trending_title"><a href="#">mars hotel</a></div>
                    <div className="trending_price">From $182</div>
                    <div className="trending_location">madrid, spain</div>
                  </div>
                </div>
              </div>
              {/* Trending Item */}
              <div className="col-lg-3 col-sm-6">
                <div className="trending_item clearfix">
                  <div className="trending_image"><img src="images/trend_3.png" alt="https://unsplash.com/@jbriscoe" /></div>
                  <div className="trending_content">
                    <div className="trending_title"><a href="#">queen hotel</a></div>
                    <div className="trending_price">From $182</div>
                    <div className="trending_location">madrid, spain</div>
                  </div>
                </div>
              </div>
              {/* Trending Item */}
              <div className="col-lg-3 col-sm-6">
                <div className="trending_item clearfix">
                  <div className="trending_image"><img src="images/trend_4.png" alt="https://unsplash.com/@oowgnuj" /></div>
                  <div className="trending_content">
                    <div className="trending_title"><a href="#">mars hotel</a></div>
                    <div className="trending_price">From $182</div>
                    <div className="trending_location">madrid, spain</div>
                  </div>
                </div>
              </div>
              {/* Trending Item */}
              <div className="col-lg-3 col-sm-6">
                <div className="trending_item clearfix">
                  <div className="trending_image"><img src="images/trend_5.png" alt="https://unsplash.com/@mindaugas" /></div>
                  <div className="trending_content">
                    <div className="trending_title"><a href="#">grand hotel</a></div>
                    <div className="trending_price">From $182</div>
                    <div className="trending_location">madrid, spain</div>
                  </div>
                </div>
              </div>
              {/* Trending Item */}
              <div className="col-lg-3 col-sm-6">
                <div className="trending_item clearfix">
                  <div className="trending_image"><img src="images/trend_6.png" alt="https://unsplash.com/@itsnwa" /></div>
                  <div className="trending_content">
                    <div className="trending_title"><a href="#">mars hotel</a></div>
                    <div className="trending_price">From $182</div>
                    <div className="trending_location">madrid, spain</div>
                  </div>
                </div>
              </div>
              {/* Trending Item */}
              <div className="col-lg-3 col-sm-6">
                <div className="trending_item clearfix">
                  <div className="trending_image"><img src="images/trend_7.png" alt="https://unsplash.com/@rktkn" /></div>
                  <div className="trending_content">
                    <div className="trending_title"><a href="#">queen hotel</a></div>
                    <div className="trending_price">From $182</div>
                    <div className="trending_location">madrid, spain</div>
                  </div>
                </div>
              </div>
              {/* Trending Item */}
              <div className="col-lg-3 col-sm-6">
                <div className="trending_item clearfix">
                  <div className="trending_image"><img src="images/trend_8.png" alt="https://unsplash.com/@thoughtcatalog" /></div>
                  <div className="trending_content">
                    <div className="trending_title"><a href="#">mars hotel</a></div>
                    <div className="trending_price">From $182</div>
                    <div className="trending_location">madrid, spain</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="contact">
          <div className="contact_background" style={{backgroundImage: 'url(images/contact.png)'}} />
          <div className="container">
            <div className="row">
              <div className="col-lg-5">
                <div className="contact_image">
                </div>
              </div>
              <div className="col-lg-7">
                <div className="contact_form_container">
                  <div className="contact_title">get in touch</div>
                  <form action="#" id="contact_form" className="contact_form">
                    <input type="text" id="contact_form_name" className="contact_form_name input_field" placeholder="Name" required="required" data-error="Name is required." />
                    <input type="text" id="contact_form_email" className="contact_form_email input_field" placeholder="E-mail" required="required" data-error="Email is required." />
                    <input type="text" id="contact_form_subject" className="contact_form_subject input_field" placeholder="Subject" required="required" data-error="Subject is required." />
                    <textarea id="contact_form_message" className="text_field contact_form_message" name="message" rows={4} placeholder="Message" required="required" data-error="Please, write us a message." defaultValue={""} />
                    <button type="submit" id="form_submit_button" className="form_submit_button button">send message<span /><span /><span /></button>
                  </form>
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
                      <li className="footer_nav_item"><a href="#">home</a></li>
                      <li className="footer_nav_item"><a href="about.html">about us</a></li>
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
      </Router>        
        
        )
    }
}
