import img from '../images/profilePicture.jpeg'

const MyAboutPage = () => {
    return (
        <section id="about" class="about">
        <div class="container">
        <div class="section-title">
          <h2>About</h2>
          <p>A Financial Analyst on a career switching mission to Software Engineer, there has never been a better time to change from finance to Software development, Fintech is growing all the time, and businessess in the industry need talents who understand both programming and finance.</p>
        </div>

        <div class="row about-content">
          <div class="col-lg-4" data-aos="fade-right">
            <img src={img} class="img-fluid" id='about-img' alt=""/>
          </div>
          <div class="col-lg-8 pt-4 pt-lg-0 about-details" data-aos="fade-left">
            <h3 id='about-tittle'>Financial Analyst &amp; Software Engineer.</h3>
            <p className="fst-italic">
            I realized how much coding has boosted my intelligence, it has also enhanced my analytical skills and abilities to solve problems and be more creative. 
            </p>
            <div className="row about-li">
              <div className="col-lg-6">
                <ul>
                  <li><i class="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>4 DEC 1994</span></li>
                  <li><i class="bi bi-chevron-right"></i> <strong>Country:</strong> <span>Nigeria</span></li>
                  <li><i class="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+49 157 72103811</span></li>
                  <li><i class="bi bi-chevron-right"></i> <strong>City:</strong> <span>Berlin Germany</span></li>
                </ul>
              </div>
              <div class="col-lg-6">
                <ul>
                  <li><i class="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>Master</span></li>
                  <li><i class="bi bi-chevron-right"></i> <strong>Email:</strong> <span>Saaniabdulrafiu@gmail.com</span></li>
                  <li><i class="bi bi-chevron-right"></i> <strong>Currently Working at:</strong> <span>Hive Technology</span></li>
                  <li><i class="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Available</span></li>
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
    </section>
    )
}

export default MyAboutPage