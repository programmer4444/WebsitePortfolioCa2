import './Navbar.css';

import ProfilePic from './images/pic.png';
import Pong from './images/play_pong.gif';
import Chess from './images/chess_play.gif';
import Weather from './images/Weather.gif';
import Photo from './images/photo.png'
import Resume from './images/MuhammedHaddadCV.pdf'
import React, { useState,useRef } from 'react';
import useClipboard from './Clip'
import { faDownload, faUser, faG } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const NavbarPage = () => {

  const emailRef = useRef(null);
  const { isCopied, copyToClipboard } = useClipboard();
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName === activeButton ? null : buttonName);
  };

  const [activeYear, setActiveYear] = useState(null);

  const handleYearClick = (buttonYear) => {
    setActiveYear(buttonYear === activeYear ? null : buttonYear);
  };


  const iconStyle = {
    backgroundColor: 'black',
    color: 'white', // Set the desired background color
    padding: '5px',
    borderRadius: '50%'

  };
  const pongImageSize = {
    width: '100%', // Set the width as a percentage of the container
    height: '100%', // Set the height as a percentage of the container
  };


  


  return (
    <div >
      
      <nav id="navbar-example2" class="navbar navbar-light bg-white px-3">
        <a class="navbar-brand">Muhammed Haddad</a>
        <ul class="nav nav-pills" >
          <div class="btn-group" role="group" aria-label="Basic outlined example">
            <button type="button" className={`btn ${activeButton === 'Home' ? 'btn btn-dark' : 'btn-outline-dark'}`}
              onClick={() => handleButtonClick('Home')}> <a href="#scrollspyHeading1"
                style={{ color: activeButton === 'Home' ? 'white' : 'inherit' }}>Home</a></button>
            <button type="button" className={`btn ${activeButton === 'Education' ? 'btn btn-dark' : 'btn-outline-dark'}`}
              onClick={() => handleButtonClick('Education')}> <a href="#scrollspyHeading2"
                style={{ color: activeButton === 'Education' ? 'white' : 'inherit' }}>Education</a></button>
            <button type="button" className={`btn ${activeButton === 'Work' ? 'btn btn-dark' : 'btn-outline-dark'}`}
              onClick={() => handleButtonClick('Work')}> <a href="#scrollspyHeading3"
                style={{ color: activeButton === 'Work' ? 'white' : 'inherit' }}>Work</a></button>
            <button type="button" className={`btn ${activeButton === 'About' ? 'btn btn-dark' : 'btn-outline-dark'}`}
              onClick={() => handleButtonClick('About')}> <a href="#scrollspyHeading4"
                style={{ color: activeButton === 'About' ? 'white' : 'inherit' }}>About</a></button>
          </div>
        </ul>

      </nav>

      <div className='Hero_bg' id="scrollspyHeading1">
        <div className='space_between_nav'></div>
        <div className='Hero'><img src={ProfilePic} alt="Profile Pic" className="profile_pic" />
          <div className='Hero_Intro'>
            <h2>Hi There, <br />I am Muhammed</h2>
            <div className='Hero_Role'>
              <p>As an inspiring web designer, I blend creativity and technical
                proficiency to craft visually stunning and user-centric websites.
              </p>
            </div>
            <div>
            <a href={Resume} download="your-cv.pdf">

              <button type="button" class="btn btn-dark btn-lg btn-spacing">Download CV <FontAwesomeIcon 
              className='faIcon' icon={faDownload} /></button></a>  
              <a href="#scrollspyHeading4"><button type="button" class="btn btn-dark btn-lg btn-spacing">About Me 
              <FontAwesomeIcon className='faIcon' icon={faUser} /></button></a> 
            </div>
            <div className='Hero_Icons w-25'>
              <div className='row'>
                <div className='col-md-3'>

                  <a href="https://www.linkedin.com/in/muhammed-haddad-6567901a2/" target="_blank" rel="noopener noreferrer">
                    <button type="button" className="btn btn-info btn-icon">
                      <i className="fa fa-linkedin" aria-hidden="true" style={iconStyle}></i>
                    </button>
                  </a>         </div>
                <div className='col-md-3'>
                  <a href="https://github.com/mhaddad20" target="_blank" rel="noopener noreferrer">
                    <button type="button" className="btn btn-info btn-icon">
                      <i className="fa fa-github" aria-hidden="true" style={iconStyle}></i>
                    </button>
                  </a>         </div>
                <div className='col-md-3'>
                  <a href="https://www.facebook.com/muhammed.haddad.125/" target="_blank" rel="noopener noreferrer">
                    <button type="button" className="btn btn-info btn-icon">
                      <i className="fa fa-facebook" aria-hidden="true" style={iconStyle}></i>
                    </button>
                  </a>           </div>
                <div className='col-md-3'>
                  <button type="button" class="btn btn-info  btn-icon"><i class="fa fa-phone" aria-hidden="true" style={iconStyle}></i></button>
                </div>
              </div>
            </div>


          </div>

        </div>
      </div>
      <div className='Education_Card' id="scrollspyHeading2">
        <div className='Education_title'>
          <h4>My Education</h4>
          <p>Education is the key to unlocking a world of opportunities</p>
        </div>

        <div class="accordion" id="accordionExample" style={{ paddingLeft: '15%', paddingRight: '15%', marginBottom: '5%' }}>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
              <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                <div class="container">
                  <div class="card flex-row flex-wrap">
                    <img src="https://universityvacancies.com/sites/default/files/main_image_0.jpg" className="Institution"></img>
                    <div class="card-block px-2">
                      <div class="card-body">
                        <h5 class="card-title Bachelor">Bachelor of Science (Hons) in Computing</h5>
                        <h6 class="card-subtitle mb-2 text-muted Institution_Name">Technological University Dublin - Tallaght</h6>
                        <p class="card-text Year_Study">2019-2023</p>
                        <h4 href="#" class="card-link">Overall GPA: 3.6</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </button>
            </h2>
            <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
              <div class="accordion-body">

                <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                  <div class="row" style={{ width: '100%' }}>
                    <div className='col-3' >
                      <li class="nav-item" role="presentation">
                        <button className={`btn ${activeYear === 'Year4' ? 'btn btn-dark' : 'btn-outline-dark'}`}
                          onClick={() => handleYearClick('Year4')} id="pills-year4-tab" data-bs-toggle="pill" data-bs-target="#pills-year4"
                          type="button" role="tab" aria-controls="pills-year4" aria-selected="true" style={{ width: '100%' }}>Year 4</button>
                      </li>
                    </div>
                    <div className='col-3'>
                      <li class="nav-item" role="presentation">
                        <button className={`btn ${activeYear === 'Year3' ? 'btn btn-dark' : 'btn-outline-dark'}`}
                          onClick={() => handleYearClick('Year3')} id="pills-year3-tab" data-bs-toggle="pill"
                          data-bs-target="#pills-year3" type="button" role="tab" aria-controls="pills-year3" aria-selected="false" style={{ width: '100%' }}>Year 3</button>
                      </li>
                    </div>
                    <div className='col-3'>
                      <li class="nav-item" role="presentation">
                        <button className={`btn ${activeYear === 'Year2' ? 'btn btn-dark' : 'btn-outline-dark'}`}
                          onClick={() => handleYearClick('Year2')} id="pills-year2-tab" data-bs-toggle="pill" data-bs-target="#pills-year2"
                          type="button" role="tab" aria-controls="pills-year2" aria-selected="false" style={{ width: '100%' }}>Year 2</button>
                      </li>
                    </div>
                    <div className='col-3'>
                      <li class="nav-item" role="presentation">
                        <button className={`btn ${activeYear === 'Year1' ? 'btn btn-dark' : 'btn-outline-dark'}`}
                          onClick={() => handleYearClick('Year1')} id="pills-year1-tab" data-bs-toggle="pill" data-bs-target="#pills-year1"
                          type="button" role="tab" aria-controls="pills-year1" aria-selected="false" style={{ width: '100%' }}>Year 1</button>
                      </li>
                    </div>
                  </div>
                </ul>
                <div class="tab-content" id="pills-tabContent">
                  <div class="tab-pane fade show active" id="pills-year4" role="tabpanel" aria-labelledby="pills-year4-tab">
                    {activeYear === 'Year4' && (
                      <div className="card-body">
                        <h5 className="card-title mb-4">Semesters 1 & 2</h5>

                        <div className='col-6'>
                          <div className='result' >
                            <h6 class="card-subtitle mb-2 text-muted">Interactive Media Design & Visualisation</h6>
                            <h6 class="card-subtitle mb-2 text-muted">B</h6>
                          </div>
                        </div>

                        <div className='col-6'>
                          <div className='result'>
                            <h6 class="card-subtitle mb-2 text-muted">4th Year Project</h6>
                            <h6 class="card-subtitle mb-2 text-muted">B</h6>
                          </div>
                        </div>

                        <div className='col-6'>
                          <div className='result'>
                            <h6 class="card-subtitle mb-2 text-muted">Applied Machine Learning</h6>
                            <h6 class="card-subtitle mb-2 text-muted">C</h6>
                          </div>
                        </div>

                        <div className='col-6'>
                          <div className='result'>
                            <h6 class="card-subtitle mb-2 text-muted">Enterprise Applications Development 1</h6>
                            <h6 class="card-subtitle mb-2 text-muted">B</h6>
                          </div>
                        </div>

                        <div className='col-6'>
                          <div className='result'>
                            <h6 class="card-subtitle mb-2 text-muted">Information Management</h6>
                            <h6 class="card-subtitle mb-2 text-muted">A</h6>
                          </div>
                        </div>

                        <div className='col-6'>
                          <div className='result'>
                            <h6 class="card-subtitle mb-2 text-muted">Enterprise Performance Architecture</h6>
                            <h6 class="card-subtitle mb-2 text-muted">A</h6>
                          </div>
                        </div>

                        <h5 className="card-title mb-4">GPA: 3.5</h5>
                      </div>
                    )}
                  </div>
                  <div class="tab-pane fade" id="pills-year3" role="tabpanel" aria-labelledby="pills-year3-tab">
                    {activeYear === 'Year3' && (
                      <div className="card-body">
                        <h5 className="card-title mb-4">Semesters 1 & 2</h5>

                        <div className='col-6'>
                          <div className='result' >
                            <h6 class="card-subtitle mb-2 text-muted">Big Data Technologies - Full-time</h6>
                            <h6 class="card-subtitle mb-2 text-muted">A</h6>
                          </div>
                        </div>

                        <div className='col-6'>
                          <div className='result'>
                            <h6 class="card-subtitle mb-2 text-muted">Operating Systems (Sem 5)</h6>
                            <h6 class="card-subtitle mb-2 text-muted">B</h6>
                          </div>
                        </div>

                        <div className='col-6'>
                          <div className='result'>
                            <h6 class="card-subtitle mb-2 text-muted">Server Side Web Development (Full-Time)</h6>
                            <h6 class="card-subtitle mb-2 text-muted">B</h6>
                          </div>
                        </div>

                        <div className='col-6'>
                          <div className='result'>
                            <h6 class="card-subtitle mb-2 text-muted">Advanced Routing & Switching - 3ARS</h6>
                            <h6 class="card-subtitle mb-2 text-muted">C</h6>
                          </div>
                        </div>

                        <div className='col-6'>
                          <div className='result'>
                            <h6 class="card-subtitle mb-2 text-muted">Data Structures and Algorithms (Computing)</h6>
                            <h6 class="card-subtitle mb-2 text-muted">A</h6>
                          </div>
                        </div>

                        <div className='col-6'>
                          <div className='result'>
                            <h6 class="card-subtitle mb-2 text-muted">Experiential Learning (Semester 5)</h6>
                            <h6 class="card-subtitle mb-2 text-muted">A</h6>
                          </div>
                        </div>

                        <h5 className="card-title mb-4">GPA: 3.6</h5>
                      </div>


                    )}
                  </div>
                  <div class="tab-pane fade" id="pills-year2" role="tabpanel" aria-labelledby="pills-year2-tab">

                    {activeYear === 'Year2' && (
                      <div className="card-body">
                        <h5 className="card-title mb-4">Semesters 1 & 2</h5>

                        <div className='col-6'>
                          <div className='result' >
                            <h6 class="card-subtitle mb-2 text-muted">Client-Side Web Development (SWD FT)</h6>
                            <h6 class="card-subtitle mb-2 text-muted">A</h6>
                          </div>
                        </div>

                        <div className='col-6'>
                          <div className='result'>
                            <h6 class="card-subtitle mb-2 text-muted">Software Quality Assurance and Testing-FT</h6>
                            <h6 class="card-subtitle mb-2 text-muted">A</h6>
                          </div>
                        </div>

                        <div className='col-6'>
                          <div className='result'>
                            <h6 class="card-subtitle mb-2 text-muted">Advanced Database Technologies</h6>
                            <h6 class="card-subtitle mb-2 text-muted">B</h6>
                          </div>
                        </div>

                        <div className='col-6'>
                          <div className='result'>
                            <h6 class="card-subtitle mb-2 text-muted">Discrete Mathematics 2</h6>
                            <h6 class="card-subtitle mb-2 text-muted">A</h6>
                          </div>
                        </div>

                        <div className='col-6'>
                          <div className='result'>
                            <h6 class="card-subtitle mb-2 text-muted">Network Fundamentals</h6>
                            <h6 class="card-subtitle mb-2 text-muted">B</h6>
                          </div>
                        </div>

                        <div className='col-6'>
                          <div className='result'>
                            <h6 class="card-subtitle mb-2 text-muted">Software Development 3</h6>
                            <h6 class="card-subtitle mb-2 text-muted">B</h6>
                          </div>
                        </div>


                        <h5 className="card-title mb-4">GPA: 3.7</h5>
                      </div>

                    )}
                  </div>
                  <div class="tab-pane fade" id="pills-year1" role="tabpanel" aria-labelledby="pills-year1-tab">
                    {activeYear === 'Year1' && (
                      <div className="card-body">
                        <h5 className="card-title mb-4">Semesters 1 & 2</h5>
                        <div className='col-6'>
                          <div className='result' >
                            <h6 class="card-subtitle mb-2 text-muted">Software Development 1</h6>
                            <h6 class="card-subtitle mb-2 text-muted">A</h6>
                          </div>
                        </div>

                        <div className='col-6'>
                          <div className='result'>
                            <h6 class="card-subtitle mb-2 text-muted">Business and Information Systems</h6>
                            <h6 class="card-subtitle mb-2 text-muted">B</h6>
                          </div>
                        </div>

                        <div className='col-6'>
                          <div className='result'>
                            <h6 class="card-subtitle mb-2 text-muted">Computer Architecture</h6>
                            <h6 class="card-subtitle mb-2 text-muted">B</h6>
                          </div>
                        </div>

                        <div className='col-6'>
                          <div className='result'>
                            <h6 class="card-subtitle mb-2 text-muted">Critical Skills Development (Computing FT)</h6>
                            <h6 class="card-subtitle mb-2 text-muted">B</h6>
                          </div>
                        </div>

                        <div className='col-6'>
                          <div className='result'>
                            <h6 class="card-subtitle mb-2 text-muted">Discrete Mathematics 1</h6>
                            <h6 class="card-subtitle mb-2 text-muted">A</h6>
                          </div>
                        </div>

                        <div className='col-6'>
                          <div className='result'>
                            <h6 class="card-subtitle mb-2 text-muted">Visual Design and User Experience</h6>
                            <h6 class="card-subtitle mb-2 text-muted">B</h6>
                          </div>
                        </div>
                        <h5 className="card-title mb-4">GPA: 3.5</h5>
                      </div>
                    )}
                  </div>
                </div>



              </div>
            </div>
          </div>
        </div>
      </div>


      <div className='Experience_Card' id="scrollspyHeading3">

        <div className='Experience_title'>
          <h4> <i class="fa fa-briefcase work_icon" style={{ paddingRight: '10px' }} aria-hidden="true"></i>Experience</h4>
        </div>
        <div style={{ paddingLeft: '12.5%' }}>
          <div className='row' style={{ width: '90%' }}>
            <div className='col-6' style={{ width: '45%' }}>
              <div class="container mt-5">
                <div class="card custom-card" >
                  <div class="card-body">
                    <h5 class="card-title job1_h5">Liberty IT</h5>
                    <p class="card-text job1_p">
                      Software Engineer | Internship
                    </p>
                    <p class="card-text ">
                      Jan 2022 - Aug 2022
                    </p>
                    <div class="arrow"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-6'>
              <div class="container mt-5">
                <i class="fa fa-briefcase work_icon" aria-hidden="true"></i>
                <div class="vertical-line"></div>
              </div>
            </div>
          </div>

          <div className='row' style={{ width: '90%' }}>
            <div className='col-6' style={{ width: '45%' }}>
            </div>
            <div className='col-1'>
              <div class="container mt-5">

                <i class="fa fa-briefcase work_icon2" aria-hidden="true"></i>
                <div class="vertical-line"></div>
              </div>
            </div>
            <div className='col-5' >
              <div class="container mt-5">
                <div class="card custom-card " >
                  <div class="card-body">
                    <h5 class="card-title job1_h5">Camara Education</h5>
                    <p class="card-text job1_p">
                      Hardware Technician | Volunteer
                    </p>
                    <p class="card-text">
                      Sep 2018 - Dec 2018
                    </p>
                    <div class="arrow2"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div className='row' style={{ width: '90%' }}>
            <div className='col-6' style={{ width: '45%' }}>
              <div class="container mt-5">
                <div class="card custom-card" >
                  <div class="card-body">



                    <h5 class="card-title job1_h5">Fiverr</h5>
                    <p class="card-text job1_p">
                      Software Developer | Freelance
                    </p>
                    <p class="card-text ">
                      Jan 2020 - Present
                    </p>
                    <div class="arrow"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-6'>
              <div class="container mt-5">

                <i class="fa fa-briefcase work_icon" aria-hidden="true"></i>
                <div class="vertical-line"></div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className='Skills_Card' >

        <div className='Skills_title'>

          <h4>Skills</h4>
        </div>

        <div className='row' style={{ width: '90%', paddingLeft: '10%' }}>
          <div className='col-6' >
            <div class="container mt-5" >
              <div class="card" >
                <div class="card-body" >



                  <h5 class="card-title text-muted Frontend">Frontend Development</h5>
                  <div className='row' style={{ paddingBottom: '5%' }}>
                    <div className='col-6' style={{ paddingLeft: '10%' }}>

                      <h5> <i class="fa fa-check skills_icon" aria-hidden="true" style={{ paddingRight: '5%' }}></i>HTML</h5>
                    </div>
                    <div className='col-6' style={{ paddingLeft: '10%' }}>
                      <h5> <i class="fa fa-check skills_icon" aria-hidden="true" style={{ paddingRight: '5%' }}></i>CSS</h5>
                    </div>
                  </div>

                  <div className='row' style={{ paddingBottom: '5%' }}>
                    <div className='col-6' style={{ paddingLeft: '10%' }}>

                      <h5> <i class="fa fa-check skills_icon" aria-hidden="true" style={{ paddingRight: '5%' }}></i>Bootstrap</h5>
                    </div>
                    <div className='col-6' style={{ paddingLeft: '10%' }}>
                      <h5> <i class="fa fa-check skills_icon" aria-hidden="true" style={{ paddingRight: '5%' }}></i>JavaScript</h5>
                    </div>
                  </div>
                  <div className='row' style={{ paddingBottom: '5%' }}>
                    <div className='col-6' style={{ paddingLeft: '10%' }}>

                      <h5> <i class="fa fa-check skills_icon" aria-hidden="true" style={{ paddingRight: '5%' }}></i>React JS</h5>
                    </div>
                    <div className='col-6' style={{ paddingLeft: '10%' }}>
                      <h5> <i class="fa fa-check skills_icon" aria-hidden="true" style={{ paddingRight: '5%' }}></i>TypeScript</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-6'>
            <div class="container mt-5" >
              <div class="card" >
                <div class="card-body" >



                  <h5 class="card-title text-muted Frontend">Backend Development</h5>
                  <div className='row' style={{ paddingBottom: '5%' }}>
                    <div className='col-6' style={{ paddingLeft: '10%' }}>

                      <h5> <i class="fa fa-check skills_icon" aria-hidden="true" style={{ paddingRight: '5%' }}></i>Node JS</h5>
                    </div>
                    <div className='col-6' style={{ paddingLeft: '10%' }}>
                      <h5> <i class="fa fa-check skills_icon" aria-hidden="true" style={{ paddingRight: '5%' }}></i>SQL</h5>
                    </div>
                  </div>

                  <div className='row' style={{ paddingBottom: '5%' }}>
                    <div className='col-6' style={{ paddingLeft: '10%' }}>

                      <h5> <i class="fa fa-check skills_icon" aria-hidden="true" style={{ paddingRight: '5%' }}></i>Express JS</h5>
                    </div>
                    <div className='col-6' style={{ paddingLeft: '10%' }}>
                      <h5> <i class="fa fa-check skills_icon" aria-hidden="true" style={{ paddingRight: '5%' }}></i>Git</h5>
                    </div>
                  </div>
                  <div className='row' style={{ paddingBottom: '5%' }}>
                    <div className='col-6' style={{ paddingLeft: '10%' }}>

                      <h5> <i class="fa fa-check skills_icon" aria-hidden="true" style={{ paddingRight: '5%' }}></i>AWS</h5>
                    </div>
                    <div className='col-6' style={{ paddingLeft: '10%' }}>
                      <h5> <i class="fa fa-check skills_icon" aria-hidden="true" style={{ paddingRight: '5%' }}></i>Google Cloud</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>


      <div className='Projects_Card' >

        <div className='Projects_title'>

          <h4>Personal Projects</h4>

          <div className='row' style={{ width: '100%' }}>
            <div className='col-4' >
              <div class="container mt-4"  >
                <div class="card">

                  <div class="card-body">
                    <img src={Weather} class="card-img-top" alt="Sample Image" style={pongImageSize} ></img>
                    <h5 class="card-title mt-4">Weather App</h5>
                    <p class="card-text">Made with C# Blazor WebAssembly</p>
                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                      Learn More
                    </button>


                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                      <div class="modal-dialog">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                          </div>
                          <div class="modal-body">
                            Step into a world of meteorological exploration with our C# Blazor WebAssembly One Weather App.
                          </div>
                          <div class="modal-footer">
                            <a href='https://github.com/programmer4444/WeatherAppCA3/tree/master'>
                            <button type="button" class="btn btn-success" data-bs-dismiss="modal">Open Project</button></a>
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                          </div>
                        </div>
                      </div>
                    </div>


                  </div>
                </div>
              </div>
            </div>
            <div className='col-4'>
              <div class="container mt-4" >
                <div class="card" >
                  <img src={Chess} class="card-img-top" alt="Sample Image" style={pongImageSize}></img>
                  <div class="card-body">
                    <h5 class="card-title">Chess App</h5>
                    <p class="card-text">Made with Ruby</p>
                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal2">
                      Learn More
                    </button>


                    <div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                      <div class="modal-dialog">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                          </div>
                          <div class="modal-body">
                            Immerse yourself in the timeless game of chess with our Ruby 2D Chess app.
                          </div>
                          <div class="modal-footer">
                            <a href='https://github.com/mhaddad20/Chess'>
                          <button type="button" class="btn btn-success" data-bs-dismiss="modal">Open Project</button></a>
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
            <div className='col-4'>
              <div class="container mt-4" >
                <div class="card" >
                  <img src={Pong} class="card-img-top" alt="Sample Image" style={pongImageSize}></img>
                  <div class="card-body">
                    <h5 class="card-title">Ping Pong App</h5>
                    <p class="card-text">Made with Ruby</p>
                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal3">
                      Learn More
                    </button>


                    <div class="modal fade" id="exampleModal3" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                      <div class="modal-dialog">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                          </div>
                          <div class="modal-body">
                            Experience the classic game of Ping Pong in a captivating 2D environment with our Ruby 2D Ping Pong app.
                          </div>
                          <div class="modal-footer">
                            <a href='https://github.com/mhaddad20/Ping-Pong'>
                            <button type="button" class="btn btn-success" data-bs-dismiss="modal">Open Project</button></a>
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>




        </div>

      </div>

      <div className='About_Card' id="scrollspyHeading4">

        <div className='About_title'>

          <h4>More About Me</h4>
        </div>
        <div className='row' style={{ width: '100%', paddingLeft: '10%' }}>
          <div className='col-7'>
            <div class="container mt-4" >
              <div class="card" >
                <div class="card-body" style={{ paddingTop: '5%', paddingLeft: '5%', backgroundColor: '#292f2f' }}>
                  <p class="card-text text-white">I am Muhammed</p>
                  <p class="card-text text-white" > Navigating the ever-evolving landscape of technology, I embrace the challenges as opportunities for growth. Whether it's designing intuitive user interfaces or delving into the intricacies of complex problem-solving,
                    I find joy in every aspect of the development process. </p>
                  <p class="card-text text-white">As a software enthusiast, I thrive on problem-solving challenges, wield version control with finesse, craft seamless API solutions, and embrace the efficiency of DevOps practices in my development journey</p>
                  <p class="card-text text-white" style={{ paddingBottom: '10%' }}>As for my hobbies,                     I thrive on the exhilaration of biking and the serenity of long walks in the park.
                    These activities not only keep me physically fit but also cultivate my determination,
                    resilience, and appreciation for nature. </p>
                </div>
              </div>
            </div>
          </div>
          <div className='col-5'>
            <div class="container mt-4" style={{ height: '1000px' }}>
              <div class="card" style={{ width: '100%', backgroundColor: '#292f2f', height: '500px' }}>
                <img src={Photo} style={{
                  height: '100px', width: '100px', borderRadius: '50%', marginTop: '5%', marginLeft: '40%',
                  paddingTop: '1%'
                }}></img>
                <div class="card-body">
                  <p className='card-text text-white' style={{ paddingLeft: '30%', fontSize: '25px', fontFamily: 'Arial' }}>Muhammed Haddad</p>
                  <p className='card-text text-white' style={{ paddingLeft: '25%', fontSize: '20px' }}>Student At TU Dublin, Tallaght</p>
                  <p className='card-text text-white' style={{ paddingLeft: '25%', fontSize: '15px' }}>
                    <span class="logged-in">●</span>Available for new opportunitites</p>
                  <div className='row' style={{ marginLeft: '15%', marginTop: '5%', marginRight: '5%' }}>
                    <div className='col-md-3'>
                      <button type="button" class="btn btn-info  btn-icon"><i class="fa fa-linkedin" aria-hidden="true" style={iconStyle}></i></button>
                    </div>
                    <div className='col-md-3'>
                      <button type="button" class="btn btn-info  btn-icon"><i class="fa fa-github" aria-hidden="true" style={iconStyle}></i></button>
                    </div>
                    <div className='col-md-3'>
                      <button type="button" class="btn btn-info  btn-icon"><i class="fa fa-facebook" aria-hidden="true" style={iconStyle}></i></button>
                    </div>
                    <div className='col-md-3'>
                      <button type="button" class="btn btn-info  btn-icon"><i class="fa fa-phone" aria-hidden="true" style={iconStyle}></i></button>
                    </div>
                  </div>
                  <div style={{ marginLeft: '30%', marginTop: '5%', marginRight: '30%' }}>
                  {isCopied &&
                   <button       onClick={() => copyToClipboard("test")}
                                  className='btn btn-dark' style={{ paddingLeft: '20%', paddingRight: '20%' }}>Copied! 
                                  </button>
                  }
                  {!isCopied &&  <button       onClick={() => copyToClipboard("mhaddad.dev@gmail.com")}
                     className='btn btn-dark' style={{ paddingLeft: '20%', paddingRight: '20%' }}>Copy email <i class="fa fa-copy"></i>
                     </button>}
                   
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer class="text-light py-3" className='my_footer' style={{ paddingBottom: '2%' }}>
        <div class="container text-center">
          <div className='row' style={{ paddingTop: '2%' }}>
            <div className='col-4'>
              <p className='text-white' style={{ fontSize: '25px' }}>Muhammed's Portfolio</p>
              <p className='text_footer' style={{ fontSize: '15px' }}>Thank you for visiting my portfolio.</p>
            </div>
            <div className='col-4'>
              <p className='text-white' style={{ fontSize: '25px' }}>Quick Links</p>

              <a href="#scrollspyHeading1" className='text-white' style={{ fontSize: '17px', display: 'block', paddingBottom: '2%' }}><i class="fa fa-link" style={{ paddingRight: '2%' }}></i>Home</a>
              <a href="#scrollspyHeading2" className='text-white' style={{ fontSize: '17px', display: 'block', paddingBottom: '2%' }}><i class="fa fa-link" style={{ paddingRight: '2%' }}></i>Education</a>
              <a href="#scrollspyHeading3" className='text-white' style={{ fontSize: '17px', display: 'block', paddingBottom: '2%' }}><i class="fa fa-link" style={{ paddingRight: '2%' }}></i>Work</a>
              <a href="#scrollspyHeading4" className='text-white' style={{ fontSize: '17px', display: 'block', paddingBottom: '2%' }}><i class="fa fa-link" style={{ paddingRight: '2%' }}></i>About</a>

            </div>
            <div className='col-4'>

              <p className='text-white' style={{ fontSize: '20px' }}>Let's Chat</p>
              <a className='text-white' style={{ fontSize: '17px' }}><i class="fa fa-phone" style={{ paddingRight: '2%' }}></i>Phone</a>
              <p className='text-white' style={{ fontSize: '17px' }}><i class="fa fa-envelope" style={{ paddingRight: '2%' }}></i>mhaddad.dev@gmail.com</p>
              <p className='text-white' style={{ fontSize: '17px' }}><i class="fa fa-map" style={{ paddingRight: '2%' }}></i>Dublin, Ireland</p>
              <div className='row' style={{ marginLeft: '15%', marginTop: '5%', marginRight: '5%' }}>
                <div className='col-md-3'>
                  <a href="https://www.linkedin.com/in/muhammed-haddad-6567901a2/" target="_blank" rel="noopener noreferrer">
                    <button type="button" className="btn btn-info btn-icon">
                      <i className="fa fa-linkedin" aria-hidden="true" style={iconStyle}></i>
                    </button>
                  </a>
                </div>
                <div className='col-md-3'>
                  <a href="https://github.com/mhaddad20" target="_blank" rel="noopener noreferrer">
                    <button type="button" className="btn btn-info btn-icon">
                      <i className="fa fa-github" aria-hidden="true" style={iconStyle}></i>
                    </button>
                  </a>
                </div>
                <div className='col-md-3'>
                  <a href="https://www.facebook.com/muhammed.haddad.125/" target="_blank" rel="noopener noreferrer">
                    <button type="button" className="btn btn-info btn-icon">
                      <i className="fa fa-facebook" aria-hidden="true" style={iconStyle}></i>
                    </button>
                  </a>
                </div>
                <div className='col-md-3'>
                  <button type="button" class="btn btn-info  btn-icon"><i class="fa fa-phone" aria-hidden="true" style={iconStyle}></i></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default NavbarPage;

