import React, { Component } from 'react';
// import logo from './logo.svg';
import './style.css';
// import './js/js-image-slider';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="header">
          <div className="navbar">
            <div className="logo">
              <span className="logo">AdiWawan</span>
            </div>
            <div className="menu">
              <ul>
                  <li><a>Promo</a></li>
                  <li><a>paket & Add-On</a></li>
                  <li><a>pusat bantuan</a></li>
                  <li><a>info terkini</a></li>
                  <li className=""><a>myIndiHome</a></li>
              </ul>
            </div>
            {/**end menu */}
          </div>
          {/*end navbar */}
        </div>
        {/*end header */}
        <div className="head-bottom"><p>Berlangganan IndiHome bisa dapat internet cepat, nelpon rumah sepuasnya dan nonton beragam konten terbaik di layar TV interaktif</p></div>
        {/*end header-bottom */}
        
            <div className="container">
                <div className="slider">
                    <img src={require('./images/img1.jpg')} alt="slider1"></img>
                    {/*<img src={require('./images/img2.jpg')} alt="slider2"></img>
                    <img src={require('./images/img3.jpg')} alt="slider3"></img>
                    <img src={require('./images/img4.jpg')} alt="slider4"></img>*/}
                </div>
                <div className="container-kanan">
                  {/*<img src={require('./images/page2_img3.jpg')} alt="slider1"></img>*/}
                  <div className="banner"><button type="button" className="detail"><a>Lihat Detail</a></button></div>
                  <div className="banner"><button type="button" className="detail"><a>Lihat Detail</a></button></div>
                </div>

                <div className="banner-bottom">
                  <h2>Add-On Unggulan</h2>
                  <div className="banner-bottom-ok">
                    <img className="addon-img" src={require('./images/addon/hooq-home.jpg')} alt="adon" />
                    <div className="addon-desc">
                        <span className="pull-right">
                        <a href="#">
                          LIHAT
                        </a>
                        </span>
                        <b>Hooq</b>
                    </div>
                  </div>
                  <div className="banner-bottom-ok">
                    <img className="addon-img" src={require('./images/addon/iflix-home.jpg')} alt="adon" />
                    <div className="addon-desc">
                        <span className="pull-right">
                        <a href="#">
                          LIHAT
                        </a>
                        </span>
                        <b>Iflix</b>
                    </div>
                  </div>
                  <div className="banner-bottom-ok">
                    <img className="addon-img" src={require('./images/addon/edukids-home.jpg')} alt="adon" />
                    <div className="addon-desc">
                        <span className="pull-right">
                        <a href="#">
                          LIHAT
                        </a>
                        </span>
                        <b>EduKids</b>
                    </div>
                  </div>
                  <div className="banner-bottom-ok">
                    <img className="addon-img" src={require('./images/addon/catchplay-home-new.jpg')} alt="adon" />
                    <div className="addon-desc">
                        <span className="pull-right">
                        <a href="#">
                          LIHAT
                        </a>
                        </span>
                        <b>CatchPlay</b>
                    </div>
                  </div>

                </div>
            </div>
                <div className="tivi">
                        <h2>Berlangganan IndiHome dan nikmati konten terbaik di dalam layar TV Anda</h2>
                        {/*<h2>INDI || HOOQ || CATCHPLAY</h2>*/}
                        <center>
                          <div className="list-tivi">
                              <div className="tv-table-box">
                              <table className="tv-table">
                                <tr>
                                  <td className="limit">
                                    <img src={require('./images/addon/Indihome-active.png')} alt="adon" className="tv-category" id="useetv" />
                                  </td>
                                  <td className="limit">
                                    <img src={require('./images/addon/hooq.png')} alt="adon" className="tv-category selected" id="hooq"/>
                                  </td>
                                  <td>
                                    <img src={require('./images/addon/catchplay.png')} alt="adon" className="tv-category" id="catchplay"/>
                                  </td>
                                </tr>
                              </table>
                              <br/>
                            </div>
                          </div>
                        </center>
                        <div className="tv">
                          <div className="kotak">
                            <div className="tv-banner">
                              <img className="tv-image " src={(require('./images/addon/Captain-Marvel-IndiHome-Highlight_D.jpg'))} alt="tv"></img>
                            </div>
                              <h3>Judul</h3>
                              <p>Descripsi</p>
                          </div>
                          <div className="kotak">
                              <div className="tv-banner">
                                <img className="tv-image " src={(require('./images/addon/200x270-BOOMERANG-TAFFY_D.jpg'))} alt="tv"></img>
                              </div>
                              <h3>Judul</h3>
                              <p>Descripsi</p>
                          </div>
                          <div className="kotak">
                            <div className="tv-banner">
                              <img className="tv-image " src={(require('./images/addon/200x270-ANIMAX-THEDEMONNEXTDOOR_D.jpg'))} alt="tv"></img>
                            </div>
                              <h3>Judul</h3>
                              <p>Descripsi</p>
                          </div>
                          <div className="kotak">
                            <div className="tv-banner">
                              <img className="tv-image " src={(require('./images/addon/200x270-KPLUS-INTERNDETECTIVE_D.jpg'))} alt="tv"></img>
                            </div>
                              <h3>Judul</h3>
                              <p>Descripsi</p>
                          </div>
                          
                        </div>
                </div>

        </div>
    );
  }
}

export default App;