import img from '../images/profilePicture.jpeg'

const MyAboutPage = () => {
    return (
        <section id="about" className="about">
        <div className="container">
        <div className="section-title">
          <h2>About</h2>
          <p>A Financial Analyst on a career switching mission to Software Engineer, there has never been a better time to change from finance to Software development, Fintech is growing all the time, and businessess in the industry need talents who understand both programming and finance.</p>
        </div>

        <div className="row about-content">
          <div className="col-lg-4" data-aos="fade-right">
            <img src={img} className="img-fluid" id='about-img' alt=""/>
          </div>
          <div className="col-lg-8 pt-4 pt-lg-0 about-details" data-aos="fade-left">
            <h3 id='about-tittle'>Financial Analyst &amp; Software Engineer.</h3>
            <p className="fst-italic">
            I realized how much coding has boosted my intelligence, it has also enhanced my analytical skills and abilit to solve problems and be more creative. 
            </p>
            <div className="row about-li">
              <div className="col-lg-6">
                <ul>
                  <li><i className="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>DEC 4, 1994</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Country:</strong> <span>Nigeria</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+49 157 72103811</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>Berlin Germany</span></li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  <li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>Master</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Email:</strong> <span>Saaniabdulrafiu@gmail.com</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Currently Working at:</strong> <span>Hive Technology</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Available</span></li>
                </ul>
              </div>
            </div>
            <p>
              Throughout my Web Development Journey, learning and working with react has been the most interesting moment for me. I have been able to be build a couple of projects using react. 
              I've always wanted to specialized on Frontend Development, and React Js is making this journey smooth and quit enjoyable for me. although I belive there is a lot more to learn and achive in the future, with the right attitude and consistency, i'm sure I will get there. 
            </p> 
          </div>
        </div>
      </div>
      <section id="skills" className="skills section-bg">
      <div className="container">

        <div className="section-title">
          <h2>Skills</h2>
          <p>I strive for excellence and precision at all time, contributing the best of my ability and quota to improving organizational objective and achieving all goals set and target.</p>
        </div>

        <div className="row skills-content">

          <div className="col-lg-6 " data-aos="fade-up">

            <div className="progress">
              <span className="skill">HTML <i className="val">85%</i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar html-css-progress-bar" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>

            <div className="progress">
              <span className="skill">CSS <i className="val">70%</i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar css-progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>

            <div className="progress">
              <span className="skill">JavaScript <i className="val">50%</i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar javascript-progress-bar" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>

          </div>

          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">

            <div className="progress">
              <span className="skill">React<i className="val">80%</i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar react-css-progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>

            <div className="progress">
              <span className="skill">GitHub<i className="val">85%</i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar github-css-progress-bar" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>

            <div className="progress">
              <span className="skill">NoSQL<i className="val">55%</i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar nosql-css-progress-bar" role="progressbar" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
    </section>
    )
}

export default MyAboutPage