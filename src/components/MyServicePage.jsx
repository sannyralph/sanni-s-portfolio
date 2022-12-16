import gif1 from '../GIFS/webDev.gif'
import gif2 from '../GIFS/prodesign.gif'
import { Container} from 'react-bootstrap'


const MyServicePage = () => {
    return (

    <Container id="services" >
      <div class="container">

        <div class="section-title">
          <h2>Services</h2>
          <p>On a mission to learn and build a system that creates maximum growth &amp; improvement, while providing users with an experience that keeps them coming for more. </p>
        </div>

        <div class="services">
          <div class="col-lg-4 col-md-6 icon-box service" data-aos="fade-up">
          <img width="500" height="500" src={gif1} alt=""/>
            <div className="services-content">
            <h4 class="title"><var>PWA Development</var></h4>
            <p class="description">I Provide a progressive web app development which turns websites into effective application that offers users with awesome experience &amp; allows you to high consersions which will improve Customer satisfaction. <br/> <br/>
            These are achive by using of the right languages and framework, which combines different web technologies to create, optimized websites and web apps that allow visitors to get the most out of the resources at hand for a truly immersive experience.</p>
            </div>
          </div>
          <hr/>
        </div>

        <div class="services">
          <div class="col-lg-4 col-md-6 icon-box service" data-aos="fade-up">
          <img width="500" height="500" src={gif2} alt=""/>
            <div className="services-content">
            <h4 class="title"><var>Product Design</var></h4>
            <p class="description">I offer design research for websites and web apps that are easy and fun to use. With every project, focus on the company's goals, needs, and requirements to deliver a product that satisfies the management’s and customers’ needs.</p>
            </div>
          </div>
        </div>

        <div class="services">
          <div class="col-lg-4 col-md-6 icon-box service" data-aos="fade-up">
          <img width="500" height="500" src={gif1} alt=""/>
            <div className="services-content">
            <h4 class="title"><var>PWA Development</var></h4>
            <p class="description">I Provide a progressive web app development that turns websites into an effective application that offers users awesome experience &amp; allows you to have high conversions which will improve Customer satisfaction. <br/> <br/>
            These are achieved by using the right languages and framework, which combines different web technologies to create, optimized websites and web apps that allow visitors to get the most out of the resources at hand for a truly immersive experience.</p>
            </div>
          </div>
        </div>

        <div class="services">
          <div class="col-lg-4 col-md-6 icon-box service" data-aos="fade-up">
          <img width="500" height="500" src={gif2} alt=""/>
            <div className="services-content">
            <h4 class="title"><var>Product Design</var></h4>
            <p class="description">I offer design research for websites and web apps that are easy and fun to use. With every project, focus on the company's goals, needs, and requirements to deliver a product that satisfies the management’s and customers’ needs.</p>
            </div>
          </div>
        </div>


      </div>
    </Container>
    )
}

export default MyServicePage
